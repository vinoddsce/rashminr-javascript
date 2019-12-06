// var arr_name = [e1, e2 ...];

// var fruits = ["Apple", "Orange", "Plum"];
// var arr2 = new Array();

// console.log("A-1", arr1);
// console.log("A-2", arr2);

// console.log("Fruits: ", fruits.length);

// =================================================

// var arr = [100, 12.344, true, function () { console.log("It's function !!!") }, { name: "Vinod" }, "JavaScript", fruits];
// // console.log("Array: ", arr);

// console.log(fruits);
// arr[arr.length - 1][0] = "Graphs";

// console.log(arr[arr.length - 1][0]);

// fruits[10000] = "KAKSNAK";
// console.log(fruits);
// console.log(fruits[100]);

// =================================================

// var fruits = ["Apple", "Orange", "Plum", "Graphs", "Mango"];
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.push("WaterMelon"));
// console.log(fruits);
// fruits[fruits.length] = "Lemon";
// console.log(fruits);
// // fruits[1000] = "Papaya";
// console.log(fruits);
// // console.log(fruits[999]);

// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.unshift('Papaya'));
// console.log(fruits);

// for (var i = 0; i < fruits.length; i++) {
//     // console.log("index: ", i, " - Value: ", fruits[i]);
//     console.log(`Index: ${i} - Value: ${fruits[i]}`);
// }

// var text = "Java" +
//     " Script";
// var name = 'JavaScript'
// var text = `Topic Name Is ${name}`;
// console.log("Text: ", text);    


// =================================================

// var numbers = [55, -1, 93, 23, 7, 61, 0, 2, 45, -8];
// console.log(numbers.length);
// var temp = [];
// for (var i = 0; i < numbers.length; i++) {
//     var square = numbers[i] * numbers[i];
//     temp.push(square);
// }
// console.log(numbers);
// console.log(temp);

// var callback = function (value, index) {
//     console.log(`Index: ${index} - Value: ${value}`);
//     return value * value;
// }

// var result = numbers.map(callback);
// console.log(result);

// =================================================

var numbers = [55, -1, 93, 23, 7, 61, 0, 2, 45, -8];

var temp = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        temp.push(numbers[i]);
    }
}
console.log(numbers);
console.log(temp);

var callback = function (value, index) {
    // console.log(`Index: ${index} - Value: ${value}`);
    // console.log("value >= 0: ", (value >= 0));
    if (value >= 0) {
        console.log("Returning: ", value);
        return value;
    }
}

var result = numbers.filter(callback);
console.log(result);