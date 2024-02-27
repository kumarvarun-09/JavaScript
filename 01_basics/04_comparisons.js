console.log(null == 0) // false
console.log(null === 0) // false
console.log(null >= 0) // true
console.log(null > 0)  // false

console.log("\n");
console.log(undefined == 0) // false
console.log(undefined === 0) // false
console.log(undefined >= 0) // false
console.log(undefined > 0) // false
console.log("\n");
// All the above types of code should be avoided 
// because it is not a good practice to write code like this
// write clean code, don't write like this


// Strict Check

console.log("2" == 2) // true
console.log('2'=== 2); // false