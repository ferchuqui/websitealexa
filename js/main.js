/*==================== MENU SHOW Y HIDDEN ====================*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.classList;

    skillsContent.forEach((content) => content.classList.remove('skills__open'));
    
    if (!itemClass.contains('skills__open')) {
        itemClass.add('skills__open');
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== NAVBAR MENU TOGGLE Extra ====================*/
const navToggle = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('#navbarNav');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

/*==================== SCROLL TO SECTIONS Extra ====================*/
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Ajusta según la altura del navbar
                behavior: 'smooth'
            });
        }

        // Cierra el menú en dispositivos móviles
        navMenu.classList.remove('show');
    });
});
/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/