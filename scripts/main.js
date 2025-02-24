
/*Mobile navbar*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show__menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show__icon')
    })
}

showMenu('nav__toggle','nav__menu')

//navbar fade in/out
const navbar = document.querySelector('header');
const navText = document.querySelector('.nav__link')

// const scrollBtn = document.querySelector('.scroll-up')

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;

    if (scrollTop > 60) {
        navbar.classList.add('solid');
        navText.classList.add('solid__text');
        // scrollBtn.style.display = "block";
    } else {
        navbar.classList.remove('solid');
        navText.classList.remove('solid__text');
        // scrollBtn.style.display = "none";
    }
});

// high contrast
const toggleButton = document.getElementById("toggle-high-contrast");
const text = document.querySelector(".h2--contrast");
const background = document.querySelectorAll(".buttons--contrast");

toggleButton.addEventListener("click", function() {
    text.classList.toggle("color--contrast");

    for (let i = 0; i < background.length; i++) {
        background[i].classList.toggle("background--contrast");
    }
});

AOS.init({
    duration: 1200,
})
