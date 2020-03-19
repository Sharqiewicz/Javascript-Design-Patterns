// Your own rules of iterating

const equipment = ["Squirtle", "Pokeball", "Backpack"];

function Iterator(elements = []) {
    this.elements = elements;
    this.index = 0;
}


// must have: hasNext(), Next()
Iterator.prototype = {

    hasNext: function () {
        return this.index < this.elements.length;
    },
    hasBack: function () {
        return this.index >= 0;
    },
    next: function () {
        return this.elements[this.index++];
    },
    back: function () {
        return this.elements[this.index--];
    },
    maximizeIndex: function () {
        return this.index = this.elements.length - 1;
    },
    resetIndex: function () {
        return this.index = 0;
    }

}

const iterator = new Iterator(equipment);

iterator.maximizeIndex();

while (iterator.hasBack()) {
    console.log("index " + iterator.index + " item " + iterator.back());
}