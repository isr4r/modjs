// Default Params
function registerUser(user = 'Bot') {
  // Old way - before using `=`
  // if (!user) {
  //   user = 'Bot';
  // }

  return user + ' is registered';
}

console.log(registerUser());
console.log(registerUser('Tom'));

// Rest Params - It will allow you to pass unlimited parameters 
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log('Sum with rest operator:', sum(1, 2, 3, 4, 5, 6, 100, 100));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: 'Sara',
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Array as Params 
function calculateSum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array of numbers');
  }

  var sum = 0;
  numbers.forEach(function (num) {
    sum += num;
  });

  return sum;
}

// Example usage:
var numbersArray = [1, 2, 3, 4, 5];
var sum = calculateSum(numbersArray);
console.log('Sum:', sum);