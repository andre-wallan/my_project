// Initialize Google Map
window.initMap = () => {
  const schoolLocation = { lat: -1.2486, lng: 29.9896 }; // Example: Kabale coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    center: schoolLocation,
    zoom: 15,
  });

  new google.maps.Marker({
    position: schoolLocation,
    map: map,
    title: "School",
  });
};

// Form validation and submission
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all required fields.";
    formMessage.style.color = "red";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  // Simulate form submission
  formMessage.textContent = "Thank you for contacting us! We’ll respond soon.";
  formMessage.style.color = "green";
  contactForm.reset();
});
