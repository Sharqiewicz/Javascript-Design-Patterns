// If you want to limit number of instances

const Singleton = (function () {
    function PokeWorld() {
        this.name = "Original Poke World"
    }

    let pokeWorld;

    function createPokeWorld() {
        pokeWorld = new PokeWorld();
        return pokeWorld;
    }

    return {
        getPokeWorld: () => {
            pokeWorld == false ? pokeWorld = createPokeWorld() : null;
            return pokeWorld;
        }
    }
})();

const firstWorld = Singleton.getPokeWorld();
const secondWorld = Singleton.getPokeWorld();

console.log(firstWorld === secondWorld); // true - only one instance exists