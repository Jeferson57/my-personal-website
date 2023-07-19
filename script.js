let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('#navbar');


// hamburger.addEventListener('click', function() {
//     // navbar.classList.toggle('open');

//     // Toggle la clase "open" en el elemento de hamburguesa
// });

let iconMenu = document.querySelector('.icon-menu');
let iconClose = document.querySelector('.icon-close');

iconMenu.addEventListener('click', function() {
  let navbar = document.querySelector('#navbar');
  navbar.classList.add('open');
  hamburger.classList.toggle('open');
});

iconClose.addEventListener('click', function() {
  let navbar = document.querySelector('#navbar');
  navbar.classList.remove('open');
  hamburger.classList.toggle('open');
});
