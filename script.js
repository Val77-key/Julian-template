const slides = document.getElementsByClassName('slide');
const nextButton = document.querySelector('.next_button');
const previousButton = document.querySelector('.previous_button');
const heroContents = document.querySelectorAll('.hero_content');
const AUTO_SLIDE_DELAY = 6000;
let interval;
let slideIndex = 1;


showSlides(slideIndex); 
startAutoSlide();

nextButton.addEventListener('click', () => {
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
        slides[i].style.display = "none";
        heroContents[i].classList.remove("textUp_animation");
    }

    slides[currentSlide].style.display = "block";

    void heroContents[currentSlide].offsetWidth;

    heroContents[currentSlide].classList.add("textUp_animation");
};