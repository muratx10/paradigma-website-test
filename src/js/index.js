import branchImg from '../assets/images/branch.png';
import info from '../assets/images/card.png';
import girl from '../assets/images/girl.png';
import logo from '../assets/images/logo.png';
import '../scss/header.scss';
import '../scss/main.scss';

document.querySelector('.logo img').src = logo;
document.querySelector('.girl-image img').src = girl;
document.querySelector('.get-card img').src = branchImg;
document.querySelector('#info-card').src = info;

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

document.querySelector('#submit').addEventListener('click', () => {
  document.querySelector('.order-modal').classList.remove('show-modal');
  document.querySelector('.order-modal').style.display = 'none';
  document.querySelector('.submit-modal').classList.toggle('show-modal');
});

document.addEventListener('click', (e) => {
  e.preventDefault();
  const submitPopup = document.querySelector('.submit-modal');
  if (e.target.closest('.show-modal')) {
    if (e.target.closest('.show-modal').classList.contains('submit-modal')) {
      submitPopup.classList.remove('show-modal');
    }
  }
});

document.querySelector('.icon-info').addEventListener('mouseover', () => {
  document.querySelector('.info-text').classList.remove('hide-info');
  document.querySelector('.info-text').classList.add('show-info');
});

document.querySelector('.icon-info').addEventListener('mouseout', () => {
  document.querySelector('.info-text').classList.remove('show-info');
  document.querySelector('.info-text').classList.add('hide-info');
});

document.addEventListener('scroll', () => {
  const bg = document.querySelector('.bg');
  bg.style.backgroundPosition = `0 ${window.pageYOffset / 8}px,88vw ${window.pageYOffset / 8}px`;
});
