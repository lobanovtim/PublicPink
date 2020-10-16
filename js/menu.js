var navMainList = document.querySelector(".main-nav__list");
var navButton = document.querySelector(".main-nav__button");
var pageHeader = document.querySelector(".page-header__wrapper");
var navButtonOpen = document.querySelector(".main-nav__button--open");
var navButtonClose = document.querySelector(".main-nav__button--close");
var intro = document.querySelector(".intro");

navMainList.classList.add("main-nav__js");
pageHeader.classList.add("page-header__js");
navButtonClose.classList.add("main-nav__button-hidden");
navButtonOpen.classList.add("main-nav__button-visible");

if (typeof(intro) != "undefined" && intro != null) {
  intro.classList.add("intro__js");
}

navButtonOpen.addEventListener("click", function () {
  if (navButtonOpen.classList.contains("main-nav__button-visible")) {
    navButtonOpen.classList.remove("main-nav__button-visible");
    navButtonClose.classList.add("main-nav__button-visible");
    navButtonClose.classList.remove("main-nav__button-hidden");
    navMainList.classList.remove("main-nav__js");
    pageHeader.classList.remove("page-header__js");

    if (typeof(intro) != "undefined" && intro != null) {
      intro.classList.remove("intro__js");
    }

  } else {
    navButtonClose.classList.remove("main-nav__button-visible");
    navButtonOpen.classList.add("main-nav__button-visible");
    navMainList.classList.add("main-nav__js");
    pageHeader.classList.add("page-header__js");
  }
});

navButtonClose.addEventListener("click", function () {
  if (navButtonClose.classList.contains("main-nav__button-visible")) {
    navButtonClose.classList.remove("main-nav__button-visible");
    navButtonOpen.classList.add("main-nav__button-visible");
    navButtonClose.classList.add("main-nav__button-hidden");
    navMainList.classList.add("main-nav__js");
    pageHeader.classList.add("page-header__js");

    if (typeof(intro) != "undefined" && intro != null) {
      intro.classList.add("intro__js");
    }
  }
});
