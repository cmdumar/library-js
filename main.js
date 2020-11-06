let myLibrary = [{name: 'The Hobbit', author: 'J.R.R Rowling', pages: 225},
                  {name: 'Harry Potter', author: 'JK Rowling', pages: 300}];

const body = document.querySelector('body');
const container = document.createElement('div');
body.appendChild(container);

const form = document.createElement("form");
form.setAttribute('method',"post");
form.setAttribute('action',"/");

const title = document.createElement("input");
title.setAttribute('type',"text");
title.setAttribute('name',"title");

const author = document.createElement("input");
author.setAttribute('type',"text");
author.setAttribute('name',"author");

const pages = document.createElement("input");
pages.setAttribute('type',"number");
pages.setAttribute('name',"pages");


const read = document.createElement("input");
read.setAttribute('type',"text");
read.setAttribute('name',"read");

const submit = document.createElement("input");
submit.setAttribute('type',"submit");
submit.setAttribute('value',"Submit");

form.style.cssText = 'display: none;';
form.appendChild(title);
form.appendChild(author);
form.appendChild(pages);
form.appendChild(read);
form.appendChild(submit);



function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function toggleForm() {

}

function displayBooks(arr) {
  for (let i = 0; i < arr.length; i++) {
    const title = document.createElement('h2');
    title.textContent = arr[i].name;

    const author = document.createElement('h3');
    author.textContent = arr[i].author;

    const pages = document.createElement('p');
    pages.textContent = arr[i].pages;

    const card = document.createElement('div');
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);

    container.appendChild(card);
  }

  const newBookBtn = document.createElement('button');
  newBookBtn.textContent = 'New Book';
  container.appendChild(newBookBtn);



  newBookBtn.addEventListener('click', toggleForm);
}

displayBooks(myLibrary);
