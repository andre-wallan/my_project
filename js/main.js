import { buildAttendanceChart } from './attendanceChart.mjs';

// Fetch news articles
async function fetchNews() {
  const container = document.getElementById('newsContainer');
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=education&apiKey=YOUR_NEWSAPI_KEY`);
    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();
    container.innerHTML = data.articles.slice(0, 4).map(a => `
      <div class="card">
        <img src="${a.urlToImage || 'assets/default.jpg'}" alt="${a.title}">
        <h3>${a.title}</h3>
        <p>${a.description || ''}</p>
        <a href="${a.url}" target="_blank">Read more</a>
      </div>
    `).join('');
  } catch (err) {
    container.innerHTML = `<p class="error">⚠️ Could not load news. Please try again later.</p>`;
  }
}

// Fetch motivational quote
async function fetchQuote() {
  const quote = document.getElementById('quote');
  try {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    quote.textContent = `"${data.content}" — ${data.author}`;
  } catch {
    quote.textContent = "Believe in yourself, and all that you are.";
  }
}

// Initialize Google Map
window.initMap = function() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0.3476, lng: 32.5825 },
    zoom: 13,
  });
  new google.maps.Marker({
    position: { lat: 0.3476, lng: 32.5825 },
    map,
    title: "Vocational School Uganda",
  });
};

fetchNews();
fetchQuote();
buildAttendanceChart();
