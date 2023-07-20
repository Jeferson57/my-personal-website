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

// Agregar un enlace al botón para descargar el CV
document.querySelector(".download-cv-btn").addEventListener("click", function() {
  // Reemplaza "ruta-a-tu-cv.pdf" con la ruta correcta de tu CV
  window.open("./CV.pdf", "_blank");
});
