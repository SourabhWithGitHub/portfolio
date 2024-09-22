let menuIcon= document.querySelector('#menu-icon');
let navabar= document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navabar.classList.toggle('active');
};

/*// ////////////  | navbar active section|  ////////////// //*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*||||||||||||||||||||||||||||||||||||nav bar|||||||||||||||||||||||||||||||||||*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
/*romove togle and nav ican when click navbar link*/
    menuIcon.classList.remove('bx-x');
    navabar.classList.remove('active');
};

// ////////scroal reveal//////
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading',{ origin: 'top'});
ScrollReveal().reveal('.home-image, .education-container, .project-box, .contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'});


const typed1 = new Typed('.multiple-text',{
    strings: ['Fontend Developer', 'Designeing'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});
const typed2 = new Typed('.type-text',{
    strings: ['SOURABH MONDAL'],
    typeSpeed:80,
    backSpeed:90,
    backDelay:1150,
    loop: true
});