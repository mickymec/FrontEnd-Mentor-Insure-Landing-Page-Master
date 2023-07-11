"use strict";

// HTML ELEMENT
const header = document.querySelector('[data-header]');
const navbar = document.querySelector('[data-navbar]');
const navOpanBtn = document.querySelector('[data-toggler]');


// HEADER NAVBAR 
navOpanBtn.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
    navOpanBtn.classList.toggle("active");
    document.body.classList.toggle('active');
})

window.addEventListener("scroll", ()=> {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});



// DATA REVEAL EFFECT
const revealElements = document.querySelectorAll("[data-reveal]");

// console.log(revealElements.length)

const scrollReveal = function () {
    for (let i = 0; i < revealElements.length; i++) {
        const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1;
        console.log(window.innerHeight);

        if (elementIsInScreen) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
};

window.addEventListener("scroll", scrollReveal);