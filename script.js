let bookshelf = document.getElementById('bookshelf');
let myLibrary = [];
let colors = ['#03CEA4', '#345995', '#FB4D3D', '#CA1551']
let submit = document.getElementById('submit');
let form = document.getElementById('book-form')
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
    myLibrary.splice(myLibrary.findIndex(book => book.title === id), 1);
    thisBook.remove();
}


function render(book){
   
        var bookContainer = document.createElement('div');
        var title = document.createElement("h2");
        var author = document.createElement("p");
        var pages = document.createElement("p");
        var status = document.createElement("p");
        var removeButton = document.createElement("i");
        var readTick = document.createElement("i");
        status.setAttribute("class", "status");
        readTick.addEventListener('click', function(e){
          if(e.target.style.color === 'white'){
            myLibrary.find(x => x.title === book.title).status = "I've not read this!"
            status.innerHTML = "I've not read this!"
            e.target.style.color = 'grey'
          } else {
            myLibrary.find(x => x.title === book.title).status = "I've read this!"
            e.target.style.color = 'white';
            status.innerHTML = "I've read this!"
          }
        })

        bookContainer.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        bookContainer.setAttribute("id", book.title);
        bookContainer.classList.add('book')
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = `${book.pages} pages`;
        status.innerHTML = book.status;
        readTick.classList.add("fas", "fa-check", "read-tick")
        readTick.style.color = book.status === "I've read this!" ? "white" : "grey";
        removeButton.classList.add("fas", "fa-trash-alt", "remove-button")
        removeButton.addEventListener('click',function(e){
            let bookId = e.target.parentNode.id;
            removeBookLibrary(bookId);
        })
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(status);
        bookContainer.appendChild(removeButton);
        bookContainer.appendChild(readTick);
        bookshelf.appendChild(bookContainer); 
        
} 
 
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, "I've read this!");
addBookToLibrary('Mindfulness in Plain English', 'Henepola Gunaratana', 439, "I've read this!");
addBookToLibrary('James Bond', 'Ian Fleming', 225, "I've not read this!");
addBookToLibrary('The Curious Incident of the Dog in the Night-Time', 'Mark Haddon', 274, "I've read this!");
addBookToLibrary('1989', 'George Orwell', 215, "I've read this!");
addBookToLibrary('In Search of Lost Time', 'Marcel Proust', 237, "I've read this!");

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
  form.reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    form.reset();
  }
}

submit.addEventListener('click', function(){
  let title = document.getElementById('title-input').value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  let author = document.getElementById('author-input').value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});;
  let pages = document.getElementById('pages-input').value;
  let status = document.getElementById('status').checked ? "Ive read this!" : "Ive not read this!";
  if(myLibrary.find(x => x.title === title)) return alert('Library already contains this book');
  if(!title) return alert('Cannot submit book to library Without title');
  addBookToLibrary(title, author, pages, status);
  form.reset();
  modal.style.display = "none";
})

