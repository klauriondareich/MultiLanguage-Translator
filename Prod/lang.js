/*
---- PROD VERSION ---
 ---- Released by DreamAndCode 19/12/21:16:30
*/


//  Cette fonction crée un cookie et stocke le string 'en' ou 'fr'

  function setCookie(lang){document.cookie = "lang=" + lang + ';path=/';}

//  Cette fonction recupère les cookies

  function getCookie() {
    let cookies = document.cookie.split(';');

    for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      cookie = cookie.substring();

      if(cookie .startsWith('lang')){retrieveData(cookie);}
    }
  }

// Cette fonction envoie une requête AJAX qui recupère les données de langue

  async function retrieveData(cookie) {

    let langCookie = cookie.split('=');
    let languageChar = langCookie[1];

    let fullPath = "languages/" + languageChar + '.json';

    const response = await fetch(fullPath);
    const jsonFormat = await response.json()
    .then(data => {
      getTags(data);
    }).catch(error => console.error("AKA ! une erreur est survenue lors du chargement des données.", error));
  }

// Cette fonction est appelé par un event click et passe en argument le caractère de la langue correspondant

 function getLanguage(langChar) {
   const getChar = langChar;
   setCookie(getChar);
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

  let get_key, selected_element = '';
  for (let item in data){
    get_key = keysArray.find(element => item === element);

    selected_element = "[data-lang-content='" + get_key + "']";
    document.querySelector(selected_element).innerHTML = data[item];
  }
}

// Cette fonction est appelé lorque la page est rafraîchit

 window.onbeforeunload = getCookie();

// Recupération de la valeur de l'attribut personnalisé data-lang-btn après un Event click

 const data_btn = document.querySelectorAll('[data-lang-btn]');
  for(let getValue of data_btn) {
    getValue.addEventListener('click', function(){
      getLanguage(this.dataset.langBtn);
    })
  }

  // -----------------------------------
