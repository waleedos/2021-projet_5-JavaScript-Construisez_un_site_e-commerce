// La fonction buildCamera permet d'afficher une camera dans un card bootstrap
// Avec cette fonction on affiche les produits sur la page d'affichage de produits (products-list.html)
// Lorsqu'on récupère les prouits de l'api
// On appelle la fonction buildCamera qui prend en paramètre l'objet camera 
// pour afficher chaque produit sur la page products-list.html
function buildCamera(camera){
    return `
    <div class="p-2">
    <a href="../pages/product.html?id=${camera.id}">
        <div class="card" style="width: 18rem;">
            <img id="cardImg" src="${camera.imageUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 id="cardTitle">${camera.name}</h5>
                    <p id="cardDescription">${camera.description}</p>
                    <p id="cardPrice" class="price">${camera.price}</p>
            </div>
        </div>
    </a>
    </div>`;
}