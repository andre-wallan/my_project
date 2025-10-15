import { buildAttendanceChart } from './attendanceChart.mjs';

// Fetch News
async function fetchNews() {
  const container = document.getElementById('newsContainer');
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=education&apiKey=YOUR_API_KEY`);
    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();

    container.innerHTML = data.articles.slice(0, 4).map(article => `
      <div class="card">
        <img src="${article.urlToImage || 'assets/default.jpg'}" alt="${article.title}">
        <h3>${article.title}</h3>
        <p>${article.description || ''}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      </div>
    `).join('');
  } catch (err) {
    container.innerHTML = `<p class="error">Could not load news at this time. Please try again later.</p>`;
  }
}

// Fetch Motivational Quote
async function fetchQuote() {
  const quoteElement = document.getElementById('quote');
  try {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    quoteElement.textContent = `"${data.content}" — ${data.author}`;
  } catch {
    quoteElement.textContent = "Stay positive, work hard, and make it happen.";
  }
}

// Initialize Google Map
import { initMap } from './scripts/maps.js';
    // Make the callback globally available for Google Maps API
    window.initSchoolMap = function() {
      // Initialize map with school coordinates and info
      initMap('map', {
        lat: 0.347596,
        lng: 32.582520,
        zoom: 15,
        title: 'Vocational School',
        infoHtml: '<strong>Vocational School</strong><br>Kampala, Uganda'
      });
    };

// Run Functions
fetchNews();
fetchQuote();
buildAttendanceChart();
