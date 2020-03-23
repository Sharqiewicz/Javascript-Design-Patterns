// CLEAN CODE RULES
// Thanks to: JAVASCRIPT MASTERY


// 1. Magic numbers

// ❌ //
for (let i = 0; i < 86400; i++) {
    //..
}

// ✅ //
const SECONDS_IN_A_DAY = 86400;

for (let i = 0; i < SECONDS_IN_A_DAY; i++) {
    //..
}


// 2. Deep nesting

const exampleArray = [[['value']]];

// ❌ //
exampleArray.forEach((array1) => {
    array1.forEach((array2) => {
        array2.forEach(el => console.log(el));
    })
})

// ✅ //
const retrieveFinalValue = element => {
    if (Array.isArray(element)) {
        return retrieveFinalValue(element[0]);
    }
    return element;
}

retrieveFinalValue(exampleArray);


// Avoid large functions


// ❌ //
const round = function () {
    function battle() {
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
    }
    function checkStatsAfterBattle() {
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
    }
    return 1;
}


// ✅ //

const battle = function () {
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
}

const checkStatsAfterBattle = function () {
    //
    //
    //
    //
    //
    //
    //
    //
}

const round = function () {
    battle();
    checkStatsAfterBattle();
    return 1;
}


// naming variables

// functions usually create, get, update or delete something

getUsers();      // get ✅
returnUsers();   // return ❌
retrieveUsers(); // retrieve ❌

// Make Booleans as they read if statements

let car = {};
car.isSedan; car.hasAirbag; car.isRed;

// Use nouns for classNames

class Car {
    //...
}

// Capitalize constant values

const SECOND_IN_AN_HOUR = 3600; // ✅

const TODAY = new Date() // ❌

// Avoid 1-letter variable name

const q = () => { }; // ❌