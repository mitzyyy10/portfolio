document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateNav() {
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        if (
          scrollPosition >= section.offsetTop - 90 &&
          scrollPosition < section.offsetTop + section.offsetHeight - 90
        ) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLinks[index].classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", updateNav);
});

AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navBar = document.querySelector(".nav-bar");

  hamburgerBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navBar.classList.toggle("active");
  });
});