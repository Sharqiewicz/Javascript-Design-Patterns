function Pokemon(name) {
    this.name = name;
    this.hp = 100;
    this.battle = null;
}

Pokemon.prototype = {
    sendMessage: function (message, to) {
        this.battle.sendMessage(message, this, to);
    },
    receiveMessage: function (message, from) {
        console.log(`${this.name} || Message from ${from.name}: ${message}.`)
    },
    attack: function (dmg, to) {
        this.battle.handleAttack(dmg, this, to);
    },
    receiveAttack: function (dmg, from) {
        console.log(`${this.name} received ${dmg}dmg from ${from.name}`);
        this.hp = this.hp - dmg;
        console.log(`${this.name} hp: ${this.hp}`);
    }
}

function Battle() {
    this.pokemons = {};
}

Battle.prototype = {
    addPokemon: function (pokemon) {
        this.pokemons[pokemon.name] = pokemon;
        pokemon.battle = this;
    },
    sendMessage: function (message, from, to) {
        to.receiveMessage(message, from);
    },
    handleAttack: function (dmg, from, to) {
        to.receiveAttack(dmg, from);
    }
}

const pikachu = new Pokemon('Pikachu');
const blastoise = new Pokemon("Blastoise");

const area1 = new Battle();

area1.addPokemon(pikachu);
area1.addPokemon(blastoise);

blastoise.sendMessage("I will catch you!", pikachu);
pikachu.sendMessage("You have no chance, ELECTRO ATTACK!!!", blastoise);
pikachu.attack(40, blastoise);
