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
  this.titleText = document.createElement('input');
  this.titleText.setAttribute('type', 'text');
  this.titleText.readOnly = true;
  this.titleText.addEventListener('blur', () => {
    titleText.readOnly = true;
    book.title = titleText.value;
  })

  this.authorText = document.createElement('input');
  this.authorText.setAttribute('type', 'text');
  this.authorText.readOnly = true;
  this.authorText.addEventListener('blur', () => {
    authorText.readOnly = true;
    book.author = authorText.value;
  })

  this.genreText = document.createElement('input');
  this.genreText.setAttribute('type', 'text');
  this.genreText.readOnly = true;
  this.genreText.addEventListener('blur', () => {
    genreText.readOnly = true;
    book.genre = genreText.value;
  })


  this.descriptionText1 = document.createElement('p');
  this.descriptionText1.innerText = 'Title';

  this.descriptionText2 = document.createElement('p');
  this.descriptionText2.innerText = 'Author';

  this.descriptionText3 = document.createElement('p');
  this.descriptionText3.innerText = 'Genre';
  // DOM classes
  this.bookDiv.classList = 'bookCard';
  this.descriptionText1.classList = 'cardLabelText';
  this.descriptionText2.classList = 'cardLabelText';
  this.descriptionText3.classList = 'cardLabelText';
  this.titleText.classList = 'cardText';
  this.authorText.classList = 'cardText';
  this.genreText.classList = 'cardText';


  // output display
  this.titleText.value = book.title;
  this.authorText.value = book.author;
  this.genreText.value = book.genre;
  // append elements
  bookContainer.appendChild(bookDiv);
  this.bookDiv.appendChild(descriptionText1);
  this.bookDiv.appendChild(titleText);
  this.bookDiv.appendChild(descriptionText2);
  this.bookDiv.appendChild(authorText);
  this.bookDiv.appendChild(descriptionText3);
  this.bookDiv.appendChild(genreText);
  // this.bookDiv.appendChild(editBtn);

}

function clearUpdateForm() {
  submitBtn.reset();
}


// alters book cards
// const bookCard = document.querySelectorAll('.bookCard');
// bookCard.forEach(element => {
//   element.style.backgroundColor = 'lightgreen'});

