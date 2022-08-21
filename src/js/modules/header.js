const headerEl = document.querySelector('.header');

const callback = function (entries, observer) {
  if (entries[0].isIntersecting) {
    headerEl.classList.remove('scroll');
  } else {
    headerEl.classList.add('scroll');
  }
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerEl);