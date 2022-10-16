// La classe Camera permet de créer un objet camera:
// Quand on récupère la liste des Camera de l'api (service)
// ON utilise cette classe pour créer un objet camera à afficher sur la page.
// Pour construire un objet camera, on passe le produit comme 
// paramètre au constructeur
class Camera{
    constructor(product) {
        this.id = product._id;
        this.name = product.name;
        this.price =`${product.price / 100}.00 €`;
        this.description = product.description;
        this.imageUrl = product.imageUrl;
    }
}