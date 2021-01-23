// Type***************************
// type Dog = {
//     name: string,
//     age: number,
//     weight: number,
//     height?: number,
//     microChipped: boolean,
//     spayedOrNeutered : boolean,
//     breed: string,
//     type: string,
//     sporty: boolean,
//     bark: () => void
// }
// type Cat = {
//     name: string,
//     age: number,
//     weight: number,
//     height?: number,
//     microChipped: boolean,
//     spayedOrNeutered : boolean,
//     breed: string,
//     type: string,
//     purr: () => void
// }
// ****************************************
var petArray = [];
var bingo = {
    type: 'dog',
    name: 'Bingo',
    age: 5,
    weight: 12,
    height: 45,
    microChipped: true,
    spayedOrNeutered: true,
    breed: 'Siberian Husky',
    sporty: true,
    bark: function () { return console.log('Bark!'); }
};
var bongo = {
    type: 'dog',
    name: 'Bongo',
    age: 7,
    weight: 10,
    height: 40,
    microChipped: true,
    spayedOrNeutered: true,
    breed: 'Dobermann',
    sporty: false,
    bark: function () { return console.log('Bark!'); }
};
var kitty = {
    type: 'cat',
    name: 'Kitty',
    age: 3,
    weight: 3,
    height: 30,
    microChipped: true,
    spayedOrNeutered: true,
    breed: 'Siberian Cat',
    purr: function () { return console.log('Purr!'); }
};
var katty = {
    type: 'cat',
    name: 'Katty',
    age: 3,
    weight: 3,
    height: 30,
    microChipped: true,
    spayedOrNeutered: true,
    breed: 'Persian Cat',
    purr: function () { return console.log('Purr!'); }
};
petArray.push(bingo, bongo, kitty, katty);
function adopt(animal) {
    var sentence = '';
    sentence += "We have adopted a " + animal.type + ": " + animal.name + ", he/she is " + animal.age + " years old, vaccinated" + (animal.sporty ? ' and is sporty' : '') + ".";
    console.log(sentence);
}
petArray.forEach(function (animal) {
    adopt(animal);
});
