function Stage1() {
    this.price = (pokemon) => pokemon.cost * 1;
}
function Stage2() {
    this.price = (pokemon) => pokemon.cost * 4.20;
}
function Stage3() {
    this.price = (pokemon) => pokemon.cost * 7.40;
}

function LevelUp() {
    this.stage = undefined;
    this.setStrategy = (stage) => {
        this.stage = stage;
    }
    this.price = pokemon => {
        return this.stage.price(pokemon);
    }

}

const stage1 = new Stage1();
const stage2 = new Stage2();
const stage3 = new Stage3();

const bulbasaur = { name: "Bulbasaur", evolution: "Ivysaur", evolution2: "Venusaur", cost: 1.25 };

const levelUp = new LevelUp();

levelUp.setStrategy(stage2);

console.log(levelUp.price(bulbasaur));