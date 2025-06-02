document.addEventListener('DOMContentLoaded', () => {

  AOS.init({ once: true });

  new Typed('.hero-subtitle', {
    strings: ['Web Developer', 'IT Specialist', 'UI Designer', 'Full Stack Engineer'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });
});
