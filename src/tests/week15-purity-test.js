let counter = 1;

// is fn1 (Pure or Impure) ???
let fn1 = function() {
  console.log("ham sandwich");
};

// is fn2 (Pure or Impure) ???
let fn2 = function(a, b) {
  return b - a;
};

// is fn3 (Pure or Impure) ???
let fn3 = function(a, b) {
  console.log("hi there!");
  return a + b;
};

// is fn4 (Pure or Impure) ???
let fn4 = function(a, b) {
  // nothing, this is just a comment
};

// is fn5 (Pure or Impure) ???
let fn5 = function(a, b) {
  counter = counter + 1;
  return a * b;
};

// is fn6 (Pure or Impure) ???
let fn6 = function(a, b) {
  counter = counter + 1;
  return a * b;
};

// is fn7 (Pure or Impure) ???
let fn7 = function(a, b) {
  return a + a + b + b;
};

// is fn8 (Pure or Impure) ???
let fn8 = function(a, b) {
  counter = counter + 1;
  return a + b + counter;
};

// what does fn4 return ???
// what does fn1 return ???

let result1 = fn8(2, 2); // what is `result1` ???
let result2 = fn8(2, 2); // what is `result2` ???
let result3 = fn8(2, 2); // what is `result3` ???

// what is the value of `counter` now ???
