//  modern way for string concatenation 

const name = 'Varun'
const year = 2024

console.log(`Hello my name is ${name} and this year is ${year}`); // string interpolation

const gameName = new String('VarunKr')
console.log(gameName.toUpperCase());

const str = "abcdefghij"
console.log(str.substring(3, 6));
console.log(str.slice(-10,5));

let url = '      https://www.youtube.com/c/thecomiccoder      '
console.log(url.replace("www", 'ohuohuio'));
console.log(url.trim());
url = url.trim()

console.log(url.includes('www'));
console.log(url.includes("abc"));

console.log(url.split('/'));


