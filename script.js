const library = [];

class Book {
  constructor(
    title = '',
    author = '',
    read = 'false',
    genre = undefined,
  ) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.genre = genre;
  }
}

// button to add new book
const submitBtn = document.getElementById('submitFormBtn');
const addBtn = document.getElementById('addBtn');
const inputTitle = document.getElementById('bookTitle');
const inputAuthor = document.getElementById('authorName');
const inputRead = document.getElementById('haveRead');
const inputForm = document.getElementById('formContainer');
const inputGenre = document.getElementById('bookGenre')
const container = document.getElementById('bookContainer');
const bookCard = document.querySelectorAll('.bookCard');
const buttons = document.querySelectorAll('button');
const cancelBtn = document.getElementById('cancelFormBtn');

// event listeners
cancelBtn.addEventListener('click', () => {
  clearForm();
})
addBtn.addEventListener('click', () => {
  inputForm.classList.add('visible');
})

submitBtn.addEventListener('click', () => {
  let title = inputTitle.value;
  let author = inputAuthor.value;
  let read = inputRead.value;
  let genre = inputGenre.value;
  let newBook = new Book(title, author, read, genre);
  if (!title || !author) return;
  addBookToLibrary(newBook);
  createCard(newBook);
  clearForm();
  console.log(library)
})

function clearForm() {
  inputTitle.value = '';
  inputAuthor.value = '';
  inputRead.value = 'false';
  inputGenre.value = '';
  inputForm.classList.remove('visible');
}

function addBookToLibrary(book) {
  if (library.includes(book.title)) {
    return;
  } else library.push(book);
}

function createCard(book) {
  this.bookDiv = document.createElement('div');
  this.heading = document.createElement('h3');
  this.button = document.createElement('button');
  this.button.innerText = 'edit';
  this.genreText = document.createElement('p');
  this.authorText = document.createElement('p');
  // DOM classes
  this.bookDiv.classList = 'bookCard';
  this.heading.classList = 'cardText';
  this.button.classList = 'cardBtn';
  this.authorText.classList = 'authorText';
  this.genreText.classList = 'genreText';
  // display output
  this.heading.innerText = book.title;
  this.authorText.innerText = book.author;
  this.genreText.innerText = book.genre;

  if (book.read === 'true') {
    bookDiv.style.backgroundColor = 'lightblue'
  }
  // appending dom elements
  bookContainer.appendChild(bookDiv);
  this.bookDiv.appendChild(heading);
  this.bookDiv.appendChild(authorText);
  this.bookDiv.appendChild(genreText);
  this.bookDiv.appendChild(button);
  // event listeners
  this.button.addEventListener('click', () => {
    console.log('button clicked')
  })
}


// alters book cards
// const bookCard = document.querySelectorAll('.bookCard');
// bookCard.forEach(element => {
//   element.style.backgroundColor = 'lightgreen'});


