// eslint-disable-next-line max-classes-per-file
const buttonAdd = document.getElementById('add');
let index = 0;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor(book, storage, index) {
    this.book = book;
    this.library = storage;
    this.index = index;
  }

  add() {
    if (this.library === null) {
      this.library = [];
    }
    const data = this.library;
    data.push(this.book);
    const allData = JSON.stringify(data);
    localStorage.setItem('books', allData);
  }

  remove() {
    let getData = localStorage.getItem('books');
    getData = JSON.parse(getData);
    getData.splice(this.index, 1);
    getData = JSON.stringify(getData);
    localStorage.setItem('books', getData);
  }
}

