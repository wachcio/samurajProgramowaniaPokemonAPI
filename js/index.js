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
        card.innerHTML = '';
        card.innerHTML += `<p class="card__name">${this.cardData.name}</p>`;
        card.innerHTML += `<p class="card__number">Nr: ${this.cardData.number}</p>`;
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
        this.loader = document.querySelector('.load_more__loader');

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
        this.loader.classList.add('load_more__loader--visible');

        this.downloadData = axios
            .get(`${this.URLCards}${this.currentPage + 1}`)
            .then(({ data }) => {
                this.downloadData = data;

                this.createCards();
            });
        this.currentPage++;
    }

    createCards() {
        this.loader.classList.remove('load_more__loader--visible');
        this.downloadData.cards.forEach((e) => {
            new Card({
                name: e.name,
                number: e.number,
                imageUrl: e.imageUrl,
                supertype: e.supertype,
                subtype: e.subtype,
                rarity: e.rarity,
            });
        });
    }
    // }
}
