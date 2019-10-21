//  Cette fonction crée un cookie et stocke le string 'en' ou 'fr'

  function setCookie(lang){
    document.cookie = "lang=" + lang + ';path=/';
    console.log(document.cookie);
  }

// Cette fonction recupère les données contenues dans le fichier de la langue dont le path a été passé en paramètre

  async function retrieveData(){
    const language = JSON.stringify(document.cookie);
    const fullPath = "language/" + language + '.json';
    console.log('le string : ' + fullPath);

    const response = await fetch(fullPath);
    const jsonFormat = await response.json()
    .then(data => {
      getTags(data);
      // console.log(data);
    })
  }

function getLanguage(lang){
  const langCharacter = lang;
  setCookie(langCharacter);
  retrieveData();
}
// Cette fonction cible les éléments du DOM sur lesquels les informations de langue seront affichées

function getTags(data){
  let getData = data;
  document.getElementById("first").innerHTML = getData.fullname;
  document.getElementById("second").innerHTML = getData.firstname;
  document.getElementById("third").innerHTML = getData.lastname;
}
