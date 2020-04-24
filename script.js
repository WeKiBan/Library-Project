let bookshelf = document.getElementById('bookshelf');
let myLibrary = [];
function Book(title, author, pages, status){
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.status = status;
}


Book.prototype.info = function(){return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`}

function addBookToLibrary(title, author, pages, status){
    var newBook = new Book(title, author, pages, status)
    myLibrary.push(newBook);
    render(newBook);
}

function removeBookLibrary(id){
    var thisBook = document.getElementById(id);
    myLibrary.splice(myLibrary.findIndex(x => x.title === id));
    thisBook.remove();
}


function render(book){
   
        var bookContainer = document.createElement('div');
        var title = document.createElement("h2");
        var author = document.createElement("p");
        var pages = document.createElement("p");
        var status = document.createElement("p");
        var removeButton = document.createElement('button');
        bookContainer.setAttribute("id", book.title);
        bookContainer.classList.add('book')
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = book.pages;
        status.innerHTML = book.status;
        removeButton.textContent = 'Remove Book';
        removeButton.addEventListener('click',function(e){
            let bookId = e.target.parentNode.id;
            removeBookLibrary(bookId);
        })
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(status);
        bookContainer.appendChild(removeButton);
        bookshelf.appendChild(bookContainer); 
        
} 
 
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295 pages', 'Not Read');
addBookToLibrary('Mindfulness in Plain English', 'Henepola Gunaratana', '222 pages', 'Not Read');
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295 pages', 'Not Read');
addBookToLibrary('Mindfulness in Plain English', 'Henepola Gunaratana', '222 pages', 'Not Read');
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295 pages', 'Not Read');
addBookToLibrary('Mindfulness in Plain English', 'Henepola Gunaratana', '222 pages', 'Not Read');

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("new-book-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
}