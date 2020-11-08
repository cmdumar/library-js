const body = document.querySelector('body');

const container = document.createElement('div');

body.appendChild(container);

const form = document.createElement('form');
form.setAttribute('method', 'post');
form.setAttribute('action', '#');

const title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('name', 'title');
title.setAttribute('placeholder', 'Book Title');

const author = document.createElement('input');
author.setAttribute('type', 'text');
author.setAttribute('name', 'author');
author.setAttribute('placeholder', 'Author\'s name');

const pages = document.createElement('input');
pages.setAttribute('type', 'number');
pages.setAttribute('name', 'pages');
pages.setAttribute('placeholder', 'Number of pages');

const submit = document.createElement('button');
submit.setAttribute('type', 'button');
submit.textContent = 'Add Book';

form.appendChild(title);
form.appendChild(author);
form.appendChild(pages);
form.appendChild(submit);
form.classList.add('display');

const myLibrary = [
  {
    title: 'The Hobiit',
    author: 'Rockefellar',
    pages: 200,
    read: 'not yet',
  },
];

function validateForm(form) {
  if (form['title'].value.length < 5 || form['author'].value.length < 4 || form['pages'].value.length < 1) {
    return false;
  } else {
    return true;
  }
}

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = 'not yet';
}

function addBookToLibrary(form) {
  let book = new Book(form.elements['title'].value, form.elements['author'].value, form.elements['pages'].value);
  displayBook(book);
}

function displayBook(book) {
  const bookCard = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.textContent = book.read;

  bookCard.append(title, author, pages, read);
  container.insertBefore(bookCard, newBtn);
}

const newBtn = document.createElement('button');
newBtn.textContent = 'New Book';

container.appendChild(newBtn);
container.appendChild(form);


newBtn.addEventListener('click', function(e) {
  form.classList.toggle('display');
});

let errorMsg = document.createElement('p');
errorMsg.textContent = 'Invalid inputs';
errorMsg.classList.add('display');
container.insertBefore(errorMsg, form);

submit.addEventListener('click', function(e) {
  if (validateForm(form.elements)) {
    addBookToLibrary(form);
    form.classList.toggle('display');
    form.reset();
    errorMsg.classList.add('display');
  } else {
    errorMsg.classList.remove('display');
  }
});
