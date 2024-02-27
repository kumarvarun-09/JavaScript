// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference // Non - primitive

// Array, Objects, Functions

let email
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(typeof id)

console.log(id);
console.log(anotherId);
console.log(id == anotherId); // false
console.log(id === anotherId); // false

const bigNumber = 684108654684685454897867464654n
console.log(bigNumber);
console.log(typeof bigNumber);


const heroes = ["Ironman", "Hulk", "Thor"]  // Array
console.table(heroes);
let obj = { // object
    name: 'Varun',
    age: '22',
    city: 'Kanpur',
    country: 'India'
}
console.log(obj);


const myFunction = function () {
    console.log('Hello World');
}

console.log(typeof myFunction)