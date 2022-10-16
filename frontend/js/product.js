//----------------Récupération des caméras de l'API avec l'id--------------------//
//Création d'une variable pour la caméra sélectionné
let selectedCamera;

//Récupération de l'id du produit
function getCamera() { 
  const cameraId = new URL(location.href).searchParams.get("id");
  const url = `http://localhost:3000/api/cameras/${cameraId}`;
  fetch(url)
  .then((httpBodyResponse) => httpBodyResponse.json())
    .then((camera) => {
      selectedCamera = camera;
      hydratePage();
      })
        .catch((error) => {
          alert(error)
        });
}

//Hydrater la page pour n'attacher que des gestionnaires d'événements.
function hydratePage() {
    if(selectedCamera){
      let mainContainerProduct = document.getElementById('cardProduct');
      mainContainerProduct.innerHTML = buildCameraProduct(selectedCamera); 
      buildCameraLensesSelectList(selectedCamera.lenses);
    }
}

//---------------------------Ajout de la caméra au panier-----------------------//
//Sélection du bouton ajouter le produit au panier
const btn_addCart = document.querySelector("#add_product_to_basket");

//Ecouter le bouton et envoyer le panier
btn_addCart.addEventListener("click", (event) =>{
  event.preventDefault();
  alert('Vous avez ajouté le produit dans votre panier !')

  let selectLenses = document.getElementById("cameraLenses");

  const quantity = document.getElementById("plusOrMinusClick").valueAsNumber;

  //Récupérer les données sélectionnées
  const productAdd = {
      imageUrl: selectedCamera.imageUrl,
      id: selectedCamera._id,
      name: selectedCamera.name,
      price: (selectedCamera.price / 100)*quantity,
      lense: selectLenses.value,
      quantity
  }

  //Envoyer les données sélectionnées au localStorage
  let basket = JSON.parse(localStorage.getItem('myBasket'));
  //Vérifier si le panier est existe 
  //Si le panier n'existe pas on initialise avec un array vide
  if (!basket){ 
    basket = [];
  }

  //Vérifier si le produit existe déjà dans le localStorage
  const add2Product = basket.find(product => product.id === productAdd.id);
  if (add2Product){
    //si existe déjà l'ajouter à la quantité
    add2Product.quantity = add2Product.quantity + productAdd.quantity;
    //et au prix
    add2Product.price = add2Product.price + productAdd.price;
  }else{
    //sinon l'ajouter dans basket
    basket.push(productAdd);
  }
  //Envoi d'un nouvel emplacement appelé myBasket vers le localStorage avec en paramètre basket
  localStorage.setItem('myBasket', JSON.stringify(basket));
});