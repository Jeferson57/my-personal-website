let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('#navbar');

hamburger.addEventListener('click', function() {
    navbar.classList.toggle('open');
});

hamburger.addEventListener('click', function() {
    // Toggle la clase "open" en el elemento de hamburguesa
    this.classList.toggle('open');
});