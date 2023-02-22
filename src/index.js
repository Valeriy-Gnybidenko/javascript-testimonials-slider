import './template.html';
import './assets/styles/index.scss';

const btns = document.querySelectorAll('.testimonials-slider__btn');
const cards = document.querySelectorAll('.testimonials-slider__card');
const btnRight = document.querySelector('.btn-next');
const btnLeft = document.querySelector('.btn-prev');
let counter = 0;

const onClickNext = () => {
  counter++;

  if (counter > cards.length - 1) {
    counter = 0;
  }

  cards.forEach((card, idx) => {
    if (idx === counter) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
};

const onClickPrev = () => {
  counter--;

  if (counter < 0) {
    counter = cards.length - 1;
  }

  cards.forEach((card, idx) => {
    if (idx === counter) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
};

btnRight.addEventListener('click', onClickNext);
btnLeft.addEventListener('click', onClickPrev);
