// 'window' is globally scoped
alert('Hello');
console.log(innerWidth);

// Global scope variable
const x = 100;

console.log(x, 'in global');

function run() {
  // Access global vars in functions
  console.log(window.innerHeight); //Uncomment and Check this in browser.
  console.log(x, 'in function');
}

run();

// Access global vars in blocks
if (true) {
  console.log(x, 'in block');
}

function add() {
  // Overwriting global x (variable shadowing)
  const x = 1;
  const y = 50;
  console.log('Add function:', x + y);
}

add();

// Can not access a function scoped variable in global scope
console.log(y);