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

        this.downloadData = {
            cards: [
                {
                    id: 'xy7-4',
                    name: 'Bellossom',
                    nationalPokedexNumber: 182,
                    imageUrl: 'https://images.pokemontcg.io/xy7/4.png',
                    imageUrlHiRes:
                        'https://images.pokemontcg.io/xy7/4_hires.png',
                    types: ['Grass'],
                    supertype: 'Pokémon',
                    subtype: 'Stage 2',
                    evolvesFrom: 'Gloom',
                    hp: '120',
                    retreatCost: ['Colorless'],
                    convertedRetreatCost: 1,
                    number: '4',
                    artist: 'Mizue',
                    rarity: 'Uncommon',
                    series: 'XY',
                    set: 'Ancient Origins',
                    setCode: 'xy7',
                    attacks: [
                        {
                            cost: ['Grass'],
                            name: 'Windmill',
                            text:
                                'Switch this Pokémon with 1 of your Benched Pokémon.',
                            damage: '20',
                            convertedEnergyCost: 1,
                        },
                        {
                            cost: ['Grass', 'Colorless'],
                            name: 'Flower Tornado',
                            text:
                                'Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.',
                            damage: '60',
                            convertedEnergyCost: 2,
                        },
                    ],
                    weaknesses: [
                        {
                            type: 'Fire',
                            value: '×2',
                        },
                    ],
                },
                {
                    id: 'dp6-90',
                    name: 'Cubone',
                    nationalPokedexNumber: 104,
                    imageUrl: 'https://images.pokemontcg.io/dp6/90.png',
                    imageUrlHiRes:
                        'https://images.pokemontcg.io/dp6/90_hires.png',
                    types: ['Fighting'],
                    supertype: 'Pokémon',
                    subtype: 'Basic',
                    hp: '60',
                    retreatCost: ['Colorless'],
                    convertedRetreatCost: 1,
                    number: '90',
                    artist: 'Kagemaru Himeno',
                    rarity: 'Common',
                    series: 'Diamond & Pearl',
                    set: 'Legends Awakened',
                    setCode: 'dp6',
                    attacks: [
                        {
                            cost: ['Colorless'],
                            name: 'Headbutt',
                            text: '',
                            damage: '10',
                            convertedEnergyCost: 1,
                        },
                        {
                            cost: ['Fighting', 'Colorless'],
                            name: 'Bonemerang',
                            text:
                                'Flip 2 coins. This attack does 20 damage times the number of heads.',
                            damage: '20×',
                            convertedEnergyCost: 2,
                        },
                    ],
                    resistances: [
                        {
                            type: 'Lightning',
                            value: '-20',
                        },
                    ],
                    weaknesses: [
                        {
                            type: 'Water',
                            value: '+10',
                        },
                    ],
                },
                {
                    id: 'ex14-85',
                    name: 'Windstorm',
                    imageUrl: 'https://images.pokemontcg.io/ex14/85.png',
                    imageUrlHiRes:
                        'https://images.pokemontcg.io/ex14/85_hires.png',
                    supertype: 'Trainer',
                    subtype: 'Item',
                    hp: 'None',
                    number: '85',
                    artist: 'Ryo Ueda',
                    rarity: 'Uncommon',
                    series: 'EX',
                    set: 'Crystal Guardians',
                    setCode: 'ex14',
                    text: [
                        "Choose up to 2 in any combination of Pokémon Tool cards and Stadium cards in play (both yours and your opponent's) and discard them.",
                    ],
                },
                {
                    id: 'ex8-100',
                    name: 'Hariyama ex',
                    nationalPokedexNumber: 297,
                    imageUrl: 'https://images.pokemontcg.io/ex8/100.png',
                    imageUrlHiRes:
                        'https://images.pokemontcg.io/ex8/100_hires.png',
                    types: ['Fighting'],
                    supertype: 'Pokémon',
                    subtype: 'EX',
                    evolvesFrom: 'Makuhita',
                    ability: {
                        name: 'Commanding Aura',
                        text:
                            "As long as Hariyama ex is your Active Pokémon, your opponent can't play any Stadium cards from his or her hand.",
                        type: 'Poké-Body',
                    },
                    hp: '110',
                    retreatCost: ['Colorless', 'Colorless'],
                    convertedRetreatCost: 2,
                    number: '100',
                    artist: 'Ryo Ueda',
                    rarity: 'Rare Holo EX',
                    series: 'EX',
                    set: 'Deoxys',
                    setCode: 'ex8',
                    text: [
                        'When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.',
                    ],
                    attacks: [
                        {
                            cost: ['Fighting', 'Colorless'],
                            name: 'Knock Off',
                            text:
                                "Choose 1 card from your opponent's hand without looking and discard it.",
                            damage: '40',
                            convertedEnergyCost: 2,
                        },
                        {
                            cost: ['Fighting', 'Fighting', 'Colorless'],
                            name: 'Pivot Throw',
                            text:
                                "During your opponent's next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance).",
                            damage: '80',
                            convertedEnergyCost: 3,
                        },
                    ],
                    weaknesses: [
                        {
                            type: 'Psychic',
                            value: '×2',
                        },
                    ],
                },
            ],
        };

        this.currentPage = 0;
        this.isLoading = false;
        this.createCards();
        // this.initialize();
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
