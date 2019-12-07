// var s1 = new String("JavaScript");
// var s2 = "JavaScript";

// console.log(s2);
// console.log(s2.slice(0, 4));
// console.log(s2.substr(0, 4));
// console.log(s2.substring(0, 4));

// splice
// slice
// split




// var obj1 = new Object();
// obj1.city = 'London';
// obj1.name = 'Unknow';

// console.log("Object-1: ", obj1);

// var obj2 = {
//     id: 1,
//     name: 'John'
// };
// console.log("Object-2: ", obj2);

// var obj3 = {
//     name: 'Mark'
// }
// console.log("Object-3: ", obj3);
// console.log("Object-3: ", obj3.name);
// obj3 = Object.assign(obj3, obj1, obj2);
// console.log("Object-3: ", obj3);
// console.log("Object-3: ", obj3.name);

// // console.log("Object.length: ", Object.length);
// // console.log("Object.prototype: ", Object.prototype);




// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
// };

// console.log("person: ", person.printIntroduction())
// console.log("person: ", person.__proto__);
// const me = Object.create(person);
// console.log("me: ", me.__proto__);

// me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction();



// var Human = function (firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }


// var Student = function (course, fees) {
//     this.course = course;
//     this.fees = fees;
// }

// Human.prototype.fullName = function () {
//     console.log(`${this.firstName}-${this.lastName}`);
// }

// var obj1 = new Human("Vinod", "Kumar");
// var std1 = new Student("Angular", 123);
// var std1 = new Student("React", 111);

// std1.__proto__ = obj1;
// std2.__proto__ = obj1;

// Student.__proto__ = Human;

// console.log("Student-1: ", std1);
// delete std1.fees;
// delete obj1.firstName;
// console.log("Student-1: ", std1);
// console.log(std1.firstName);


// class Human {
// }

// class Student extends Human {
// }

// var s1 = new Student();
// console.log("s1: ", s1);


// var obj1 = Object.create({});
// var obj2 = Object.create(null);

// var obj1 = new Object({});
// var obj2 = new Object(null);

// console.log("obj1: ", Object.prototype);
// console.log("obj2: ", Object.length);



var firstName = 'Vinod';
var lastName = 'Kumar';

function fullName() {
    console.log(this.firstName + ' ' + this.lastName);
}

// fullName();


var john = {
    firstName: 'John-2',
    lastName: 'Smith-2',
    // fullName: function () {
    //     console.log(this.firstName + ' ' + this.lastName);
    // }
}

var rshibShetty = {
    firstName: 'Rashib',
    lastName: 'Shetty',
    // fullName: function () {
    //     console.log(this.firstName + ' ' + this.lastName);
    // }
}


var johnFullName = window.fullName.bind(john);
var rashibShettyFullName = window.fullName.bind(rshibShetty);

fullName();
johnFullName();
rashibShettyFullName();


var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

// john.presentation('formal', 'morning');
// john.presentation('friendly', 'day')

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

// console.log(john.presentation.bind(emily));
// john.presentation.bind(emily)('formal', 'morning');


john.presentation.call(emily, 'formal', 'morning');
john.presentation.apply(emily, ['friendly', 'day']);


// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
}
// var rect = new Rectangle();
// console.log('rect: ', rect);
// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
var rect = new Rectangle();
console.log('rect: ', rect);

//If you don't set Object.prototype.constructor to Rectangle,
//it will take prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
// Rectangle.prototype.constructor = Rectangle;
// console.log('rect: ', rect.move(100, 100));
// var rect = new Rectangle();
// console.log('rect: ', rect);



// var rect = new Rectangle();
// console.log('rect: ', rect);
// console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
// console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
// rect.move(1, 1); // Outputs, 'Shape moved.'

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name.first + '.');
    }
};

// Person.prototype.greeting = function () {
//     alert('Hi! I\'m ' + this.name.first + '.');
// };

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
console.log("Teacher: ", teacher1);




var add = '11' + true;
var sub = '11' - false;

console.log(add);
console.log(sub);

// var sub = '11' - 'A';
// console.log(sub);