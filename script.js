// JavaScript for Oak & Age Bourbon website

document.addEventListener('DOMContentLoaded', () => {
  // Set the current year in the footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact form submission handling
  const form = document.getElementById('contact-form');
  const responseEl = document.getElementById('form-response');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Basic validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        responseEl.textContent = 'Please complete all fields before submitting.';
        return;
      }
      // Display thank‑you message
      responseEl.textContent = 'Thank you for reaching out! We will get back to you soon.';
      // Clear form fields
      form.reset();
    });
  }
});