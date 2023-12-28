/* Run below code in browser console, 

you can access it by pressing F12. */

// Log on console
console.log('Hello World!');
console.log(123);
console.log(true);

// Print a variable
var greeting = 'Hello!';
console.log(greeting);

// Print an array
console.log([1, 2, 3, 4]);

// Will create a table in console
console.table({ a: 1, b: 2 });

// Print custom error and warnings
console.error('This is an error.');
console.warn('This is a warning.');

// Calculate time of code execution. Please note that time and timeEnd value should be same.
console.time('Calculate time.');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.timeEnd('Calculate time.');

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();


// console.clear(); //This will clear the console