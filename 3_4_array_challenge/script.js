// Challenge 1
const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
x = arr.reverse();

console.log(x);

// Challenge 2 - Solution 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr3 = arr1.concat(arr2.slice(1, 6));

console.log(arr3);

// Challenge 2 - Solution 2
const arr4 = [...arr1, ...arr2];  //Another way to concat two arrays
console.log(arr4);
arr4.splice(4, 1);
console.log(arr4);
