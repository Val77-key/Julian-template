const slides = document.getElementsByClassName('slide');
const nextButton = document.querySelector('.next_button');
const previousButton = document.querySelector('.previous_button');
const heroContents = document.querySelectorAll('.hero_content');
let slideIndex = 1;


showslides(slideIndex); // function declarations are hoisted. arrow functions and function expression are not


nextButton.addEventListener('click', () => {
    plusSlide(1);
});

function plusSlide(n) {
    showslides(slideIndex += n)
}

previousButton.addEventListener('click', ()=> {
    minusSlide(-1)
});

function minusSlide(n) {
    showslides(slideIndex += n)
}


function showslides(n) {
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i ++) {
        slides[i].style.display = 'none';
        // heroContents[i].classList.remove('textUp_animation');
    }
    slides[slideIndex-1].style.display = 'block';

    // void heroContents[slideIndex].offsetWidth;


    // heroContents[slideIndex-1].classList.add('textUp_animation');
};

