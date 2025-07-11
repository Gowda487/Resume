// Dark mode toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Typing animation
const typed = new Typed('#typed', {
  strings: ['Web Developer',  'Tech Enthusiast'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Scroll animations
AOS.init();
