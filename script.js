/* =========================================================
   Small website behaviours.
   You normally do NOT need to edit this file.
   ========================================================= */

// 1) Add a border to the header after the page starts scrolling.
const header = document.querySelector('.site-header');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 8);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// 2) Open and close the mobile menu.
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});

// Close the mobile menu after a menu link is clicked.
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// 3) Fade sections in when they enter the screen.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});

// 4) Keep the copyright year current automatically.
document.querySelector('#year').textContent = new Date().getFullYear();
