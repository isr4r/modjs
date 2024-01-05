// Arithmetic Operators

let x;

x = 5 + 5;
console.log(x);

x = 5 - 5;
console.log(x);

x = 5 * 5;
console.log(x);

x = 5 / 5;
console.log(x);

x = 7 % 5;
console.log(x);

// Concatenation
x = 'Hello' + ' ' + 'World';
console.log(x);

// Exponent
x = 2 ** 3;
console.log(x);

// Increment
x = 1;
// x = x + 1;
x++;
console.log(x);

// Decrement
// x = x - 1;
x--;
console.log(x);

// 2. Assignment Operators

x = 10;
console.log(x);

x += 5;
console.log(x);

x -= 5;
console.log(x);

x *= 5;
console.log(x);

x /= 5;
console.log(x);

x %= 5;
console.log(x);

x = 2;
x **= 5; //x to the power 5
console.log(x);

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == '2'; //Will result in true
console.log(x);

// Equal to (Type and value)
x = 2 === '2';  //Will result in false
console.log(x);

// Not equal to (Just the value, not the type)
x = 2 != '2';
console.log(x);

// Not equal to (Type and value)
x = 2 !== 2;
console.log(x);

x = 2 !== '2';
console.log(x);  //Will result in true, as 2 int and 2 sa string is not same.

// Greater than and less than
x = 10 > 5;
console.log(x);

x = 10 < 5;
console.log(x);

x = 10 <= 5;
console.log(x);

x = 10 >= 5;
console.log(x);