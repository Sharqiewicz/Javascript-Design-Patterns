function PokeSkills() {
    this.observers = [];
}

PokeSkills.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    unsubscribe: function (fn) {
        this.observers = this.observers.filter(el => { if (el != fn) return el });
    },
    trigger: function (number) {
        this.observers[number].call();
    },
    triggerAll: function () {
        this.observers.forEach(el => el.call());
    }
}

const skills = [
    electrickShock = () => console.log(" Electrick shock ! "),
    dodge = () => console.log(" Attack dodged !"),
    thunder = () => console.log(" Thunderrrr !")
]

const pikachu = new PokeSkills();

skills.forEach(el => pikachu.subscribe(el));

pikachu.unsubscribe(pikachu.observers[Math.floor(Math.random() * 3)]);

pikachu.triggerAll();