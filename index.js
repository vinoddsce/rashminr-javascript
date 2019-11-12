// Syntax

// var name_of_variable = initial_value(optional);

// var n;
// n = 100;

// var num = undefined;
// console.log("num is : ", num);

// n = "Hundred";
// console.log("n is : ", n);

// var str = "JavaScript"
// var bool;
// num = 12.67;

// console.log("str is : ", str);
// console.log("bool is : ", bool);
// console.log("num is : ", num);



// function sayHi() {
//     console.log("Hi");
// }
// sayHi();

// var result = sayHi();
// console.log("result: ", result);
// console.log("result: ", sayHi());

// Function Declaration.
// function square(n = 2) {
//     return n * n;
// }
// console.log(square());


// var var_dec = expression //arith, boolean OR function

// var displayHi = function () {
//     console.log("Display Hi !!!!");
// }
// displayHi();

// console.log(square);
// console.log(displayHi);

// var duplicate = displayHi;
// console.log(duplicate);
// duplicate();

// duplicate = 100;
// duplicate();


// var qube = function (n) {
//     return n * n * n;
// }

// console.log(qube(10));


// a = undefined;
// var a;
// a;
// console.log("a: ", a);
// index.js:67 Uncaught ReferenceError: a is not defined
//     at index.js:67



console.log(square());
function square(n = 2) {
    return n * n;
}


console.log(qube(10));
var qube = function (n) {
    return n * n * n;
}
// index.js:80 Uncaught TypeError: qube is not a function
//     at index.js:80
