let x;

//const num = new Number(5);
let num;
num = 5;
// toString() - returns a string representation of the number
x = num.toString();
console.log(x);
// To get the length
num = 5000;
x = num.toString().length;
console.log(x);
// toFixed() - returns a string representation of the number with a specified number of decimals
num = 5;
x = num.toFixed(2);  //Will add two '0' after ., Output will be '5.00'.
console.log(x);
// toPrecision() - returns a number with the specified length
x = num.toPrecision(4); // The toPrecision() method is used to format a number with a specified total number of digits (including both the integer and decimal parts). So if num is '5', passed argument is 3, output will be 5.00, if argument is 4 output will be '5.000'.
console.log(x);
// toExponential() -  convert a number to exponential notation and return its value as a string
num = 5.1234567890123456;
x = num.toExponential(4);
console.log(x);
// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('ar-EG');  //Will output 5 in Egyptian Arabic.
console.log(x);
// valueOf - Get value
x = num.valueOf();
console.log(x);
// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;
console.log(x);

x = Number.MIN_VALUE;
console.log(x);