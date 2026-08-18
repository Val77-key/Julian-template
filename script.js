// Hero slider functionality (guarded so pages without a slider won't throw)
const slides = document.querySelectorAll('.slide');
if (slides.length) {
    const nextButton = document.querySelector('.next_button');
    const previousButton = document.querySelector('.previous_button');
    const heroContents = document.querySelectorAll('.hero_content');
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
            if (heroContents[i]) heroContents[i].classList.remove('textUp_animation');
        }

        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (heroContents[currentSlide]) {
            void heroContents[currentSlide].offsetWidth;
            heroContents[currentSlide].classList.add('textUp_animation');
        }
    }

    showSlides(slideIndex);
    startAutoSlide();

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            changeSlide(1);
            resetAutoSlide();
        });
    }

    if (previousButton) {
        previousButton.addEventListener('click', () => {
            changeSlide(-1);
            resetAutoSlide();
        });
    }
}




// Mobile navigation functionality (guarded)
const openBtn = document.querySelector('.open_btn');
const mobileNav = document.querySelector('.nav_mobile');
const closeBtn = document.querySelector('.close_btn');

function openMobileNav() {
    if (mobileNav) mobileNav.classList.add('open');
}

function closeMobileNav() {
    if (mobileNav) mobileNav.classList.remove('open');
}

if (openBtn) {
    openBtn.addEventListener('click', () => {
        openMobileNav();
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        closeMobileNav();
    });
}




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
            desktopNavLinks.forEach(item => item.classList.remove('active'));// Remove 'active' class from all links
            link.classList.add('active');
        });
    });



// Back to top button functionality (guarded)
const toTopBtn = document.getElementById("toTopBtn");
if (toTopBtn) {
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
}
