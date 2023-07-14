let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('#navbar');

hamburger.addEventListener('click', function() {
    navbar.classList.toggle('open');
});