//----------------------------------Récupération de la liste camera------------------------------------------//

// Fonction permettant de récupérer la liste de produit du serveur :
// async fetch est une fonction asynchrone, 
// await fetch('http....') lance une requête HTTP vers l'URL. Étant donné que le await est présent, 
// la fonction asynchrone est suspendue jusqu'à ce que la demande se termine.
async function loadCameras() {
    const response = await fetch('http://localhost:3000/api/cameras');
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! statut : ${response.status}`);
    }
    return await response.json();
};

// Lorsque la demande est terminée, la response est affecté à l'objet de réponse de la demande. 
// et nous pouvons alors extraire des données utiles, comme JSON ou du texte brut, à partir de la réponse.
// Fonction exécuter au chargement de la page
async function onPageLoadCameras() {
    try {
      //On récupère la liste de caméras du serveur
      let cameras = await loadCameras();
      displayCameras(cameras);
  
    } catch(e) {
      console.log(e);
    }
};
 
// Fonction qui prend en paramètre la liste de caméras récupérés du serveur et 
// crée un objet caméra qui est ajouté dans une "card" boostrap 
// l'objet caméra est créé à partir de la classe camera définie dans le fichier du fichier camera.js
function displayCameras(cameras) {
  let mainContainer = document.getElementById('productsList');

  //Boucle forEach en continu pour chaque tableau camera
  cameras.forEach((camera) => {
    mainContainer.innerHTML += buildCamera(new Camera(camera));
  })
}