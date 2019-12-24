// import { add, PI } from './math.js';


// default imprt 
// import PI from './math.js';
import piValue, { addition } from './math.js';

document.getElementById('sum').innerHTML = addition(10, 5);
document.getElementById('pi').innerHTML = piValue;

console.log("10 + 5", addition(10, 5));
console.log("PI", piValue);