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
return myLibrary.push(new Book(title, author, pages, status))
}



addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'Not Read');
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'Not Read');



let render = function(){
    myLibrary.forEach(book => {
        console.log(book.title, book.author, book.pages, book.status)
    });
}


render();