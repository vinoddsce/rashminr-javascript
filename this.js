

var s = new String("JavaScript");
console.dir(s);

var obj1 = new Object();
console.log("Object-1: ", obj1);

var obj2 = {};
console.log("Object-2: ", obj2);

var Person = function () {
    // this.toString = function () {
    //     console.log("This Is Overridden toString()");
    //     return;
    // }
}

function Human(firstName, lastName) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.fullName = function () {
            return this.firstName + " " + this.lastName;
        }
}

Human.prototype.toString = function () {
    console.log("This Is Overridden toString()");
    return;
}

var person1 = new Human("Virat", "Kohli");


console.log(person1.__proto__);
// console.log(Human.prototype);

var person2 = new Human("Vinod", "Kumar");
console.log(person2);





