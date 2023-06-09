const openBtn = document.querySelector('.button-open');
const clouseBtn = document.querySelector('.button-clouse');
const openFirstElement = document.querySelector('.agency');
const openSecondElement = document.querySelector('.portfolio');
const openThirdElement = document.querySelector('.contact');

openBtn.addEventListener('click', openMenu);
clouseBtn.addEventListener('click', clouseMenu);

function openMenu() {
  openBtn.classList.add('is-hidden');
  clouseBtn.classList.remove('is-hidden');
  openFirstElement.classList.add('open-agency');
  openFirstElement.classList.remove('clouse-agency');
  openSecondElement.classList.add('open-portfolio');
  openSecondElement.classList.remove('clouse-portfolio');
  openThirdElement.classList.add('open-contact');
  openThirdElement.classList.remove('clouse-contact');
}

function clouseMenu() {
  openBtn.classList.remove('is-hidden');
  clouseBtn.classList.add('is-hidden');
  openFirstElement.classList.remove('open-agency');
  openFirstElement.classList.add('clouse-agency');
  openSecondElement.classList.remove('open-portfolio');
  openSecondElement.classList.add('clouse-portfolio');
  openThirdElement.classList.remove('open-contact');
  openThirdElement.classList.add('clouse-contact');
}
