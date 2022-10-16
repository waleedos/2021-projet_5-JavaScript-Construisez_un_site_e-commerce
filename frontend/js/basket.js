// Fonction d'affichage des prix au Format Europen
const number = 123456.789;

// expected output: "123.456,79 €"

//---------------------------------------------Récuperation du panier-----------------------------------------//
const basketRecovery = JSON.parse(localStorage.getItem('myBasket'));
function onLoadBasket () {
  // div pour le prix
  const divTotalPrice = document.getElementById("divTotalPrice");
  // On récupère la section où afficher le panier
  const basketDisplay = document.getElementById("getProductFromLocalStorageToBasket");
  let structureProductBasket ='';
  let totalPrice=0;
  basketRecovery.forEach(item => {
    totalPrice+=Number(item.price);
        structureProductBasket = structureProductBasket + ` 
        <div class="full-basket">
        <img  class="img-basket" src="${item.imageUrl}" alt="Card image">
          <div><p class="info-basket">${item.name}</p></div>
          <div><p class="info-basket">${item.lense}</p></div>
          <div><p class="info-basket">${item.price}.00 €</p></div> 
          <div><p class="info-basket">x${item.quantity}</p></div>
          <i class="far fa-trash-alt btn-supprimer" id="btnDeleted" onclick="deleteItem(event, '${item.id}')"></i></div>
        </div>`;  
  });
  //-----------------------------Retour de l'affiche du prix total de la commande-----------------------------------//
  //Afficher le prix total de la commande
  const totalPriceDisplay = `
  <div id="total-price" class="total-cart-price"> Le prix total de vos achats est de : ${totalPrice}.00 €</div>
  `
  // On insère les produits récupérés du localstorage
  if(structureProductBasket) {
    basketDisplay.innerHTML =  structureProductBasket;
    divTotalPrice.innerHTML = totalPriceDisplay;
    //Ajout du prix total dans le localStorage
    localStorage.setItem('totalCommand', totalPrice);
  }
}

//----------------------------------------------Supprimer une caméra----------------------------------------------//
// Fonction pour supprimer l'article de la commande
function deleteItem(event, itemId) {
  event.preventDefault();
  // on affiche un message de confirmation
  let choice = confirm("Voulez-vous retirer l'article du panier ?");
  if(choice) {
    const newBasket = basketRecovery.filter(product => product.id !== itemId);
    // On vérifie le contenu du nouveau panier
     if(newBasket) {
      localStorage.setItem('myBasket', JSON.stringify(newBasket));
      // On reload la page pour afficher le contenu du new panier
      location.reload();
     }
  }
}

//---------------------------------Envoie du panier et du formulaire---------------------------------------------//
//Fonction pour obtenir un Id de commande
function getOrderId(responseId) {
  let orderId = responseId.orderId;
  localStorage.setItem("orderId", orderId);
  // au clic du bouton, on arrive sur la page de confirmation
  window.location.href='../pages/confirmation.html?orderId=' + orderId;
}

//Fonction pour gérer la soumission du formulaire
async function handleSubmit(event) {
  //Récupération des données saisie dans le formulaire
  event.preventDefault();
    try {
      const data = new FormData(event.target);
      const lastName = data.get('lastName');
      const firstName = data.get('firstName');
      const adress = data.get('adress');
      const postCode = data.get('postCode');
      const city = data.get('city');
      const tel = data.get('tel');
      const email = data.get('email');
      const commentary = data.get('commentary');
      
        //Envoyer le panier et le contact
        if(basketRecovery && basketRecovery.length > 0){
          //créer le contact
          const contact = new Contact(firstName, lastName, adress, city, postCode, tel, email, commentary);
          // On récupère les id des produits se trouvant dans le panier
          const productIdList = [];
          basketRecovery.forEach(product => productIdList.push(product.id));
          //créer la commande avec le contact et le panier
          const order = new Order (contact, productIdList);
          let response = await sendCommandToServer(order);
          getOrderId(response);
        }
      }catch(e) {
        console.log(e);
      }
}

//Fonction pour l'envoi de la commande en method POST vers le serveur
async function sendCommandToServer(order) {
  const config = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(order)
  }
    const response = await fetch("http://localhost:3000/api/cameras/order", config)
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! statut : ${response.status}`);
      }
        return await response.json();
}

