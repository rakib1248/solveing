//  1. What will be the output of the following code and why?
// function scopeTest() {
//     if (true) {
//       var varVariable = "I am var";
//       let letVariable = "I am let";
//       const constVariable = "I am const";
//     }
//     console.log(varVariable);
//     console.log(letVariable);
//     console.log(constVariable);
//   }

//   scopeTest();

//   ReferenceError because let/const is not defined outside the block

//   output
// I am var
// ReferenceError: letVariable is not defined
// ReferenceError: constVariable is not defined

// 2. Write a function greet that takes two parameters, name and greeting.
// greeting should have a default value of "Hello". If only the name is provided,
// the function should return the greeting followed by the name. If both are provided,
// it should return the custom greeting followed by the name.
function greet(name, greeting = "hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"

// 3. Write a function sum that takes any number of arguments and returns their sum using the rest parameter.

function sum(...number) {
  return number.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5

// 4.Given the following arrays, use the spread operator to merge them into a new array mergedArray.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// Your code here
const mergedArray = [...array1, ...array2, ...array3];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 5.Write an object person using the object literal syntax extensions.
// The object should have properties name and age, and a method greet that returns a greeting message.
const name = "John";
const age = 30;

// Your code here
const person = {
  name,
  age,
  greet() {
    return `Hi, I'm ${person.name} and I'm ${person.age} years old.`;
  },
};
console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."

// 6.Write a for...of loop to iterate over the following array and print each element to the console.
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// 7.Use template literals to create a string that includes variables name and age.
const namee = "Alice";
const agee = 25;

// Your code here
const message = `"My name is ${namee} and I am ${agee} years old."`;
console.log(message); // "My name is Alice and I am 25 years old."

// 8.You have an array of objects representing students and their grades.
// Use a for...of loop to iterate over the array and print each student's name and grade.
const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 },
];

// Your code here
for (let stu of students) {
  console.log(`${stu.name}: ${stu.grade}`);
}

// 9.You have a nested array of numbers. Use a for...of loop to iterate over each inner array and print the sum of its elements.
const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Your code here
for (let array of nestedArrays) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  console.log(sum);
}

// 10.Use template literals to create a string that includes variables a and b, as well as the result of their addition.
const a = 5;
const b = 10;

// Your code here
const result = `"The sum of ${a} and ${b} is ${a + b}."`;
console.log(result); // "The sum of 5 and 10 is 15."
