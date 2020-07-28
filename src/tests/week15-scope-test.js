let name = "jared";
let age = 40;

let fn1 = function() {
  let beard = true;
  console.log(beard); // ??? (Error or OK)
  console.log(name); // ??? (Error or OK)
  console.log(age); // ??? (Error or OK)
};

console.log(beard); // ??? (Error or OK)
console.log(name); // ??? (Error or OK)
console.log(fn1); // ??? (Error or OK)

let fn2 = function(x) {
  console.log(x); // ??? (Error or OK)
  console.log(fn1); // ??? (Error or OK)

  let fn3 = function(y) {
    console.log(x); // ??? (Error or OK)
    console.log(y); // ??? (Error or OK)
    console.log(fn2); // ??? (Error or OK)
  };

  console.log(fn3); // ??? (Error or OK)
  console.log(y); // ??? (Error or OK)
};

console.log(fn2); // ??? (Error or OK)
console.log(fn3); // ??? (Error or OK)
