function PokeAPI() {
    this.getInfo = function (pokemon) {
        pokemon = pokemon.toLowerCase();
        console.log("Request sent!");
        switch (pokemon) {
            case 'pikachu':
                return 'Pikachu -> Raichu';
            case 'squirtle':
                return 'Squirtle -> Wartotle -> Blastoise';
            case 'blastoise':
                return 'Squirtle -> Wartotle -> Blastoise';
            case 'horsea':
                return 'Horsea -> Seadra'
            default:
                return 'No such a pokemon in the database!';
                break;
        }
    }
}

// store in cache value that have already come from the api
function PokeAPIProxy() {
    this.api = new PokeAPI();
    this.cache = {};
    this.getInfo = function (pokemon) {

        if (typeof (pokemon) == 'string') {
            pokemon = pokemon.toLowerCase()

            if (this.cache[pokemon] === undefined) {
                this.cache[pokemon] = this.api.getInfo(pokemon);
            }
            return this.cache[pokemon]
        }
        else return 'Valid value';
    }
}

const proxy = new PokeAPIProxy();

console.log(proxy.getInfo("Pikachu"));
console.log(proxy.getInfo(1))
console.log(proxy.getInfo("PIKACHU"));
console.log(proxy.getInfo("PiKaCHu"));
console.log(proxy.getInfo("PiKAchU"));
console.log(proxy.getInfo("PikACHU"));
console.log(proxy.getInfo("HorsEA"));

