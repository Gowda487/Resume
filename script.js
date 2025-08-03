// Typed.js
const typed = new Typed("#typed", {
  strings: ["Web Developer", "Problem Solver", "Tech Enthusiast"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});

// AOS
AOS.init();



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

// ==== Mouse Parallax Effect for Blobs ====
document.addEventListener("mousemove", (e) => {
  const blobs = document.querySelectorAll(".blob");
  blobs.forEach((blob, index) => {
    const speed = 0.02 * (index + 1);
    const x = (window.innerWidth / 2 - e.clientX) * speed;
    const y = (window.innerHeight / 2 - e.clientY) * speed;
    blob.style.transform += ` translate(${x}px, ${y}px)`;
  });
});
 

