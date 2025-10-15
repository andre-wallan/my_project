document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    feedback.textContent = "⚠️ All fields are required.";
    feedback.style.color = "red";
    return;
  }
  if (!email.match(emailPattern)) {
    feedback.textContent = "⚠️ Invalid email address.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "✅ Message sent successfully!";
  feedback.style.color = "green";
  e.target.reset();
});
