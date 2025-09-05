const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const dropdowns = document.querySelectorAll(".dropdown, .dropdown-launch");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Toggle dropdowns on mobile
dropdowns.forEach(dropdown => {
  dropdown.addEventListener("click", (e) => {
    if(window.innerWidth <= 768){
      e.preventDefault();
      dropdown.classList.toggle("active");
    }
  });
});
