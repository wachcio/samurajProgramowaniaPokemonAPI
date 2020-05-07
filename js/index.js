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
            // 20200507212445
            // https://api.pokemontcg.io/v1/cards?pageSize=4&page=10

            cards: [
                {
                    id: 'dp1-5',
                    name: 'Infernape',
                    nationalPokedexNumber: 392,
                    imageUrl: 'https://images.pokemontcg.io/dp1/5.png',
                    imageUrlHiRes:
                        'https://images.pokemontcg.io/dp1/5_hires.png',
                    types: ['Fire'],
                    supertype: 'Pokémon',
                    subtype: 'Stage 2',
                    evolvesFrom: 'Monferno',
                    hp: '100',
                    convertedRetreatCost: 0,
                    number: '5',
                    artist: 'Nakaoka',
                    rarity: 'Rare Holo',
                    series: 'Diamond & Pearl',
                    set: 'Diamond & Pearl',
                    setCode: 'dp1',
                    attacks: [
                        {
                            cost: ['Colorless'],
                            name: 'Meteor Punch',
                            text:
                                'Flip a coin until you get tails. This attack does 30 damage times the number of heads.',
                            damage: '30×',
                            convertedEnergyCost: 1,
                        },
                        {
                            cost: ['Fire', 'Fire'],
                            name: 'Flare Blitz',
                            text:
                                'Discard all Fire Energy attached to Infernape.',
                            damage: '90',
                            convertedEnergyCost: 2,
                        },
                    ],
                    weaknesses: [
                        {
                            type: 'Water',
                            value: '+30',
                        },
                    ],
                },
                {
                    id: 'xy7-98',
                    name: 'M Rayquaza-EX',
                    nationalPokedexNumber: 384,
                    imageUrl: 'https://images.pokemontcg.io/xy7/98.png',
                    imageUrlHiRes:
                        'https://images.pokemontcg.io/xy7/98_hires.png',
                    types: ['Colorless'],
                    supertype: 'Pokémon',
                    subtype: 'MEGA',
                    evolvesFrom: 'Rayquaza-EX',
                    hp: '220',
                    retreatCost: ['Colorless'],
                    convertedRetreatCost: 1,
                    number: '98',
                    artist: '5ban Graphics',
                    rarity: 'Rare Ultra',
                    series: 'XY',
                    set: 'Ancient Origins',
                    setCode: 'xy7',
                    text: [
                        'When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.',
                        'When 1 of your Pokémon becomes this Pokémon, heal all damage from it.',
                        'When 1 of your Pokémon becomes a Mega Evolution Pokémon, your turn ends.',
                    ],
                    attacks: [
                        {
                            cost: ['Colorless', 'Colorless', 'Colorless'],
                            name: 'Emerald Break',
                            text:
                                'This attack does 30 damage times the number of your Benched Pokémon.',
                            damage: '30×',
                            convertedEnergyCost: 3,
                        },
                    ],
                    resistances: [
                        {
                            type: 'Fighting',
                            value: '-20',
                        },
                    ],
                    weaknesses: [
                        {
                            type: 'Lightning',
                            value: '×2',
                        },
                    ],
                },
                {
                    id: 'ex14-91',
                    name: 'Delcatty ex',
                    nationalPokedexNumber: 301,
                    imageUrl: 'https://images.pokemontcg.io/ex14/91.png',
                    imageUrlHiRes:
                        'https://images.pokemontcg.io/ex14/91_hires.png',
                    types: ['Colorless'],
                    supertype: 'Pokémon',
                    subtype: 'EX',
                    evolvesFrom: 'Skitty',
                    ability: {
                        name: 'Constrain',
                        text:
                            "Once during your turn (before your attack), you may use this power. Each player discards cards until that player has 6 cards in his or her hand. (You discard first.) This power can't be used if Delcatty ex is affected by a Special Condition.",
                        type: 'Poké-Power',
                    },
                    hp: '90',
                    convertedRetreatCost: 0,
                    number: '91',
                    artist: 'Shizurow',
                    rarity: 'Rare Holo EX',
                    series: 'EX',
                    set: 'Crystal Guardians',
                    setCode: 'ex14',
                    text: [
                        'When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.',
                    ],
                    attacks: [
                        {
                            cost: ['Colorless'],
                            name: 'Upstream',
                            text:
                                'Search your discard pile for all Energy cards. This attack does 10 damage times the number of Energy cards you find there. Show them to your opponent, and put them on top of your deck. Shuffle your deck afterward.',
                            damage: '10×',
                            convertedEnergyCost: 1,
                        },
                        {
                            cost: ['Colorless', 'Colorless', 'Colorless'],
                            name: 'Tail Slap',
                            text: '',
                            damage: '60',
                            convertedEnergyCost: 3,
                        },
                    ],
                    weaknesses: [
                        {
                            type: 'Fighting',
                            value: '×2',
                        },
                    ],
                },
                {
                    id: 'ex14-100',
                    name: 'Celebi Star',
                    nationalPokedexNumber: 251,
                    imageUrl: 'https://images.pokemontcg.io/ex14/100.png',
                    imageUrlHiRes:
                        'https://images.pokemontcg.io/ex14/100_hires.png',
                    types: ['Grass'],
                    supertype: 'Pokémon',
                    subtype: 'Basic',
                    ability: {
                        name: 'Time Travel',
                        text:
                            "If Celebi Star would be Knocked Out by damage from an opponent's attack, you may flip a coin. If heads, Celebi Star is not Knocked Out, discard all cards attached to Celebi Star, and put Celebi Star on the bottom of your deck.",
                        type: 'Poké-Power',
                    },
                    hp: '60',
                    retreatCost: ['Colorless'],
                    convertedRetreatCost: 1,
                    number: '100',
                    artist: 'Masakazu Fukuda',
                    rarity: 'Rare Holo',
                    series: 'EX',
                    set: 'Crystal Guardians',
                    setCode: 'ex14',
                    text: [
                        "You can't have more than 1 Pokémon Star in your deck.",
                    ],
                    attacks: [
                        {
                            cost: ['Grass'],
                            name: 'Leaf Shade',
                            text:
                                "Count the amount of Energy attached to Celebi Star. Put that many damage counters on 1 of your opponent's Pokémon.",
                            damage: '',
                            convertedEnergyCost: 1,
                        },
                    ],
                    weaknesses: [
                        {
                            type: 'Fire',
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
