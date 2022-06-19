const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const arrows = document.querySelectorAll('.arrow');
const dropdowns = document.querySelectorAll('.dropdown');
const navItems = document.querySelectorAll('.nav__item');

navToggle.addEventListener('click', () => {
    const attribute = nav.getAttribute('data-visible');;
    if (attribute === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        navToggle.src = './images/icon-close.svg';
    } else if (attribute === 'true') {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        navToggle.src = './images/icon-hamburger.svg'
    }
})

for (let i = 0, j = 0; i < navItems.length, j < dropdowns.length; i++, j++) {
    navItems[i].addEventListener('click', () => {
        if (dropdowns[j].classList.contains('hidden')) {
            dropdowns[j].classList.replace('hidden', 'block');
            arrows[i].classList.add('rotate');
            navItems[i].setAttribute('aria-expanded', true);
        } else {
            arrows[i].classList.remove('rotate');
            dropdowns[j].classList.replace('block', 'hidden');
            navItems[i].setAttribute('aria-expanded', false);
        }
    })
}


setArrowSrc();

function setArrowSrc() {
    if (window.innerWidth >= 800) {
        arrows.forEach(arrow => arrow.src = './images/icon-arrow-light.svg')
    } else {
        arrows.forEach(arrow => arrow.src = './images/icon-arrow-dark.svg')
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 800) {
        arrows.forEach(arrow => arrow.src = './images/icon-arrow-light.svg')
    } else {
        arrows.forEach(arrow => arrow.src = './images/icon-arrow-dark.svg')
    }
});

