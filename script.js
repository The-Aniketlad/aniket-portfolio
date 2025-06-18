let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};


navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    };
});


//resume buttons.


  const resumeBtns = document.querySelectorAll('.resume-btn');
  const resumeDetails = document.querySelectorAll('.resume-detail');

  resumeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Remove 'active' class from all buttons and details
      resumeBtns.forEach(b => b.classList.remove('active'));
      resumeDetails.forEach(detail => detail.classList.remove('active'));

      // Add 'active' class to the clicked button and matching detail
      btn.classList.add('active');
      resumeDetails[index].classList.add('active');
    });
  });


const arrowRight = document.querySelector('.certification-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.certification-box .navigation .arrow-left');


let index = 0;

const activeCertification = () => {
    const imgSlide = document.querySelector('.certifications-carousel .img-slide');
    const certificationDetails = document.querySelectorAll('.certification-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    certificationDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    certificationDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    index = (index + 1) % 2; // go to next image, loop after last
    activeCertification();
});

arrowLeft.addEventListener('click', () => {
    index = (index - 1 + 2) % 2; // go to previous image, loop to end
    activeCertification();
});


const carousel = document.querySelector('.certifications-carousel');

carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
carousel.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        index = (index + 1) % 2;
        activeCertification();
    }, 4000);
});
