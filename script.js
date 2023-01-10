
const title = document.getElementById('title');
const author = document.getElementById('author');
const buttonAdd = document.getElementById('add');
let booksData = [];
const check = localStorage.getItem('books');
if (check != null) {
  booksData = JSON.parse(check);
}

// Add Book Function

function AddBook() {
  const message = document.querySelector('#message');
  const titleBook = title.value;
  const authorBook = author.value;
  if (titleBook === '' || authorBook === '') {
    message.classList.remove('show');
    return;
  }
  const bookData = {};
  bookData.title = titleBook;
  bookData.author = authorBook;
  booksData.push(bookData);
  const allData = JSON.stringify(booksData);
  localStorage.setItem('books', allData);
  // eslint-disable-next-line no-restricted-globals
  location.reload();
  message.classList.add('show');
}

buttonAdd.addEventListener('click', AddBook);


// Display Book function

let getBooks = localStorage.getItem('books');
getBooks = JSON.parse(getBooks);
if (getBooks.length > 0) {
  const booksSection = document.getElementById('books');
  let book = '';
  for (let i = 0; i < getBooks.length; i += 1) {
    book += `<div id="book${i}"><p>${getBooks[i].title}</p>
    <p>${getBooks[i].author}</p>
    <button class="button" value=${i}>Remove</button><br>
  <hr>
  </div>`;
  }
  booksSection.innerHTML = ${book};
}
