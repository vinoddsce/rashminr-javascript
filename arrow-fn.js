
// use 'strict';

function first() {
    a = 100;
}
console.log(window.a);



var Person = function () {
}

var p1 = new Person();
var obj1 = {}
var obj2 = new Object();
var obj3 = Object.assign({});

console.log("p1: ", p1);
console.log("obj1: ", obj1);
console.log("obj2: ", obj2);
console.log("obj3: ", obj3);



var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};



var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

Person.prototype.lastName = 'Smith';

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);




var vinod = {

    firstName: 'Vinod',
    lastName: 'Kumar',
    yearOfBirth: 1990,
    isMarried: false,
    job: 'Teacher',

    calculateAge: function () {

        function getAge() {
            console.log("getAge()", window.vinod.job);
        }
        getAge();

        console.log("Age of ", this.firstName, " is ", (2019 - this.yearOfBirth));
    }
}

