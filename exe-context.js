var a = 100;

function first() {
    var firstA = 200;
    console.log("It's first() function !!!");

    function second() {
        var secondA = 300;
        var firstA = 400;
        console.log("It's second() function !!!");
        console.log("secondA", secondA);
        console.log("firstA", firstA);
        console.log("a", a);
        console.dir(second);
    }
    second();

}

first();



console.log(window);




