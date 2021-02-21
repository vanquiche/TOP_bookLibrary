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
const updateTitle = document.getElementById('updateTitle');
const updateAuthor = document.getElementById('updateAuthor');
const updateGenre = document.getElementById('updateGenre');
const updateBtn = document.getElementById('updateBtn');

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
  // console.log(library)
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
  // created DOM elements
  this.bookDiv = document.createElement('div');
  this.heading = document.createElement('h3');
  this.button = document.createElement('button');
  this.button.innerText = 'Edit';
  this.checkbox = document.createElement('input')
  this.checkbox.setAttribute('type', 'checkbox');
  this.genreText = document.createElement('p');
  this.authorText = document.createElement('p');
  this.haveReadText = document.createElement('p');
  this.editText = document.createElement('input');
  this.editText.setAttribute('type', 'text');
  this.updateButton = document.createElement('button');
  this.updateButton.innerText = 'update now';
  this.updateForm = document.createElement('div')

  // DOM classes
  this.bookDiv.classList = 'bookCard';
  this.heading.classList = 'cardText';
  this.button.classList = 'cardBtn';
  this.authorText.classList = 'authorText';
  this.genreText.classList = 'genreText';
  this.checkbox.classList = 'cardCheckbox';
  this.haveReadText.classList = 'cardReadText';
  this.updateForm.classList = 'updateFormWrapper';
  // display output
  this.heading.innerText = book.title;
  this.authorText.innerText = book.author;
  this.genreText.innerText = book.genre;
  // read? unread? conditions
  if (book.read === 'true') {
    // bookDiv.style.backgroundColor = 'lightblue'
    this.checkbox.checked = true;
    this.haveReadText.innerText = 'completed';
  }
  // appending dom elements
  bookContainer.appendChild(bookDiv);
  bookContainer.appendChild(updateForm);
  this.bookDiv.appendChild(heading);
  this.bookDiv.appendChild(authorText);
  this.bookDiv.appendChild(genreText);
  this.bookDiv.appendChild(button);
  // this.bookDiv.appendChild(checkbox);
  // this.bookDiv.appendChild(haveReadText);

  // updateForm.appendChild(editText);
  // updateForm.appendChild(updateButton);

  // event listeners
  // edit button
  this.button.addEventListener('click', () => {
    // updateForm.classList.add('visible2');
    console.log(book)
    // editBook(book.title, book.author, book,genre)
  });

  this.updateButton.addEventListener('click', () => {
    // book.title = editText.value;
    updateForm.classList.remove('visible2');
    console.table(library);

  });

}

// function editBook(title, author, genre) {
//   title = updateTitle.value;
//   author = updateAuthor.value;
//   genre = updateGenre.value;
// }
let editTitle = '';
let editAutor = '';
let editGenre = '';

// updateBtn.addEventListener('click', () => {
//   book.title = updateTitle.value;
//   book.author = updateAuthor.value;
//   book.genre = updateGenre.value;
//   console.log(library)
//   clearUpdateForm();
//   updateForm.classList.remove('visible2');
// })

function clearUpdateForm() {
  updateTitle.value = '';
  updateAuthor.value = '';
  updateGenre.value = '';
}


// alters book cards
// const bookCard = document.querySelectorAll('.bookCard');
// bookCard.forEach(element => {
//   element.style.backgroundColor = 'lightgreen'});


