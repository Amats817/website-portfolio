document.addEventListener('DOMContentLoaded', () => {

  AOS.init({ once: true });

  new Typed('.hero-subtitle', {
    strings: ['Web Developer', 'UI Designer', 'Front End Engineer'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });
});
