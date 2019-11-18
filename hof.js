function adder(x) {
    return function addThree() {
        return x + 3;
    }
}

var threeAdder = adder(10);

console.dir(threeAdder);