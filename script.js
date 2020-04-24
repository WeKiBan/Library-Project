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
addBookToLibrary('Mindfulness in Plain English', 'Henepola Gunaratana', 222, 'Not Read');



function render(){
    myLibrary.forEach(book => {
        var card = document.createElement("div")
        var title = document.createElement("h2");
        var author = document.createElement("p");
        var pages = document.createElement("p");
        var status = document.createElement("p");
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = book.pages;
        status.innerHTML = book.status;
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        bookshelf.appendChild(card);
    });
} 
 render();