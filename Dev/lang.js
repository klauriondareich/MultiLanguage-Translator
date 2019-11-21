//  Cette fonction crée un cookie et stocke le string 'en' ou 'fr'

  function setCookie(lang){
    document.cookie = "lang=" + lang + ';path=/';
    console.log("dans le cookie " + document.cookie); // Affichage
  }

//  Cette fonction recupère les cookies

  function getCookie() {
    let cookies = document.cookie.split(';');
    console.log("access cookies : " + cookies); // Affichage

    for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      cookie = cookie.substring(1);
      console.log("chaine de caractère : " + cookie);
      console.log(cookie + " Type : " + typeof(cookie));
      if(cookie .startsWith('lang')){
          console.log("COOKIE " + cookie); // Affichage
           retrieveData(cookie);
       }
    }
  }

// Cette fonction envoie une requête AJAX qui recupère les données de langue

  async function retrieveData(cookie) {

    let langCookie = cookie.split('=');
    let languageChar = langCookie[1];
    console.log('mychar +++:  ' + languageChar); // Affichage

    let fullPath = "languages/" + languageChar + '.json';
    console.log('chemin du fichier : ' + fullPath); // Affichage

    const response = await fetch(fullPath);
    const jsonFormat = await response.json()
    .then(data => {
      getTags(data);
      console.log("mes données : " + data);
    }).catch(error => console.error("AKA ! une erreur est survenue lors du chargement des données.", error));
  }

// Cette fonction est appelé par un event click et passe en argument le caractère de la langue correspondant

 function getLanguage(langChar) {
   const getChar = langChar;
   setCookie(getChar);
   console.log("getchar : " + getChar);
   getCookie();
  }

// Cette fonction cible les éléments du DOM sur lesquels les informations de langue seront affichées

function getTags(data){
  let getData = data;

  const keysArray = [];
  const dataAttributesArray = document.querySelectorAll('[data-lang-content]');

  for(let attribute of dataAttributesArray){
    keysArray.push(attribute.dataset.langContent);
  }
  console.log(keysArray); // Affichage

  let get_key, selected_element = '';
  for (let item in data){
    console.log('item : '+ data[item]); // Affichage
    get_key = keysArray.find(element => item === element);

    selected_element = "[data-lang-content='" + get_key + "']";
    console.log(document.querySelector(selected_element).innerHTML); // Affichage
    document.querySelector(selected_element).innerHTML = data[item];
  }
}

// Cette fonction est appelé lorque la page est rafraîchit

 window.onbeforeunload = getCookie();

// Recupération de la valeur de l'attribut personnalisé data-lang-btn après un Event click

 const data_btn = document.querySelectorAll('[data-lang-btn]');
  for(let getValue of data_btn) {
    getValue.addEventListener('click', function(){
      console.log(this.dataset); // Affichage
      getLanguage(this.dataset.langBtn);
    })
  }

  // -----------------------------------