import { navLinks, sections } from "./../index.js"

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