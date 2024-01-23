// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring object properties

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

// Destructuring object properties. Destructuring means getting properties out of an object, as shown in below example.
// We are setting variable values to properties in 'todo' object.

// // const { id } = todo;  
// const { id, title, user: { name }, } = todo;

//console.log(title);
//console.log(id);

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);