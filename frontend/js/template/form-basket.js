//------------------------------------------------Structure du formulaire------------------------------------//
const form = () => {

    const positionForm = document.getElementById("form");

    const structureFormulaire = `
    <form name="orderForm" class="form-order" onsubmit="handleSubmit(event)" role="search" aria-label="Formulaire">
        <h4 class="formTitle">Merci de complèter ce formulaire pour valider la commande :</h4>
            <div class="input-form">
                <div class="name">
                    <input type="text" id="lastName" name="lastName" class="contact" pattern="[A-Z][A-Za-z' -]+" title="Le format requis : lettres uniquement" placeholder="Nom" aria-labelledby="Nom" required>
                    <input type="text" id="firstName" name="firstName" class="contact" pattern="[A-Z][A-Za-z' -]+" title="Le format requis : lettres uniquement" placeholder="Prénom" aria-labelledby="Prénom" required>
                </div>
                <div class="address">
                    <input type="text" id="adress" name="adress" class="contact-address" minlenght="5" maxlenght="40" title="Le format requis : lettres et chiffres uniquement" placeholder="Adresse" aria-labelledby="Adresse" required>
                </div>
                <div class="cp">
                    <input type="text" id="postCode" name="postCode" class="contact" pattern="([A-Z]+[A-Z]?\-)?[0-9]{1,2} ?[0-9]{3}" minlenght="5" title="Le format requis : 5 chiffres minimum uniquement" placeholder="Code Postale" aria-labelledby="Code Postale" required>
                    <input type="text" id="city" name="city" class="contact" pattern="[A-Z][A-Za-z' -]+" title="Le format requis : lettres uniquement" placeholder="Ville" aria-labelledby="Ville" required>
                </div>
                <div class="tel-mail">
                    <input type="tel" id="tel" name="tel" class="contact-tel" pattern="0[1-9][0-9]{8}" max-lenght="10" title="Le format requis : 10 chiffres maximum uniquement" placeholder="Téléphone" aria-labelledby="Téléphone" required>
                    <input type="email" id="email" name="email" class="contact-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Le format requis : exemple@mail.com"  placeholder="E-mail" required>
                </div>
                <div class="commentary">
                    <textarea type="text" id="commentary" name="commentary" class="commentary" maxlength="200" title="Informations complémentaires" placeholder="Informations complémentaires à la livraison" aria-labelledby="Informations complementaires"></textarea>
                </div>
            </div>
        <!--Bouton validé la commande-->
        <div class="btn-basket" role="button" aria-label="Bouton" tabindex="0">
            <button type="submit" id="validOrder" class="button">Valider la commande</button>
        </div>
    </form>
    `;

    positionForm.insertAdjacentHTML("afterend", structureFormulaire);

};

form();


//--------------------------------------------Validation des champs du formulaire-----------------------------------------//