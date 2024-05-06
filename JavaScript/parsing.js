fetch("/Data/cards.xml")
    .then(response => response.text())
    .then(xmlString => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(xmlString, "text/xml");

        let cards = xmlDoc.getElementsByTagName("card");

        let firstCardsContainer = document.querySelector(".first-cards-container");
        let secondCardsContainer = document.querySelector(".second-cards-container");

        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            let id = card.getElementsByTagName("id")[0].textContent;
            let image = card.getElementsByTagName("card-image")[0].textContent;
            let type = card.getElementsByTagName("card-type")[0].textContent;
            let title = card.getElementsByTagName("card-title")[0].textContent;
            let author = card.getElementsByTagName("card-author")[0].textContent;

            let cardContainer = document.createElement("div");
            let imgElement = document.createElement("img");
            let typeElement = document.createElement("h5");
            let titleElement = document.createElement("h2");
            let authorElement = document.createElement("strong");

            imgElement.src = image;
            imgElement.alt = "picture-" + id;
            typeElement.textContent = type;
            titleElement.innerHTML = title;
            authorElement.textContent = author;

            cardContainer.appendChild(imgElement);
            cardContainer.appendChild(typeElement);
            cardContainer.appendChild(titleElement);
            cardContainer.appendChild(authorElement);

            if (i < 4) {
                firstCardsContainer.appendChild(cardContainer);
            } else {
                cardContainer.style.marginRight = "0";
                secondCardsContainer.appendChild(cardContainer);
            }
        }
    })
    .catch(error => {
        console.log("Ошибка при загрузке XML файла:", error);
    });