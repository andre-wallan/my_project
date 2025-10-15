document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "red";
      return;
    }

    feedback.textContent = "Thank you! Your message has been sent.";
    feedback.style.color = "green";
    form.reset();
  });
});
