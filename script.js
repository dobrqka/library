let myLibrary = [];
// array with all the book objects

function Book(name, author, year, pages) {
  // book constructor
  this.name = name;
  this.author = author;
  this.year = year;
  this.pages = pages;
  // read: () => {
  // const readToggle = document.querySelector('div>input[type="checkbox"]')
  // if (readToggle.hasAttribute(checked)) {
  // read = true;
  //}
  // else {read = false;}
  //  }
}

function addBookToLibrary(name, author, year, pages) {
  // submit button will use this function to create a new  object with the given input
  // and add it to the array
  let newBook = new Book(name, author, year, pages);
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
    bookCard.textContent =
      "Title: " +
      myLibrary[i].name +
      "\n" +
      "Author: " +
      myLibrary[i].author +
      "\n" +
      "Year: " +
      myLibrary[i].year +
      "\n" +
      "Pages: " +
      myLibrary[i].pages +
      "\n" +
      "Read: ";
    const readButton = document.createElement("input");
    readButton.setAttribute("type", "checkbox");
    bookCard.appendChild(readButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.dataset.index = i;
    bookCard.appendChild(deleteButton);
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
  let name = document.querySelector("#book-name").value;
  let author = document.querySelector("#author").value;
  let year = document.querySelector("#year").value;
  let pages = document.querySelector("#pages").value;
  addBookToLibrary(name, author, year, pages);
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
