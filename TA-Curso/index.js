'use strict'

function createCard(cardId, logoSrc, titleText, subtitleText, phoneNumberText, addressText, emailText) {
    let card = document.getElementById(cardId);

    let logo = document.createElement('img');
    logo.src = logoSrc;
    logo.className = "logo";
    card.appendChild(logo);

    let title = document.createElement('h1');
    title.textContent = titleText;
    title.className = "title";
    card.appendChild(title);

    let subtitle = document.createElement('h2');
    subtitle.textContent = subtitleText;
    subtitle.className = "subtitle";
    card.appendChild(subtitle);

    let phoneNumber = document.createElement('h3');
    phoneNumber.textContent = phoneNumberText;
    phoneNumber.className = "phone-number";
    card.appendChild(phoneNumber);

    let address = document.createElement('h4');
    address.textContent = addressText;
    address.className = "address";
    card.appendChild(address);

    let email = document.createElement('h5');
    email.textContent = emailText;
    email.className = "email";
    card.appendChild(email);
}

createCard("card", "KingGhidorah.png", "King Ghidorah", "Monster Zero", "091964691", "Adress: ???", "Ghidorah@kaiju.com");
createCard("card2", "Godzilla.png", "Gojira", "King of the Monsters", "091954591", "Adress: Monster Island", "goji1954@kaiju.com");
createCard("card3", "Mothra.png", "Mothra", "Godess of the Earth", "091961691", "Adress: Infant Island", "mothra@kaiju.com");