//Question 1-Declare variables and check datatypes
let firstName = 'Abigail';
let lastName = 'Ibukunoluwa';
let country = 'Nigeria';
let city = 'Lagos'; 
let age = 25;
let isMarried = false;
let year = 1999;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number


//Question 2-Check if type of "10" is equal to 10
console.log(typeof "10"); // string
console.log(typeof 10); // number
console.log(typeof "10" === typeof 10); // false

//Question 3-Check if parseInt("9.8") is equal to 10
console.log(parseInt("9.8")); // 9
console.log(parseInt("9.8") === 10); // false

//Question 4-Boolean values
// Truthy values:
console.log(Boolean(10)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean(true)); // true

// falsy values:

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false

//Question 5-Figure out the expressions
i. 4 > 3&& 10 < 12
// Expected result: true

console.log(4 >3 && 10 < 12); // true

ii.  4 > 3&& 10 < 12
// Expected result: false

console.log(4 >3 && 10 < 12); // false

iii. 4 > 3 || 10 > 12
// Expected result: true

console.log(4 > 3 || 10 < 12); // true

iv. 4 > 3 || 10 > 12
// Expected result: true

console.log(4 > 3 || 10 > 12); // true

//Question 6-Calculate area of a triangle
let base = prompt("Enter base of the traiangle: ");
let height = prompt("Enter height of the traiangle: ");
let area = 0.5 * base * height;
console.log('The area of the triangle is ${area}');

//Question 7-Check if user is old enough to drive
// let birthYear = prompt("Enter birth year: 1999");
// let currentYear = 2025;
// let age = currentYear - birthYear;
// if (age >= 18) {
    // console.log(`You're ${25}. 'You are old enough to Drive.');
// } else {
    // let yearsToWait = 18 - 25;
    // console.log('You are $ {age}. You will be allowed to drive after ${yearsToWait} years. ')
// }

//Question 8-Declare challenge variable
let challenge = "30 Days Of Javascript";

//Question 9-Convert challenge to uppercase
console.log(challenge.toUpperCase()); // "30 DAYS OF JAVASCRIPT"

//Question 10-Convert challenge to lowercase
console.log(challenge.toLowerCase()); // "30 days of javascript"

//Question 11-Cut out the first word using slice()

// let challenge = "30 Days Of Javascript";
console.log(challenge.slice(4)); // "Days Of Javascript"

//Question 12-Slice out the phrase "Days Of Javascript"

// let challenge = "30 Days Of Javascript";
console.log(challenge.slice(4,20)); // "Days Of Javascript"

//Question 13-Check if the string contains"Script" using includes()

// let challenge = "30 Days Of Javascript";

console.log(challenge.includes("Script")); // true

//Question 14-Find the position of the first occurrence of "a"

// let challenge = "30 Days Of Javascript";
console.log(challenge.indexOf("a")); // 7

//Question 15-Find the position of the last occurrence of "a"

// let challenge = "30 Days Of Javascript";
console.log(challenge.lastIndexOf("a")); // 14


//Question 16-Find the position of the first occurrence of "because"

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf("because")); // 30


//Question 17-Use startsWith() method

// let challenge = "30 Days Of Javascript";
console.log(challenge.startsWith("30")); // true


//Question 18-Use endsWith() method

// let challenge = "30 Days Of Javascript";
console.log(challenge.endsWith("script")); // true


//Question 19-Generate a random number between 0 and 100

let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);


//Question 20-Compare a and b using if-else and ternary operator
If-else:

let a = 10;
let b = 20;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}


Ternary operator:

let a = 10;
let b = 20;
console.log(a > b ? "a is greater than b" : "a is less than b");


// Question 21-Assign grades to students according to their scores

let scores = [85, 90, 78, 92, 88, 76, 95, 89];

for (let i = 0; i < scores.length; i++) {
  let score = scores[i];
  let grade;

  if (score >= 80 && score <= 100) {
    grade = "A";
  } else if (score >= 70 && score < 80) {
    grade = "B";
  } else if (score >= 60 && score < 70) {
    grade = "C";
  } else if (score >= 50 && score < 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(`Score: ${score}, Grade: ${grade}`);
}


