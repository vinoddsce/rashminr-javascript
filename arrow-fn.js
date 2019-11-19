// Arrow Function


// Syntax
var name = () => {
    // statements
}


function sayHi() {
    // console.log("Hi");
}
// sayHi();
// console.log(sayHi());

var sayHiArr = () => {
    // console.log("Hi Arrow");
}
// sayHiArr();
// console.log(sayHiArr());



// var square = (n) => {
//     return n * n;
// }

// var square = (n) => (n * n);
var square = n => n * n;
// console.log(square(10));

var yearOfBirth = 2000;

var getYearOfBirth = () => {
    // this.yearOfBirth;
    console.log(this);
}

getYearOfBirth();

var vinod = {
    firstName: 'Vinod',
    lastName: 'Kumar',
    yearOfBirth: 1990,
    isMarried: false,
    job: 'Teacher',

    calculateAge: function () {
        var getAge = (currentYear) => currentYear - this.yearOfBirth;
        // function getAge(currentYear) {
        //     return currentYear - this.yearOfBirth;
        // }
        console.log("Age of ", this.firstName, " is ", getAge(2019));
    }
}

vinod.calculateAge();