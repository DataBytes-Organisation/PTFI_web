// JavaScript to toggle a mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
