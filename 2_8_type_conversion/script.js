let amount = 'hello';
console.log(amount, typeof amount); //It will show amount as string.

let amount1 = '99';
console.log(amount1, typeof amount1); //It will show amount1 as string.

// Convert string to number
amount1 = parseInt(amount1);
//Other ways for conversion
//amount1 = +amount1;
//amount1 = Number(amount1);
console.log(amount1, typeof amount1); //It will show amount1 as number.

// Convert number to string
let amount2 = 100;
console.log(amount2, typeof amount2); //It will show amount2 as number.
amount2 = amount2.toString();
console.log(amount2, typeof amount2); //It will show amount2 as string.
// Other way to convert.
// amount = String(amount);

// Convert string to decimal and Int
let amount3 = '100.01';
console.log(amount3, typeof amount3); //It will show amount2 as string.
amount3 = parseFloat(amount3);
console.log(amount3, typeof amount3); //It will show full value of amount2, 100.01 as number,.
amount3 = parseInt(amount3);
console.log(amount3, typeof amount3); //It will show rounded value of amount2, which is 100 as number,.

// Convert number to boolean
// While converting numbers, 0 will always convert to false and any other number to true
let amount4 = 100.01;
amount4 = Boolean(amount4);
console.log(amount4, typeof amount4);

let amount5 = 0;
amount5 = Boolean(amount5);
console.log(amount5, typeof amount5);

// JS has a special type called "NaN" (Not A Number)
// Ways to get NaN
let amount6 = 'hello';
amount6 = parseInt(amount6);
console.log(amount6, typeof amount6);
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);