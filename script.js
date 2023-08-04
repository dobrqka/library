let myLibrary = [];
// array with all the book objects

function Book(name) {
  // book constructor
  this.name = name;
  // read: () => {
  // const readToggle = document.querySelector('div>input[type="checkbox"]')
  // if (readToggle.hasAttribute(checked)) {
  // read = true;
  //}
  // else {read = false;}
  //  }
}

function addBookToLibrary(name) {
  // submit button will use this function to create a new  object with the given input
  // and add it to the array
  let newBook = new Book(name);
  myLibrary.push(newBook);
}

const submitButton = document.querySelector("#submit-button");

const cardArea = document.querySelector("#card-area");
// function that displays books once they are added
const displayBooks = () => {
  while (cardArea.firstChild) {
    cardArea.removeChild(cardArea.firstChild);
  }
  for (i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.textContent = myLibrary[i].name;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.dataset.index = i;
    bookCard.appendChild(deleteButton);
    const readButton = document.createElement("input");
    readButton.setAttribute("type", "checkbox");
    bookCard.appendChild(readButton);
    cardArea.appendChild(bookCard);
  }
  const xButtons = document.querySelectorAll("div>button");
  xButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      myLibrary.splice(e.target.dataset.index, 1);
      displayBooks();
    })
  );
};

// submit button calls addBookToLibrary and passes arguments to addBookToLibrary
// based on the current text in the form inputs

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let text = document.querySelector("#book-name").value;
  addBookToLibrary(text);
  document.querySelector("form").reset();
  document.querySelector("form").style.display = "none";
  displayBooks();
  console.log(myLibrary);
});

const addButton = document.querySelector("#new-book");
// makes input form appear so you can add a new book
addButton.addEventListener("click", () => {
  const theForm = document.querySelector("form");
  if (theForm.style.display === "none") {
    theForm.style.display = "block";
  } else {
    theForm.style.display = "none";
  }
});
