import { testWebP } from "./modules/functions.js";
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
import "./modules/slideToggle.js";
import "./modules/header.js";
import "./modules/form.js";
import "./modules/select.js";
import "./modules/dynamicAdapt.js";
import "./modules/burger.js";
import mixitup from 'mixitup';
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

testWebP();


const swiper = new Swiper('.slider-page__swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  slidesPerView: 2,
  observer: true,
  observeParents: true,
  speed: 400,
  navigation: {
    nextEl: ".slider-page__button-next",
    prevEl: ".slider-page__button-prev",
  },
  pagination: {
    el: ".slider-page__pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".slider-page__scrollbar",
    dragSize: "67",
    draggable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      speed: 400,
    },
    640: {
      slidesPerView: 2,
      observer: true,
      observeParents: true,
      speed: 400,
    },
    900: {
      slidesPerView: 3,
      observer: true,
      observeParents: true,
      speed: 400,
    },
    1366: {
      slidesPerView: 2,
      observer: true,
      observeParents: true,
      speed: 400,
    }
  },
});
const catalogSwiper = new Swiper('.catalog__swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  slidesPerView: 3,
  slidesPerGroup: 3,
  watchOverflow: true,
  observer: true,
  observeParents: true,
  speed: 400,
  spaceBetween: 30,
  navigation: {
    nextEl: ".catalog__button-next",
    prevEl: ".catalog__button-prev",
  },
  pagination: {
    el: ".pagination-catalog__items",
    clickable: true,
  },
  effect: 'cards',
  cardsEffect: {
    slideShadows: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      observer: true,
      observeParents: true,
      speed: 400,
    },
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      observer: true,
      observeParents: true,
      speed: 400,
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      observer: true,
      observeParents: true,
      speed: 400,
    },
  }
});

if (document.querySelector('.catalog__wrapper')) {
  var mixer = mixitup('.catalog__wrapper', {});
}

const catalogTabs = document.querySelectorAll('.catalog__tab');
const catalogWrapper = document.querySelector('.catalog__wrapper');
const bullets = document.querySelectorAll('.swiper-pagination-bullet');

for (let i = 0; i < catalogTabs.length; i++) {
  const catalogTab = catalogTabs[i];
  catalogTab.addEventListener('click', function () {
    catalogWrapper.style.transform = 'translate3d(0px, 0px, 0px)';
    for (let i = 0; i < bullets.length; i++) {
      const bullet = bullets[i];
      bullet.classList.remove('swiper-pagination-bullet-active');
      const firstBullet = bullets[0];
      firstBullet.classList.add('swiper-pagination-bullet-active');
    }
  })
};
const headerEl = document.querySelector('.header');
const friendsPage = document.querySelector('.friends')

if (headerEl.nextElementSibling == friendsPage) {
  headerEl.classList.add('friends-header');
  let headerMenuLinks = headerEl.querySelectorAll('.header-menu__link');
  headerMenuLinks.forEach(link => {
    link.classList.remove('active');
    if (link.innerHTML == 'Друзья') {
      link.classList.add('active');
    }
  })
}