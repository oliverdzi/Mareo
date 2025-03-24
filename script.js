document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const dropdown = document.querySelector(".dropdown");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    dropdown.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active");
    });
});