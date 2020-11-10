const body = document.querySelector('body');

const container = document.createElement('div');

const header = document.createElement('h2');
header.textContent = 'Books Library';

container.appendChild(header);

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

const yes = document.createElement('input');
yes.setAttribute('type', 'radio');
yes.setAttribute('name', 'read');
yes.setAttribute('value', 'yes');
const yesLabel = document.createElement('label');
yesLabel.setAttribute('for', 'read');
yesLabel.textContent = 'Yes';

const no = document.createElement('input');
no.setAttribute('type', 'radio');
no.setAttribute('name', 'read');
no.setAttribute('value', 'no');
const noLabel = document.createElement('label');
noLabel.setAttribute('for', 'read');
noLabel.textContent = 'No';

const submit = document.createElement('button');
submit.id = 'submit-btn';
submit.textContent = 'Add Book';

const readBook = document.createElement('h3');
readBook.textContent = 'Book Read:';

form.appendChild(title);
form.appendChild(author);
form.appendChild(pages);
form.appendChild(readBook);
form.appendChild(yesLabel);
form.appendChild(yes);
form.appendChild(noLabel);
form.appendChild(no);
form.appendChild(submit);
form.classList.add('display');

const myLibrary = [];

function validateForm(form) {
  if (form.title.value.length < 5 || form.author.value.length < 4 || form.pages.value.length < 1) {
    return false;
  }
  return true;
}

function newBook(title, author, pages, read) {
  const readToggle = function () {
    if (this.read === 'yes') {
      this.read = 'no';
    } else {
      this.read = 'yes';
    } 
  }
  return {
    title,
    author,
    pages,
    read,
    readToggle
  }
}

const newBtn = document.createElement('button');
newBtn.textContent = 'New Book';

function displayBook() {
  const books = document.querySelectorAll('.card');
  books.forEach((book) => {
    book.remove();
  });

  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    bookCard.id = (myLibrary.indexOf(book)).toString();
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    read.id = `read-${myLibrary.indexOf(book)}`;
    const readStatus = document.createElement('button');
    const deleteBtn = document.createElement('button');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
    readStatus.textContent = 'Change read status';
    deleteBtn.textContent = 'Delete book';

    bookCard.append(title, author, pages, read, readStatus, deleteBtn);
    container.insertBefore(bookCard, newBtn);

    readStatus.onclick = () => {
      book.readToggle();
      document.querySelector(`#${read.id}`).textContent = book.read;
      myLibrary[myLibrary.indexOf(book)].read = book.read;
    };

    deleteBtn.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      document.getElementById(`${bookCard.id}`).remove();
    });
  });
}

function addBookToLibrary(form) {
  const radio = document.querySelectorAll('input[name="read"]');
  let selected;
  radio.forEach((i) => {
    if (i.checked) {
      selected = i.value;
    }
  });

  const book = newBook(
    form.elements.title.value,
    form.elements.author.value,
    form.elements.pages.value,
    !selected ? 'no' : selected,
  );

  myLibrary.push(book);
  displayBook(book);
}

container.appendChild(newBtn);
container.appendChild(form);
displayBook();

newBtn.addEventListener('click', () => {
  form.classList.toggle('display');
});

const errorMsg = document.createElement('p');
errorMsg.textContent = 'Invalid inputs';
errorMsg.classList.add('display');
container.insertBefore(errorMsg, form);

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateForm(form.elements)) {
    addBookToLibrary(form);
    form.classList.toggle('display');
    form.reset();
    errorMsg.classList.add('display');
  } else {
    errorMsg.classList.remove('display');
  }
});
