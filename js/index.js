class Pokemon {
    constructor() {
        // API
        this.URLCards = 'https://api.pokemontcg.io/v1/cards?pageSize=4&page=';

        // UI
        this.UIMainElement = document.querySelector('section.cards');

        // Variables
        this.state = {};
        this.downloadData = {};
        this.currentPage = 1;
        this.isLoading = false;
        this.initialize();
        this.getDataFromAPI();
    }

    initialize() {}
    getDataFromAPI() {
        this.isLoading = true;

        this.downloadData = axios
            .get(`${this.URLCards}${this.currentPage}`)
            .then(({ data }) => {
                console.log(data);
            });
    }
}
