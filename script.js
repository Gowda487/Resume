
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

