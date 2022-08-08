import Books, { addBookForm, bookList } from './modules/books.js'
import { realTime } from "./modules/date-and-time.js"
import { navLinks, sections } from "./modules/navlinks-and-sections.js"

const small = document.querySelector('small');

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

realTime();

// Show or Hide Sections when a navbar link is clicked
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    const idForSectionToShow = navLink.getAttribute('href');
    sections.forEach((section) => {
      const id = section.getAttribute('id');
      if (`#${id}` === idForSectionToShow) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  });
});