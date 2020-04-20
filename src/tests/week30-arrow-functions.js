// convert the below function to an ARROW function
const sayHi = function() {
  console.log("Hola!");
  console.log("Hi!");
};

// --- type your answer below ---vvv

// -- then put your cursor on this line and type `100dd` to see the answer

// ANSWER:
const sayHi = () => {
  console.log("Hola!");
  console.log("Hi!");
};

// convert the below function to an ARROW function
const sillyBirthday = function(name, age) {
  const doubledAge = age * 2;
  console.log(name, "is", doubledAge, "years old");
};

// --- type your answer below ---vvv

// -- then put your cursor on this line and type `100dd` to see the answer

// ANSWER:
const sillyBirthday = (name, age) => {
  const doubledAge = age * 2;
  console.log(name, "is", doubledAge, "years old");
};

// convert the below function to an ARROW function
const alertName = function(name) {
  alert(name);
};
// --- type your answer below ---vvv

// -- then put your cursor on this line and type `100dd` to see the answer

// ANSWER:
const alertName = name => {
  alert(name);
};
// OR....even shorter:
const alertName = name => alert(name);

// convert the below function to the SHORTEST POSSIBLE ARROW function
const add = function(x, y) {
  return x + y;
};

// --- type your answer below ---vvv

// -- then put your cursor on this line and type `100dd` to see the answer

// ANSWER:
const add = (x, y) => x + y;

// convert the below function to the SHORTEST POSSIBLE ARROW function
const double = function(x) {
  return x * 2;
};

// --- type your answer below ---vvv

// -- then put your cursor on this line and type `100dd` to see the answer

// ANSWER:
const double = x => x * 2;

// **Extra Credit: ✨**
// redo this code block, eliminating all of the named helper functions
// and replacing them with inline, anonymous, arrow functions
function isOdd(num) {
  return num % 2 === 1;
}

function triple(num) {
  return num * 3;
}

function subtract5(num) {
  return num - 5;
}

function toString(num) {
  return "Number is: " + String(num);
}

[1, 2, 3, 4, 5]
  .filter(isOdd)
  .map(triple)
  .map(subtract5)
  .map(toString);

// --- type your answer below ---vvv

// -- then put your cursor on this line and type `100dd` to see the answer

// ANSWER:
[1, 2, 3, 4, 5]
  .filter(num => num % 2 === 1)
  .map(num => num * 3)
  .map(num => num - 5)
  .map(num => "Number is: " + String(num));
