const menuBtn = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('menu-open');
  menuBody.classList.toggle('active');
  document.documentElement.classList.toggle('lock');
})