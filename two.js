var a = 100;
exports.twoA = a;

exports.add = function (a, b) {
    return a + b;
}

console.log(module.exports);



// (
//     function (exports, require, module, __filename, __dirname) {
//         console.log('two.js module loaded !!!!');
//         var a = 100;
//         exports.twoA = a;

//         // function add(a, b) {
//         //     return a + b;
//         // }
//         // module.exports = add;
//         // module.exports = a;

//         exports.add = function (a, b) {
//             return a + b;
//         }
//         console.log(__filename, __dirname);
//         console.log(module.exports);

//     }
// )(exports, require, module, __filename, __dirname)