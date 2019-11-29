// var x = 1;

// var x = 1;

// if (true) {
//     var x = 2;
//     console.log(x); // expected output: 2
// }


// var x = 1;
// function foo() {
//     var x = 100;
//     console.log(x);

//     function bar() {
//         var y = 200;
//         var x = 111;
//         console.log(y);
//         console.log("x from bar(): ", x);
//         console.log("this from bar(): ", this);
//     }

//     bar();

// }

// foo();
// console.log(window.x);


var yearOfBirth = 2000;

var vinod = {
    firstName: 'Vinod',
    lastName: 'Kumar',
    yearOfBirth: 1989,
    job: 'Teacher',
    displayFullname: function () {
        console.log(this.firstName + ' ' + this.lastName);
    },

    calculateAge: function (currentYear) {

        // function getAge(year) {
        //     return year - this.yearOfBirth;
        // }

        // var getAge = (year) => {
        //     return year - this.yearOfBirth;
        // }

        var getAge = (year) => year - this.yearOfBirth;

        console.log("Age Is: ", getAge(currentYear));
    }
}

vinod.calculateAge(2019);
