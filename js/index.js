class Card {
    constructor(cardData) {
        this.cardData = cardData;
        // UI
        this.UIMainElement = document.querySelector('section.cards');

        this.initialize();
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `<H2>${cardData.name}</H2>`;
        card.innerHTML = `<p class="card__number">${this.cardData.nationalPokedexNumber}</p>`;
        card.innerHTML = `<img src=${this.cardData.imageUrl}/>`;

        this.UIMainElement.appendChild(card);
    }
    initialize() {
        this.createCard();
    }
}
class Pokemon {
    constructor() {
        // API
        this.URLCards = 'https://api.pokemontcg.io/v1/cards?pageSize=4&page=';

        // UI
        this.UIMainElement = document.querySelector('section.cards');

        // Variables
        this.state = {};
        this.downloadData = {};
        this.currentPage = 0;
        this.isLoading = false;
        this.initialize();
    }

    initialize() {
        this.getDataFromAPI();
    }

    getDataFromAPI() {
        this.isLoading = true;

        this.downloadData = axios
            .get(`${this.URLCards}${this.currentPage + 1}`)
            .then(({ data }) => {
                // console.log(data);
                this.downloadData = data;
            });
        this.currentPage++;
    }
}
