if (1) {
    console.log("True");
} else {
    console.log("False");
}

var num = 100.123;
// var num = new Number(100);
console.log(num.toString());
console.log(num.toPrecision(1));

var s = 'JavaScript';
// var s = new String('JavaScript')
console.log(s.toUpperCase());

// console.log(Number);
// console.log(String);
// console.log(Boolean);


// var obj = {
//     name: 'test',
//     toString: function () {
//         console.log("It's Obj");
//     }
// };

var obj = new Object();

obj.city = 'Bangalore';

obj.__proto__.id = 1;

// console.log(obj.toString());
// console.log(obj.__proto__);

console.log(obj);