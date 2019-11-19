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

// var getYearOfBirth = () => {
//     // this.yearOfBirth;
//     console.log(this);
// }
// getYearOfBirth();

var vinod = {
    firstName: 'Vinod',
    lastName: 'Kumar',
    yearOfBirth: 1990,
    isMarried: false,
    job: 'Teacher',
    calculateAge: function () {
        var getAge = (currentYear) => currentYear - this.yearOfBirth;
        console.log("Age of ", this.firstName, " is ", getAge(2019));
    }
}

var kumar = {
    firstName: 'Vinod1',
    lastName: 'Kumar1',
    yearOfBirth: 1999,
    isMarried: false,
    job: 'Student',
}

kumar.calculateAge = vinod.calculateAge;

// console.log(vinod);
// console.log(kumar.calculateAge());
// kumar.calculateAge()

var obj = {};
console.log(obj);

var Person = function (fName, lName, yearOfBirth, isMarried, job) {
    this.firstName = fName;
    this.lastName = lName;
    this.yearOfBirth = yearOfBirth;
    this.isMarried = isMarried;
    this.job = job;
    this.displayFirstName = function () {
        console.log("First Name: ", this.firstName);
    };
    // this.calculateAge = function () {
    //     var getAge = (currentYear) => currentYear - this.yearOfBirth;
    //     console.log("Age of ", this.firstName, " is ", getAge(2019));
    // }
}

Person.prototype.calculateAge = function () {
    var getAge = (currentYear) => currentYear - this.yearOfBirth;
    console.log("Age of ", this.firstName, " is ", getAge(2019));
}


var p1 = new Person('Vinod', 'Kumar', 1990, false, 'Teacher');
var p2 = new Person('Vinod-2', 'Kumar-2', 1999, false, 'Teacher');

console.log(p1);
console.log(p2);


p1.calculateAge(2019);