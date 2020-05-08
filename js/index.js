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
        this.URLCards = 'https://api.pokemontcg.io/v1/cards?pageSize=';

        // UI
        this.UIMainElement = document.querySelector('section.cards');
        this.loader = document.querySelector('.load_more__loader');
        this.searchInput = document.querySelector('.search');

        // Variables
        this.state = {};
        this.downloadData = {};
        this.pageSize = 0;
        this.limit = 4;

        this.currentPage = 0;
        this.isLoading = false;

        this.initialize();
    }

    initialize() {
        this.searchInput.addEventListener(
            'keypress',
            this.filtersData.bind(this)
        );
        this.getDataFromAPI();
    }

    getDataFromAPI() {
        this.loader.classList.add('load_more__loader--visible');
        this.pageSize += this.limit;

        axios.get(`${this.URLCards}${this.pageSize}`).then(({ data }) => {
            this.downloadData = data;

            this.createCards(this.downloadData);
        });
        this.currentPage++;
    }

    createCards(data) {
        console.log('cards data', data);

        this.UIMainElement.innerHTML = '';

        this.loader.classList.remove('load_more__loader--visible');
        data.cards.forEach((e) => {
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
    filtersData(e) {
        console.log('download data', this.downloadData);

        const regexStr =
            '(?=.*' + e.target.value.split(/,|\s/).join(')(?=.*') + ')';
        const searchRegEx = new RegExp(regexStr, 'gi');

        let searchResult = _.filter(this.downloadData, (o) => {
            let result = String(o.name).search(searchRegEx);
            // String(o.number).search(searchRegEx)&&
            // String(o.supertype).search(searchRegEx) &&
            // String(o.subtype).search(searchRegEx) &&
            // String(o.rarity).search(searchRegEx);
            return result == 0 ? true : false;
        });
        console.log('searchResult', searchResult[0]);

        this.createCards({
            cards: searchResult[0],
        });
    }
    // }
}
