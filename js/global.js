const hero = document.querySelector('.hero');
const header = document.querySelector('.header');

function onScrollHandler() {
  const limit = hero.offsetHeight - header.offsetHeight * 2 - 5;

  if (window.scrollY >= limit) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}

window.addEventListener('scroll', onScrollHandler, { passive: true });
window.addEventListener('load', onScrollHandler);

const slides = document.querySelectorAll('.hero-slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 5000);
