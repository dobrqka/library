let myLibrary = [];
// array with all the book objects

function Book(name, author, year, pages, read) {
  // book constructor
  this.name = name;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(name, author, year, pages, read) {
  // submit button will use this function to create a new  object with the given input
  // and add it to the array
  let newBook = new Book(name, author, year, pages, read);
  myLibrary.push(newBook);
}

const submitButton = document.querySelector("#submit-button");

const cardArea = document.querySelector("#card-area");

function addDiv(text, parent) {
  const newDiv = document.createElement("div");
  newDiv.textContent = text;
  parent.appendChild(newDiv);
}

const displayBooks = () => {
  while (cardArea.firstChild) {
    cardArea.removeChild(cardArea.firstChild);
  }
  for (i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    addDiv("Title: ", bookCard);
    addDiv(myLibrary[i].name, bookCard);
    addDiv("Author: ", bookCard);
    addDiv(myLibrary[i].author, bookCard);
    addDiv("Year: ", bookCard);
    addDiv(myLibrary[i].year, bookCard);
    addDiv("No. pages: ", bookCard);
    addDiv(myLibrary[i].pages, bookCard);
    addDiv("Read: ", bookCard);

    const readButton = document.createElement("input");
    readButton.setAttribute("type", "checkbox");
    readButton.dataset.index = i;
    bookCard.appendChild(readButton);
    if (myLibrary[i].read === true) {
      readButton.checked = true;
    } else if (myLibrary[i].read === false) {
      readButton.checked = false;
    }

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

  const readButtons = document.querySelectorAll("div>input[type=checkbox]");
  readButtons.forEach((button) =>
    button.addEventListener("change", (e) => {
      if (e.target.checked === false) {
        myLibrary[e.target.dataset.index].read = false;
      } else if (e.target.checked === true) {
        myLibrary[e.target.dataset.index].read = true;
      }
    })
  );
};

// submit button calls addBookToLibrary and passes arguments to addBookToLibrary
// based on the current text in the form inputs

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#book-name").value;
  // checks if book with the same title already exists in library
  for (i = 0; i < myLibrary.length; i++) {
    if (document.querySelector("#book-name").value == myLibrary[i].name) {
      alert("This book is already in your library. Please add another title.");
      return;
    } else {
      name = document.querySelector("#book-name").value;
    }
  }
  let author = document.querySelector("#author").value;
  let year = document.querySelector("#year").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  addBookToLibrary(name, author, year, pages, read);
  document.querySelector("form").reset();
  document.querySelector("form").style.display = "none";
  displayBooks();
});

const addButton = document.querySelector("#new-book");
// makes input form appear so you can add a new book
addButton.addEventListener("click", () => {
  const theForm = document.querySelector("form");
  if (theForm.style.display === "none") {
    theForm.style.display = "grid";
  } else {
    theForm.style.display = "none";
  }
});
