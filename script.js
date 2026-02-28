document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  const pillNavItems = document.querySelectorAll(".pill-nav-item");

  if (menuIcon) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      if (navbar) navbar.classList.toggle("active");
    };
  }

  window.onscroll = () => {
    const top = window.scrollY;

    sections.forEach((sec) => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `header nav a[href="#${id}"]`,
        );
        if (activeLink) activeLink.classList.add("active");

        // Update pill navbar active state
        pillNavItems.forEach((item) => item.classList.remove("active"));
        const activePill = document.querySelector(
          `.pill-nav-item[href="#${id}"]`,
        );
        if (activePill) activePill.classList.add("active");
      }
    });

    if (navbar) navbar.classList.remove("active");
    if (menuIcon) menuIcon.classList.remove("bx-x");
  };

  navLinks.forEach((link) => {
    link.onclick = () => {
      if (navbar) navbar.classList.remove("active");
      if (menuIcon) menuIcon.classList.remove("bx-x");
    };
  });

  const hireTabs = document.querySelectorAll(".hire-tab");
  const hirePanels = document.querySelectorAll(".hire-panel");

  if (hireTabs.length && hirePanels.length) {
    hireTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        hireTabs.forEach((t) => t.classList.remove("active"));
        hirePanels.forEach((p) => p.classList.remove("active"));

        tab.classList.add("active");
        const targetPanel = document.getElementById(tab.dataset.tab);
        if (targetPanel) targetPanel.classList.add("active");
      });
    });
  }

  const carousel = document.querySelector(".certifications-carousel");
  const arrowRight = document.querySelector(
    ".certification-box .navigation .arrow-right",
  );
  const arrowLeft = document.querySelector(
    ".certification-box .navigation .arrow-left",
  );
  const imgSlide = carousel ? carousel.querySelector(".img-slide") : null;
  const certificationDetails = document.querySelectorAll(
    ".certification-detail",
  );
  let index = 0;
  let autoSlide;

  const totalSlides = certificationDetails.length;

  const updateCertification = () => {
    if (imgSlide) {
      imgSlide.style.transform = `translateX(calc(${-100 * index}% - ${index * 2}rem))`;
    }
    certificationDetails.forEach((detail) => detail.classList.remove("active"));
    if (certificationDetails[index])
      certificationDetails[index].classList.add("active");
  };

  if (arrowRight) {
    arrowRight.addEventListener("click", () => {
      index = (index + 1) % totalSlides;
      updateCertification();
    });
  }

  if (arrowLeft) {
    arrowLeft.addEventListener("click", () => {
      index = (index - 1 + totalSlides) % totalSlides;
      updateCertification();
    });
  }

  if (carousel) {
    carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
    carousel.addEventListener("mouseleave", () => {
      autoSlide = setInterval(() => {
        index = (index + 1) % totalSlides;
        updateCertification();
      }, 4000);
    });
  }

  if (totalSlides > 1) {
    autoSlide = setInterval(() => {
      index = (index + 1) % totalSlides;
      updateCertification();
    }, 4000);
  }

  if (certificationDetails.length)
    certificationDetails[0].classList.add("active");
});
