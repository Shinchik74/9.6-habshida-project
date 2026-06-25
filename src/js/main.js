const text_showBtn = document.querySelector("#article_showBtn");
const text_hideBtn = document.querySelector("#article_hideBtn");
const text = document.querySelector(".main__page-home--article---text");

text_showBtn.addEventListener("click", () => {
  text_showBtn.classList.add("article-hidden");
  text_hideBtn.classList.remove("article-hidden");
  text.classList.add("open");
});

text_hideBtn.addEventListener("click", () => {
  text_showBtn.classList.remove("article-hidden");
  text_hideBtn.classList.add("article-hidden");
  text.classList.remove("open");
});

document.querySelectorAll('[data-type="first-swiper"]').forEach((el) => {
  new Swiper(el, {
    slidesPerView: "auto",
    spaceBetween: 17,
    direction: "horizontal",
    slidesOffsetAfter: 10,
    breakpoints: {
      768: {
        enabled: false,
      },
    },
    pagination: {
      el: ".logo-swiper-pagination",
      clickable: true,
    },
  });
});

document.querySelectorAll('[data-type="second-swiper"]').forEach((el) => {
  new Swiper(el, {
    slidesPerView: "auto",
    spaceBetween: 17,
    direction: "horizontal",
    slidesOffsetAfter: 10,

    pagination: {
      el: el.querySelector(".repear-swiper-pagination"),
      clickable: true,
    },
  });
});
document.querySelectorAll('[data-type="third-swiper"]').forEach((el) => {
  new Swiper(el, {
    slidesPerView: "auto",
    spaceBetween: 17,
    direction: "horizontal",
    slidesOffsetAfter: 10,
    breakpoints: {
      768: {
        enabled: false,
      },
    },
    pagination: {
      el: el.querySelector(".price-swiper-pagination"),
      clickable: true,
    },
  });
});

const openButton = document.querySelector(
  ".header__navigation--left-button---burger",
);
const closeButton = document.querySelector(".burger");
const asideMenu = document.querySelector("aside");
const overlay = document.querySelector(".overlay");

openButton.addEventListener("click", () => {
  // console.log(1);
  asideMenu.classList.remove("aside-menu-hidden");
  asideMenu.classList.add("aside-menu");
  overlay.classList.add("overlay-active");
});

closeButton.addEventListener("click", () => {
  asideMenu.classList.remove("aside-menu");
  asideMenu.classList.add("aside-menu-hidden");
  overlay.classList.remove("overlay-active");
});
overlay.addEventListener("click", () => {
  asideMenu.classList.remove("aside-menu");
  asideMenu.classList.add("aside-menu-hidden");
  overlay.classList.remove("overlay-active");
});

const showBtn = document.querySelector("#showBtn");
const hideBtn = document.querySelector("#hideBtn");
const buttons = document.querySelectorAll(".button2");

showBtn.addEventListener("click", () => {
  buttons.forEach((m) => m.classList.remove("hidden"));
  showBtn.classList.add("hidden");
  hideBtn.classList.remove("hidden");
});

hideBtn.addEventListener("click", () => {
  buttons.forEach((m) => m.classList.add("hidden"));
  hideBtn.classList.add("hidden");
  showBtn.classList.remove("hidden");
});

const showBtn2 = document.querySelector("#showBtn2");
const hideBtn2 = document.querySelector("#hideBtn2");
const buttons3 = document.querySelectorAll(".pc-logo-button");

showBtn2.addEventListener("click", () => {
  buttons3.forEach((m) => m.classList.remove("hidden2"));
  showBtn2.classList.add("hidden2");
  hideBtn2.classList.remove("hidden2");
});

hideBtn2.addEventListener("click", () => {
  buttons3.forEach((m) => m.classList.add("hidden2"));
  hideBtn2.classList.add("hidden2");
  showBtn2.classList.remove("hidden2");
});
