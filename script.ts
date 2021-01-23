
interface Pet {
    name: string,
    age: number,
    weight: number,
    height?: number,
    microChipped: boolean,
    spayedOrNeutered : boolean,
    breed: string,
    type: string
}

interface Dog extends Pet{
    sporty: boolean,
    bark: () => void
}

interface Cat extends Pet{
    purr: () => void
}

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

const petArray: Array<Dog|Cat> = []

const bingo: Dog = {
    type:'dog',
    name:'Bingo',
    age:5,
    weight:12,
    height:45, 
    microChipped:true,
    spayedOrNeutered:true,
    breed:'Siberian Husky',
    sporty:true,
    bark:()=>console.log('Bark!')
}

const bongo: Dog = {
    type:'dog',
    name:'Bongo',
    age:7,
    weight:10,
    height:40, 
    microChipped:true,
    spayedOrNeutered:true,
    breed:'Dobermann',
    sporty:false,
    bark:()=>console.log('Bark!')
}

const kitty: Cat = {
    type:'cat',
    name:'Kitty',
    age:3,
    weight:3,
    height:30, 
    microChipped:true,
    spayedOrNeutered:true,
    breed:'Siberian Cat',
    purr:()=>console.log('Purr!')
}

const katty: Cat = {
    type:'cat',
    name:'Katty',
    age:3,
    weight:3,
    height:30, 
    microChipped:true,
    spayedOrNeutered:true,
    breed:'Persian Cat',
    purr:()=>console.log('Purr!')
}

petArray.push(bingo,bongo,kitty,katty)

function adopt(animal):void {
    let sentence:string = ''
    sentence+=`We have adopted a ${animal.type}: ${animal.name}, he/she is ${animal.age} years old, vaccinated${animal.sporty ? ' and is sporty':''}.`
    console.log(sentence)
}

petArray.forEach(animal =>{
    adopt(animal)
})