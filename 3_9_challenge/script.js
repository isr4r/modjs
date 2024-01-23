// Step 1 - Array, status is object here.

const library = [
  {
    title: "Book1", author: "Author1", status:
    {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: "Book2", author: "Author2", status:
    {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: "Book3", author: "Author3", status:
    {
      own: true,
      reading: false,
      read: false,
    },
  },
];

console.log(library[0].status.read);
console.log(library[1].status.read);
console.log(library[2].status.read);

// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library[0].status.read);
console.log(library[1].status.read);
console.log(library[2].status.read);

// Step 3 - Assign properties to variables and access them directly

const { title: firstBook, author: firstAuthor, status: { own: firstOwn, reading: firstReading, read: firstRead } } = library[0];
const { title: secondBook, author: secondAuthor, status: { own: secondOwn, reading: secondReading, read: secondRead } } = library[1];
const { title: thirdBook, author: thirdAuthor, status: { own: thirdOwn, reading: thirdReading, read: thirdRead } } = library[2];

console.log(firstBook, firstAuthor, firstOwn, firstReading, firstRead);
console.log(secondBook, secondAuthor, secondOwn, secondReading, secondRead);
console.log(thirdBook, thirdAuthor, thirdOwn, thirdReading, thirdRead);

// Step 4

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);