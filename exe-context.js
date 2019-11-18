// var a = 100;

// function first() {
//     var firstA = 200;
//     console.log("It's first() function !!!");

//     function second() {
//         var secondA = 300;
//         var firstA = 400;
//         console.log("It's second() function !!!");
//         console.log("secondA", secondA);
//         console.log("firstA", firstA);
//         console.log("a", a);
//         console.dir(second);
//     }
//     second();
// }
// // window.first();
// first();
// console.log(window);



///// Objects and 'this' keyword 


var someLocal = 200;

var vinod = {

    firstName: 'Vinod',
    lastName: 'Kumar',
    yearOfBirth: 1990,
    isMarried: false,
    job: 'Teacher',

    calculateAge: function () {

        // var someLocal = 100;

        function getAge() {
            console.log("getAge()", window.vinod.job);
        }
        getAge();

        console.log("Age of ", this.firstName, " is ", (2019 - this.yearOfBirth));
    }
}

// vinod.calculateAge();

var obj = {
    a: 200
}
obj.a = 100;
console.log(obj.a);

obj = vinod;
vinod = null;
obj.calculateAge();

window.a = 1000;
console.log(a);
// console.log([] == ![]);
// console.log([] === ![]);



