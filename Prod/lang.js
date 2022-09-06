/*
---- PROD VERSION ---
 ---- Released by K Laurion Dareich 19/12/21:16:30

 -------------------------------------------------------------------------------
 TRANSLATING A WEBSITE IN MULTIPLE LANGUAGES WITHOUT USING A LIBRARY OF FRAMEWORK
 ONLY PURE JAVASCRIPT (ES6)
 --------------------------------------------------------------------------------
*/


//  This func creates and stocks in cookie the language String 

  function setCookie(lang){document.cookie = "lang=" + lang + ';path=/';}

//  This func gets strings stored in cookie

  function getCookie() {
    let cookies = document.cookie.split(';');

    for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      cookie = cookie.substring();

      if(cookie .startsWith('lang')){retrieveData(cookie);}
    }
  }

// Sending AJAX request to data

  async function retrieveData(cookie) {

    let langCookie = cookie.split('=');
    let languageChar = langCookie[1];

    let fullPath = "languages/" + languageChar + '.json';

    const response = await fetch(fullPath);
    await response.json()
    .then(data => {
      getTags(data);
    }).catch(error => console.error("Zut! Error happens", error));
  }

// Getting language chart: Called it when you click or select a language

 function getLanguage(langChar) {
   const getChar = langChar;
   setCookie(getChar);
   getCookie();
  }

// Passing data to the HTML view

function getTags(data){

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

// Refresh page

 window.onbeforeunload = getCookie();

// getting value from data-lang-btn customized attribute

 const data_btn = document.querySelectorAll('[data-lang-btn]');
  for(let getValue of data_btn) {
    getValue.addEventListener('click', function(){
      getLanguage(this.dataset.langBtn);
    })
  }

