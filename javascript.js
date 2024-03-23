const newBook = document.querySelector("#new");
const dialogElement = document.querySelector("dialog");
const bookCards = document.querySelector(".book-card");
const submit = document.querySelector("#submit");
const bookContainer = document.querySelector("#book-container");
const form = document.querySelector("form");

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#book-pages").value;
  const isRead = document.querySelector("#status").checked;

  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  console.log(myLibrary);
  renderLibrary();
}

function renderLibrary() {
  bookContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let card = document.createElement("div");
    card.setAttribute("class", "book-card");
    card.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.isRead ? "Yes" : "No"}</p>`;
    bookContainer.appendChild(card);
  }
}
newBook.addEventListener("click", () => {
  dialogElement.showModal();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  form.reset();
  renderLibrary();
  dialogElement.close();
});
