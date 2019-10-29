//  Cette fonction crée un cookie et stocke le string 'en' ou 'fr'

  function setCookie(lang){
    document.cookie = "lang=" + lang + ';path=/';
    console.log("dans le cookie " + document.cookie); // Affichage
  }

//  Cette fonction recupère les cookies

  function getCookie() {
    let cookies = document.cookie.split(';');
    console.log("access cookies " + cookies); // Affichage

    for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      cookie = cookie.substring(1);
      if(cookie === 'lang=en' || cookie === 'lang=fr' || cookie === 'lang=es'){
          console.log(cookie); // Affichage
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
    })
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
  document.getElementById("first").innerHTML = getData.fullname;
  document.getElementById("second").innerHTML = getData.firstname;
  document.getElementById("third").innerHTML = getData.lastname;
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
