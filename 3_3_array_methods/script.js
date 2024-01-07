let x;

const arr = [28, 38, 44, 29, 109];
console.log(arr);
// push() - Push a value on to the end of the array
arr.push(100);  //Add 100 at the end.
console.log(arr);

// pop() - Take the last value off
arr.pop();  // Will remove last element.
console.log(arr);

// unshift() - Add a value to the beginning of the array
arr.unshift(99);  // Will add 99 at the beginning, opposite of push.
console.log(arr);

// shift() - Remove first value
arr.shift();  // Will remove an element from the beginning, opposite of pop.
console.log(arr);

// reverse() - Reverse an array
arr.reverse();
console.log(arr);

// includes() - Check to see if something is in the array
x = arr.includes(445);
console.log(x);

// indexOf() - Return the index of the first match
x = arr.indexOf(28);
console.log(x);

// Return array as a string
x = arr.toString();
console.log('toString', x);

x = arr.join();
console.log('join', x);

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4);
console.log(x);


// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x = arr.splice(1, 4);
console.log(x);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
const arr1 = [28, 38, 44, 29, 109];
x = arr1.splice(0, 1);
console.log(x);

// Chaining methods - Some methods can be chained depending on the return value.
console.log(arr1);
x = arr1.slice(1, 3).reverse().toString().charAt(0);
//x = arr1.slice(1, 3);  // Output 44, 29
//x = arr1.slice(1, 3).reverse().toString()  // Output 29, 44
console.log(x);