let header = document.querySelector(".header");

window.addEventListener('scroll', function () {
  let scrollPos = window.scrollY;

  if (header && scrollPos > 10) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 16,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var salesSwiper = new Swiper(".sales-swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const burger = document.querySelector('.menu__burger');
const menuMobile = document.querySelector('.menu__inner');
if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('menu__burger--active');
    menuMobile.classList.toggle('menu__inner--active');
  });
}