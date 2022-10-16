// La classe Order permet de créer l'objet order (commande)
// L'objet order comprend les données de contact du client,
// Les produits commandés: List de produits
//Pour construire l'objet commande (order)
// On passe au constructeur 
// l'objet contact
// liste de produits présent dans le LocalStorage
class Order{
    constructor(contact, products) {
        this.contact = contact;
        this.products = products;
    }
}