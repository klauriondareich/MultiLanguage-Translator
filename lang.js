//  Cette fonction recupère le path vers le fichier en.json ou fr.json

  function getLanguage(lang){
    const fullPath = "language/" + lang + '.json';

    retrievedata(fullPath);
  }

// Cette fonction recupère les données contenues dans le fichier de la langue dont le path a été passé en paramètre

  async function retrievedata(fullPath){
    langData = fullPath;
    const response = await fetch(langData);
    const jsonFormat = await response.json()
    .then(data => {
      getTags(data);
      // console.log(data);
    })
  }

// Cette fonction cible les éléments du DOM sur lesquels les informations de langue seront affichées

function getTags(data){
  let getData = data;

  // Création du cookie

  setCookie = document.cookie;
  setCookie = JSON.stringify(getData);
  console.log(setCookie);

  document.getElementById("first").innerHTML = getData.fullname;
  document.getElementById("second").innerHTML = getData.firstname;
  document.getElementById("third").innerHTML = getData.lastname;
}
