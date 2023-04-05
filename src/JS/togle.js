let elem = document.querySelector('.Problem__contain--svg');
let list = document.querySelector('.problem__list');
const ArrowUp = document.querySelector('#arrow-up');
const ArrowDown = document.querySelector('#arrow-down');

elem.addEventListener(`click`, hendeTogle);

function hendeTogle() {
  list.classList.toggle('none');
  ArrowUp.classList.toggle('none');
  ArrowDown.classList.toggle('none');

  console.log('click');
}
