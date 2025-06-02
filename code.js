
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks); // Mudei para querySelectorAll
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation = this.navList.classList.contains(this.activeClass) 
                ? `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
                : '';
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.navList.classList.contains(this.activeClass) 
            ? 'hidden' 
            : '';
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li'
);
mobileNavbar.init();

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-list').classList.remove('active');
        document.querySelector('.mobile-menu').classList.remove('active');
        document.body.style.overflow = '';
    });
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

//home----------------

ScrollReveal().reveal('.text-home', {
  delay: 1000,
  distance: '100px'
});

 //send----------------

ScrollReveal().reveal('.imagem-doapp',  {
  delay: 2000,
  duration: 600,
  distance: '100px',
  origin: 'left'
});

ScrollReveal().reveal('.box-text-message', {
  delay: 2000,
  distance: '100px',
  origin: 'right'
});

 //free ----------------

ScrollReveal().reveal('.free-container', {
  delay: 500,
  duration: 600,
  distance: '0px',
  opacity: 0
});

 //vitali----------------

ScrollReveal().reveal(".box-text-vitali",  {
  delay: 1000,
  duration: 600,
  distance: '100px',
  origin: 'left'
});

ScrollReveal().reveal('.img-vitali', {
  delay: 2000,
  distance: '100px',
  origin: 'right'
});

 //vitali----------------

ScrollReveal().reveal(".img-licensa",  {
  delay: 1000,
  duration: 600,
  distance: '100px',
  origin: 'bottom'
});

ScrollReveal().reveal('.box-text-licensa', {
  delay: 500,
  distance: '150px',
  origin:'bottom'
});