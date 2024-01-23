// Different ways of creating object.

let x;

const todo = {};  // You can create an empty object and assign keys and values later.
// const todo = new Object();  // Alternate way to create an object.

todo.id = 1;
todo.name = "Bob";

console.log(todo);

// Various objects methods
// Get array of object keys
x = Object.keys(todo);
console.log(x);

// Get length of an object
x = Object.keys(todo).length;
console.log(x);

// Get array of object values
x = Object.values(todo);
console.log(x);

// Get array of object key/value pairs
x = Object.entries(todo);
console.log(x);

// Check if object has a property
x = todo.hasOwnProperty('age');
console.log(x);

// Creating an object using constructor

const todo1 = new Object();
todo1.id = 2;
todo1.name = "Tom";

console.log(todo1);

// Object Nesting
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;
console.log(x);

// Concatenating two objects

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);  // Take property (keys and values) of obj1 and obj2 and insert in a new object.
console.log(obj4);

const obj5 = { ...obj1, obj2 };  //obj2 values will be nested within obj1, it means whole obj2 is an item in obj5, where each item of obj1 is inserted as individual member.
console.log('Obj nesting:', obj5);

// Array of objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[0].name;
console.log(x);

x = todos[1].id;
console.log(x);