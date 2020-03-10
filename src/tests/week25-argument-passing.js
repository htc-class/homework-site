let likesGoats = true;

let makeItFalse = function(val) {
  val = false;
};

makeItFalse(likesGoats);
// what is the value of `likesGoats` now? -> WRITE_ANSWER_HERE
// put your cursor here and type `100dd` in normal mode to see answer
// ANSWSER: `true`

let turtle = {
  name: "Stalin",
  shell: true,
};

let deShell = function(animal) {
  animal.shell = false;
};

deShell(stalin);
// what is the value of `turtle.shell` now? -> WRITE_ANSWER_HERE
// put your cursor here and type `100dd` in normal mode to see answer
// ANSWER: false

let myIQ = 400;

function halve(num) {
  num = num / 2;
  return num;
}

let result = halve(myIQ);
// what is the value of `myIQ` now? -> WRITE_ANSWER_HERE
// what is the value of `result`? -> WRITE_ANSWER_HERE
// put your cursor here and type `100dd` in normal mode to see answer
// ANSWER1: 400
// ANSWER2: 200

let homeworkIdea = null;

function getIdea(idea) {
  idea = "More goat banjo rodeos!";
}

getIdea(homeworkIdea);
// what is the value of `homeworkIdea` now? -> WRITE_ANSWER_HERE
// put your cursor here and type `100dd` in normal mode to see answer
// ANSWSER: null

let myKids = ["Win", "Harriet", "Dale", "Huck"];

function addBv(kids) {
  kids.push("BV the Bunny");
}

addBv(myKids);
// what is the value of `myKids.length` now? -> WRITE_ANSWER_HERE
// put your cursor here and type `100dd` in normal mode to see answer
// ANSWER: 5 - array.push() mutates the array, which was passed by REFERENCE

let states = ["Ohio", "Michigan", "New York"];

function capitalizeLast(list) {
  let lastItem = list.pop();
  return lastItem.toUpperCase();
}

console.log(capitalizeLast(states));
// what is the value of `states.length` now? -> WRITE_ANSWER_HERE
// what was logged out? -> WRITE_ANSWER_HERE
// put your cursor here and type `100dd` in normal mode to see answer
// ANSWER1: 2
// ANSWER2: 'NEW YORK'

// Question: what are the 5 "primitive types" we already know about?
// put your cursor here and type `100dd` in normal mode to see answer
// ANSWER: string, number, boolean, null, undefined

// Question: are primitive types passed by "VALUE" or by "REFERENCE"
// put your cursor here and type `100dd` in normal mode to see answer
// ANSWER: VALUE
