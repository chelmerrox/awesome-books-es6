export const addBookForm = document.getElementById('add-books-form');
const bookList = document.querySelector('.book-list');
const displayDate = document.querySelector('.date');
export const small = document.querySelector('small');

// Books class
export default class Books {
  constructor(bookLists = []) {
    this.bookLists = bookLists;
    this.getFromLocal();
  }

  removeBook(bookObject, index) {
    const bookInfo2 = document.getElementById(index);
    const { title, author } = bookObject;

    this.bookLists = this.bookLists.filter(
      (book) => book.title !== title && book.author !== author,
    );
    localStorage.setItem('booksCollection', JSON.stringify(this.bookLists));
    bookList.removeChild(bookInfo2);
  }

  displayBook(bookObject, index) {
    const bookInfo = document.createElement('div');
    bookInfo.classList = 'bookInfo';
    bookInfo.id = index;

    bookInfo.innerHTML = `
      <p class="book-details">"${bookObject.title}" by ${bookObject.author}</p>
    `;

    const removeBtn = document.createElement('button');
    removeBtn.classList = 'remove-btn';
    removeBtn.innerText = 'Remove';

    bookInfo.appendChild(removeBtn);
    bookList.prepend(bookInfo);

    removeBtn.onclick = () => {
      this.removeBook(bookObject, index);
    };
  }

  addBook(bookObject) {
    this.bookLists.push(bookObject);

    localStorage.setItem('booksCollection', JSON.stringify(this.bookLists));

    this.displayBook(bookObject, this.bookLists.length - 1);
  }

  // check local storage before adding a book (upon first visit to page or reload of page)
  getFromLocal() {
    if (localStorage.getItem('booksCollection')) {
      this.bookLists = JSON.parse(localStorage.getItem('booksCollection'));

      this.bookLists.forEach((book, index) => {
        this.displayBook(book, index);
      });
    } else {
      localStorage.setItem('booksCollection', '');
      this.bookLists = [];
    }
  }
}

// Display the Date & Time on the DOM
export const realTime = () => {
  const date = new Date();
  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  const currentDate = date.toLocaleDateString('en-GB', dateOptions);
  const currentTime = date.toLocaleTimeString('en-GB', timeOptions);
  displayDate.innerHTML = `${currentDate} ${currentTime}`;

  setTimeout(() => { realTime(); }, 1000);
};

// Array of all navbar links
export const navLinks = Array.from(
  document.body.querySelectorAll('header nav ul li a'),
);

// Array of all <section> elements
export const sections = Array.from(document.body.querySelectorAll('section'));