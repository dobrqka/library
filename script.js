let myLibrary = [];

function Book(name) {
  // book constructor
  this.name = name;
}

function addBookToLibrary(name) {
  // form submit will use this function to create a new  object with the given input
  // and add it to the array
  let newBook = new Book(name);
  myLibrary.push(newBook);
}

// addBookToLibrary("The Hobbit");
// console.log(myLibrary);

// submit button calls addBookToLibrary and passes arguments to addBookToLibrary
// based on the current text in the form inputs

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let text = document.querySelector("#book-name").value;
  addBookToLibrary(text);
  document.querySelector("form").reset();
  console.log(myLibrary);
});
