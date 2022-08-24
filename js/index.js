let header = document.querySelector(".header");

window.addEventListener('scroll', function () {
  let scrollPos = window.scrollY;

  if (header && scrollPos > 10) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
});