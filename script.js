// Typed.js
const typed = new Typed("#typed", {
  strings: ["Web Developer", "Problem Solver", "Tech Enthusiast"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});

// AOS
AOS.init();

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


emailjs.init("MJEoLTV0GtTkbfuLf"); // from EmailJS dashboard

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_cbzfppd', 'template_wdps48s', this)
    .then(function() {
      alert("Message sent successfully!");
    }, function(error) {
      alert("Failed to send message: " + error.text);
    });
});
