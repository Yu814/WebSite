"use strict";

// Add event on element

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);
  
const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

// Header active
const header = document.querySelector("[data-header]");
const backToBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 100) {
    header.classList.add("active");
    backToBtn.classList.add("active")
  } else {
    header.classList.remove("active");
    backToBtn.classList.remove("active")
  }
});


// scroll reveal effect 

const sections = document.querySelectorAll("[data-section]");

const reveal = function () {
  for(let i = 0; i < sections.length; i++) {

    if(sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }

  }
}

reveal()
addEventOnElem(window, "scroll", reveal)