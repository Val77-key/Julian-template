const slides = document.getElementsByClassName('slide');
const nextButton = document.querySelector('.next_button');
const previousButton = document.querySelector('.previous_button');
const heroContents = document.querySelectorAll('.hero_content');
const AUTO_SLIDE_DELAY = 6000;
let interval;
let slideIndex = 1;


showSlides(slideIndex);
startAutoSlide();

nextButton.addEventListener('click', ()=> {
    changeSlide(1);
    resetAutoSlide();
});

previousButton.addEventListener('click', ()=> {
    changeSlide(-1);
    resetAutoSlide();
});


function startAutoSlide() {
    interval = setInterval(() => {
    changeSlide(1);
    },AUTO_SLIDE_DELAY);
}


function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}


function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function showSlides(n) {
    const totalSlides = slides.length;

    if(n > totalSlides) {
        slideIndex = 1;
    }
    else if (n < 1) {
        slideIndex = totalSlides;
    }

    const currentSlide = slideIndex - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        heroContents[i].classList.remove("textUp_animation");
    }

    slides[currentSlide].classList.add('active');

    void heroContents[currentSlide].offsetWidth;

    heroContents[currentSlide].classList.add("textUp_animation");
};

const openBtn = document.querySelector('.open_btn');
const mobileNav = document.querySelector('.nav_mobile');
const closeBtn = document.querySelector('.close_btn');


function openMobileNav() {
    mobileNav.classList.add('open');
}

function closeMobileNav() {
    mobileNav.classList.remove('open');
}


openBtn.addEventListener('click', () => {
    openMobileNav();
});

closeBtn.addEventListener('click', () => {
    closeMobileNav();
});


const navLinks = document.querySelectorAll('.link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});
