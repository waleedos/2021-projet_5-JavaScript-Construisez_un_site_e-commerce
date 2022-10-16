//--------------------------------------------------Structure du produit dans product.html-------------------------------------//
function buildCameraProduct(camera){
    return `
    <div class="infoProduct">
        <div class="product">
            <img id="cardImgProduct" src="${camera.imageUrl}" alt="Card image">
            <div class="cardBodyProduct">
                <h5 id="cardTitleProduct">${camera.name}</h5>
                    <p id="cardDescriptionProduct">${camera.description}</p>
                    <p id="cardPriceProduct">${camera.price / 100}.00 €</p>
                        <div class="choiceLenses" role="search" aria-label="Choix du produit">
                            <label class="font-weight-bold" tabindex="0">Choisir un optique :</label>
                                <select id="cameraLenses" class="lenses-product">
                                </select>
                        </div> 
                        <div id="quantity">
                                <span id="plus" onclick="addQuantity(event)"><i class="fas fa-plus-circle"></i></span>
                                    <input type="number" id="plusOrMinusClick" value="1" min="1"/>
                                <span id="minus" onclick="minusQuantity(event)"><i class="fas fa-minus-circle"></i></span>
                        </div>                                
            </div>
        </div>  
    </div>`;
}

//------------------------------Lenses------------------------------------//
//Fonction pour le tableau "lenses" dans une balise <select>
function buildCameraLensesSelectList (lenses) {
    const optionList = document.querySelector("#cameraLenses").options;

    lenses.forEach(option =>
    optionList.add(
        new Option(option, option)
    )
    );
}


//--------------------------------Quantité-------------------------------//
function addQuantity (event){
    event.preventDefault();
    const quantityClicks = document.getElementById("plusOrMinusClick");
    quantityClicks.valueAsNumber++;
}

function minusQuantity (event){
    event.preventDefault();
    const quantityClicks = document.getElementById("plusOrMinusClick");
    
    if (quantityClicks.valueAsNumber == 1){
        return;
    }
    document
        .getElementById("plusOrMinusClick")
        .value = quantityClicks.valueAsNumber -1;
}