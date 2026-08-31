// Hero slider functionality (guarded so pages without a slider won't throw)
const slides = document.querySelectorAll('.slide');
if (slides.length) {
    const AUTO_SLIDE_DELAY = 6000;
    let interval;
    let slideIndex = 1;

    function startAutoSlide() {
        interval = setInterval(() => {
            changeSlide(1);
        }, AUTO_SLIDE_DELAY);
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

        if (n > totalSlides) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = totalSlides;
        }

        const currentSlide = slideIndex - 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }

        //might need rerstart animation with js and add separate animation class
        //box.classList.remove("animate");
        //void box.offsetWidth;
        //box.classList.add("animate");

        slides[currentSlide].classList.add('active');
    }

    showSlides(slideIndex);
    startAutoSlide();


    //swipe slides logic
    let startXmain = 0;


    slides.forEach(slide => {
        slide.addEventListener("pointerdown", (event) => {
        startXmain = event.clientX;
    });
    });


    slides.forEach(slide => {
        slide.addEventListener("pointerup", (event) => {

       const distanceMain = event.clientX - startXmain;



        if (distanceMain < -50) {
            changeSlide(1);
            resetAutoSlide();

        }

        if (distanceMain > 50) {
            changeSlide(-1);
            resetAutoSlide();

        }
    });
    });




}





// Mobile navigation functionality
const openBtn = document.querySelector('.open-nav-button');
const mobileNav = document.querySelector('.nav_mobile');
const closeBtn = document.querySelector('.close-nav-btn');

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




// Mobile navigation links functionality
const mobileNavLinks = document.querySelectorAll('.nav__mobile__link');

    mobileNavLinks.forEach(link => { // Add click event listener to each link
        link.addEventListener('click', () => {
            mobileNavLinks.forEach(item => item.classList.remove('active'));// Remove 'active' class from all links
            link.classList.add('active');
            closeMobileNav(); // Close the mobile navigation menu after clicking a link
        });
    });



// Desktop navigation links functionality
const desktopNavLinks = document.querySelectorAll('.nav__desktop__link');
    desktopNavLinks.forEach(link => { // Add click event listener to each link
        link.addEventListener('click', () => {
            desktopNavLinks.forEach(item => item.classList.remove('active'));// Remove 'active' class from ALL LINKS
            link.classList.add('active');
        });
    });




// Back to top button functionality
const toTopBtn = document.getElementById("toTopBtn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            toTopBtn.classList.add("active");
        } else {
            toTopBtn.classList.remove("active");
        }
    });

    toTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });






//modal gallery

const modalWindow = document.getElementById('modal__window');
const modalCloseBtn = document.getElementById('modal__close-btn');
const imageList = document.querySelectorAll('.gallery__img-btn');
const modalSlides = document.querySelectorAll('.modal__slide');
const  modalPrevtButton  = document.querySelector('.modal__prev-btn');
const  modalNextButton = document.querySelector('.modal__next-btn');
const modalImageItem = document.querySelectorAll('.modal__list-item');
let index = 0;




//touch-hover effect on mobile

if (imageList.length) {

    imageList.forEach(image => {
        image.addEventListener('pointerdown', (event) => {
            if(event.pointerType === 'touch') {
                imageList.forEach(image => image.classList.remove('touched'));
                image.classList.add('touched');
            }
        })
    })
}





//modal slides logic
if (imageList.length) {


imageList.forEach((image, position) => {
    image.addEventListener('click', () => {
        showModalSlide(position);
    })
});


modalImageItem.forEach((image, position) => {
    image.addEventListener('click', () => {
        showModalSlide(position);
    })
});



//swipe change slide logic
let startX = 0;


modalSlides.forEach(slide => {
    slide.addEventListener("pointerdown", (event) => {
    startX = event.clientX;
});
});


modalSlides.forEach(slide => {
    slide.addEventListener("pointerup", (event) => {

   const distance = event.clientX - startX;



    if (distance < -50) {
        nextModalSlide();
    }

    if (distance > 50) {
        prevModalSlide();
    }
});
});





function nextModalSlide() {
    showModalSlide(index + 1);
}

function prevModalSlide() {
    showModalSlide(index - 1);
}

        modalNextButton.addEventListener('click', () => {
            nextModalSlide();
        });

        modalPrevtButton.addEventListener('click', () => {
            prevModalSlide();
        });



        //showSkide main function
    function showModalSlide(newIndex) {
        if(newIndex >= modalSlides.length) {
            newIndex = 0;
        }
        if(newIndex < 0) {
            newIndex = modalSlides.length - 1;
        }

        index = newIndex;

        modalWindow.classList.add("active");
        modalSlides.forEach(item => item.classList.remove('active'));
        modalSlides[index].classList.add("active");

        modalImageItem.forEach(item => item.classList.remove('active'));
        modalImageItem[index].classList.add("active");
        modalImageItem[index].focus();
    }



    modalCloseBtn.addEventListener('click', () => {
        closeModal();
    });


    function closeModal() {
    modalWindow.classList.remove("active");
    }


    //logic for closing modal on click outside
    modalSlides.forEach(slide => {
    slide.addEventListener('click', (event) => {

        if(event.target === slide) {
            closeModal();
        }

    })

});


}

//reviews section horizontal slide logic


const track = document.querySelector('.reviews__track');
let reviewsIndex = 0;


function showHorizontalSlide(){
    const offset = reviewsIndex * -100;
    track.style.transform =`translateX(${offset}%)`;
}


function nextReview() {
    reviewsIndex++;

    if (reviewsIndex >= 4) {
        reviewsIndex = 0;
    }

    showHorizontalSlide();
}


setInterval(nextReview, 5000);


