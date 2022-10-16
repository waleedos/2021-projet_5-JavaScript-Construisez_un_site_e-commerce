//-------Récupération de l'id  et du prix total de la commande sur le localStorage--------//
const orderIdRecovery = localStorage.getItem('orderId');
const totalCommand = localStorage.getItem('totalCommand');

//Affichage de la structure HTML de l'id de commande
function onLoadCommand () {
    //création de la structure
    const orderIdDisplay = () => {
        //Récupération de l'élément HTML
        const positionOrderId = document.getElementById("order-id-display");
        //Variable de la structure du prix total de la commande
        const structureTotalCommand = `
        <div id="total-price" class="total-price-command"> Le prix total de votre commande est de : ${totalCommand}.00€</div>
        `;
        //Variable de la structure de l'id de la commande
        const structureOrderId = `
        <p class="pIdOrder" tabindex="0">Numéros de votre commande : <strong>${orderIdRecovery}</strong></p>
        `;

        //Insertion des structure dans l'élément HTML récupéré
        //Après structureTotalCommand
        positionOrderId.insertAdjacentHTML("afterend", structureOrderId);
        //Avant structureOrderId
        positionOrderId.insertAdjacentHTML("beforeend", structureTotalCommand);
        
        //Vider le localStorage
        localStorage.clear();
    }
    orderIdDisplay();
};

