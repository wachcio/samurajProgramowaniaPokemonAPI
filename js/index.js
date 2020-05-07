class Card {
    constructor(cardData) {
        this.cardData = cardData;
        // UI
        this.UIMainElement = document.querySelector('section.cards');

        this.initialize();
    }
    initialize() {
        this.createCard();
    }
    createCard() {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `<H2 class="card__name>${this.cardData.name}</H2>`;
        card.innerHTML += `<p class="card__number">Nr: ${this.cardData.nationalPokedexNumber}</p>`;
        card.innerHTML += `<img class="card__img" src=${this.cardData.imageUrl}/>`;
        card.innerHTML += `<p class="card__supertype">Supertype: ${this.cardData.supertype}</p>`;
        card.innerHTML += `<p class="card__subtype">Subtype: ${this.cardData.subtype}</p>`;
        card.innerHTML += `<p class="card__rarity">Rarity: ${this.cardData.rarity}</p>`;

        this.UIMainElement.appendChild(card);
        // console.log('UI', this.UIMainElement);
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
                this.downloadData = data;

                this.createCards();
            });
        this.currentPage++;
    }

    createCards() {
        this.downloadData.cards.forEach((e) => {
            new Card({
                name: e.name,
                nationalPokedexNumber: e.nationalPokedexNumber,
                imageUrl: e.imageUrl,
                supertype: e.supertype,
                subtype: e.subtype,
                rarity: e.rarity,
            });
        });
    }
    // }
}
