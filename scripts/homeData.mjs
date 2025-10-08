export function loadAndDisplayNews(containerId, options) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="news-item"><h4>School Opens for New Term</h4><p>We welcome all our students to Term 3 of 2025!</p></div>
    <div class="news-item"><h4>ICT Lab Renovation</h4><p>The ICT lab has been upgraded with new computers and faster internet.</p></div>
  `;
}

export function displayDailyQuote(containerId) {
  const quotes = [
    "Education is the passport to the future. – Malcolm X",
    "Learning never exhausts the mind. – Leonardo da Vinci",
    "The beautiful thing about learning is nobody can take it away from you. – B.B. King"
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById(containerId).textContent = random;

 
}


