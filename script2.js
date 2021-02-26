const library = [];
let regex = /(^\w{1})|(\s+\w{1})/g;
let bookExist = false;
let sidebarOpen = true;
// variables
const container = document.getElementById('bookCardContainer');
const newBookForm = document.getElementById('newBookForm');
const newTitle = document.getElementById('newBookTitle');
const newAuthor = document.getElementById('newBookAuthor');
const newGenre = document.getElementById('newBookGenre');
const submitBtn = document.getElementById('submitFormBtn');
const pullTab = document.getElementById('pullTab');
const sidebar = document.getElementById('formContainer');
const tabHandle = document.getElementById('tabHandleText');
// class constructor
function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}

// Event Listeners
// create new book form
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (!newTitle.value || !newAuthor.value || !newGenre.value) return;
  checkLibrary(newTitle.value);
  if (bookExist === true) return;
  else if (bookExist === false) {
    let book =
      new Book(newTitle.value, newAuthor.value, newGenre.value);
    library.push(book);
    createDiv(book);
    newBookForm.reset();
  }
})
// expand and collapse sidebar
pullTab.addEventListener('click', () => {
  if (sidebarOpen === true) {
    sidebarOpen = false;
    sidebar.classList.add('close');
    tabHandle.innerText = 'open';
  }
  else if (sidebarOpen === false) {
    sidebarOpen = true;
    sidebar.classList.remove('close');
    tabHandle.innerText = 'close';
  }
})


// verify library for duplicates
function checkLibrary(book) {
  for (let i = 0; i < library.length; i++) {
    if (library[i].title.toLowerCase() == book.toLowerCase()) {
      alert('Book already in library.')
      return bookExist = true;
    } else return bookExist = false;
  }
}

// DOM Elements
function createDiv(book) {
  // dom elements
  const div = document.createElement('div');
  const deleteBtn = document.createElement('button');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const genre = document.createElement('p');
  // dom classes
  div.classList = 'bookCard';
  title.classList = 'cardTitleText';
  author.classList = 'cardAuthorText';
  genre.classList = 'cardGenreText';
  deleteBtn.classList = 'cardDeleteBtn';

  // dom ID assignments
  div.id = book.title;
  title.id = book.title;
  author.id = book.author;
  genre.id = book.genre;
  // output display
  title.innerText = book.title.replace(regex, char => char.toUpperCase());
  author.innerText = book.author.replace(regex, char => char.toUpperCase());;
  genre.innerText = book.genre.toUpperCase();
  deleteBtn.innerText = 'delete';
  // appended elements
  container.appendChild(div);
  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(genre);
  div.appendChild(deleteBtn);
  // delete book card and remove object from library
deleteBtn.addEventListener('click', () => {
  for (let i = 0; i < library.length; i++) {
    if (library[i].title == div.id) {
      let bookIndex = library.findIndex(element => element.title == div.id);
      removebook(bookIndex);
      div.remove();
    }
  }
});

function removebook(index) {
  library.splice(index, 1);
}
}

