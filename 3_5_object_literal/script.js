let x;

// Creating an object
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

// Accessing object properties
x = person.name; // Dot notation
console.log(x);

x = person['age']; // Bracket notation
console.log(x);


x = person.address.state;
console.log(x);

x = person.hobbies[0];
console.log(x);

// Updating properties
person.name = 'Jane Doe';
person['isAdmin'] = false;
console.log(person);

// Deleting properties
delete person.age;


// Create new properties
person.hasChildren = true;
console.log(person);

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

console.log(person);
person.greet();

// Keys with multiple words. You can name keys with two words and space in between, though you should avoid this.
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);