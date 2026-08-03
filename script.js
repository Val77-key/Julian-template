const slides = document.getElementsByClassName('slide');
const nextButton = document.querySelector('.next_button');
const previousButton = document.querySelector('.previous_button');
let slideIndex = 0;


showslides(); // function declarations are hoisted. arrow functions and function expression are not


nextButton.addEventListener('click', () => {
    slideIndex ++;
    showslides();
});

previousButton.addEventListener('click', ()=> {
    slideIndex --;
    showslides();
})


function showslides() {
    if(slideIndex >= slides.length) {
        slideIndex = 0
    }
    if(slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for(let i = 0; i < slides.length; i ++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
};
