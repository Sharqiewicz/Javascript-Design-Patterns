// Factory Pattern is a creational design pattern that uses factory methods to create objects

function ElectricPokemon(name = "Pikachu") {
    this.name = name;
    this.type = "Electric";
}
function GrassPokemon(name = "Bulbasaur") {
    this.name = name;
    this.type = "Grass";
}
function WaterPokemon(name = "Squirtle") {
    this.name = name;
    this.type = "Water";
}

function PokemonFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new ElectricPokemon(name);
                break;
            case 2:
                return new GrassPokemon(name);
                break;
            case 3:
                return new WaterPokemon(name);
                break;
        }
    }
}

function getInfo() {
    console.log("This is a " + this.name + " type of " + this.type)
}

const pokemonFactory = new PokemonFactory();
const pokemons = [];

pokemons.push(pokemonFactory.create("Raichu", 1));
pokemons.push(pokemonFactory.create("Electabuzz", 1));
pokemons.push(pokemonFactory.create("Chikorita", 2));
pokemons.push(pokemonFactory.create("Horsea", 3));

pokemons.forEach(pok => getInfo.call(pok));