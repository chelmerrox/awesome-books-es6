import Books, { addBookForm, small } from './../index.js'

const books = new Books();

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('.titleField');
  const author = document.querySelector('.authorField');

  if (title.value !== '' && author.value !== '') {
    const newBook = {
      title: title.value,
      author: author.value,
    };

    books.addBook(newBook);

    small.innerText = 'Success! Book had been added.';
    small.style.color = '#0bcf0b';
    small.style.fontSize = '19px';
  } else {
    small.innerText = 'Please add the book\'s name & author\'s name!'
    small.style.color = 'red';
    small.style.fontSize = '19px';
  }

  addBookForm.reset();
});