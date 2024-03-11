const newBook = document.getElementById("new");
const form = document.getElementById("book-submission");
newBook.addEventListener("click", displayForm);

function displayForm() {
    if (form.style.display === 'none') {
        form.style.display = 'block'
    } else {form.style.display = 'none'}

    if (newBook.style.display === 'block') {
        newBook.style.display = 'none'
    } else {newBook.style.display = 'block'}
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
