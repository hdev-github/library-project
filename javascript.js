const button = document.getElementById("btn");
const form = document.getElementById("book-submission");
button.addEventListener("click", displayForm);

function displayForm() {
    if (form.style.display === 'none') {
        form.style.display = 'block'
    } else {form.style.display = 'none'}
};
const bookLibrary = [{title: 'Book 1', author: 'Author 1', pages: 100, isRead:  false}];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    bookLibrary.push(newBook);

}
