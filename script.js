let myLibrary = [];
// array with all the book objects

function Book(name) {
  // book constructor
  this.name = name;
}

function addBookToLibrary(name) {
  // submit button will use this function to create a new  object with the given input
  // and add it to the array
  let newBook = new Book(name);
  myLibrary.push(newBook);
}

const submitButton = document.querySelector("#submit-button");

// submit button calls addBookToLibrary and passes arguments to addBookToLibrary
// based on the current text in the form inputs

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let text = document.querySelector("#book-name").value;
  addBookToLibrary(text);
  document.querySelector("form").reset();
  console.log(myLibrary);
});

// button that displays all the books in the library as cards

const displayButton = document.querySelector("#display-button");
const cardArea = document.querySelector("#card-area");

displayButton.addEventListener("click", () => {
  for (i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.textContent = myLibrary[i].name;
    // bookCard.textContent = "Test";
    document.body.appendChild(bookCard);
  }
  console.log("display button clicked");
});
