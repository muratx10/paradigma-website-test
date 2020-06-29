import '../scss/main.scss';
import logo from '../assets/images/logo.png';

document.querySelector('.logo img').src = logo;

document.querySelector('.burger').addEventListener('click', (e) => {
  const nav = document.querySelector('.navigation ul');
  e.currentTarget.classList.toggle('burger-menu__active');
  nav.classList.toggle('hidden');
});

function toggle() {
  const nav = document.querySelector('.navigation ul');
  document.querySelector('.burger').classList.toggle('burger-menu__active');
  nav.classList.toggle('hidden');
}

document.querySelectorAll('.navigation__link').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    toggle(e);
  });
});

document.querySelector('.order__link').addEventListener('click', () => {
  const popup = document.querySelector('.order-modal');
  popup.classList.toggle('show-modal');
  document.querySelector('.close-icon').addEventListener('click', () => {
    popup.classList.remove('show-modal');
    popup.style.display = 'none';
  });
});

document.querySelector('#submit').addEventListener('click', (e) => {
  document.querySelector('.order-modal').classList.remove('show-modal');
  document.querySelector('.order-modal').style.display = 'none';
});
