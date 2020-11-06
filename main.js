const body = document.querySelector('body');

const container = document.createElement('div');

body.appendChild(container);

const form = document.createElement('form');
form.setAttribute('method', 'post');
form.setAttribute('action', 'submit.php');

const title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('name', 'title');

const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Submit');

form.appendChild(title);
form.appendChild(submit);

const myLibrary = [
  {
    title: 'The Hobiit',
    author: 'Rockefellar',
    pages: 200,
    read: 'not yet',
  },
];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }

function displayBooks(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const bookCard = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');

    title.textContent = arr[i].title;
    author.textContent = arr[i].author;
    pages.textContent = arr[i].pages;
    read.textContent = arr[i].read;

    bookCard.append(title, author, pages, read);
    container.appendChild(bookCard);
  }
}

displayBooks(myLibrary);
