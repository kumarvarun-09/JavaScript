let score = 50
let number = Number(score)

console.log(typeof score);
console.log(score);

console.log(typeof number);
console.log(number);

score = "75abdc"
number = Number(score)

console.log("\n" + typeof score);
console.log(score)

console.log(typeof number);
console.log(number);

score = null
number = Number(score)

console.log("\n" + typeof score);
console.log(score)

console.log(typeof number);
console.log(number);


score = undefined
number = Number(score)

console.log("\n" + typeof score);
console.log(score)

console.log(typeof number);
console.log(number);

score = true
number = Number(score)

console.log("\n" + typeof score);
console.log(score)

console.log(typeof number);
console.log(number);

//  "33"  =>  33
//  "33abc"  => NaN (Not a number)
//  true => 1
//  false => 0
//  null => 0
//  undefined => NaN (Not a number)

console.log("\n");

score = 0
let boolVar = Boolean(score)

console.log(boolVar);

score = 1
boolVar = Boolean(score)

console.log(boolVar);

score = ""
boolVar = Boolean(score)

console.log(boolVar)

score = "Hello World"
boolVar = Boolean(score)

console.log(boolVar);

// 0 => false
//  1 => true
//  "" => false
//  "ssdfewfer" => true

console.log("\n");

let someNumber = 101
let stringNum = String(someNumber)

console.log(stringNum);
console.log(typeof stringNum);