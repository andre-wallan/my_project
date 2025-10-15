export async function loadAndDisplayNews(containerId, { country, pageSize }) {
  const container = document.getElementById(containerId);
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&apiKey=YOUR_NEWS_API_KEY`);
    if (!res.ok) throw new Error('Failed to load news');
    const { articles } = await res.json();

    container.innerHTML = articles.map(a => `
      <article>
        <h3>${a.title}</h3>
        <p>${a.description || 'No description available.'}</p>
        <a href="${a.url}" target="_blank">Read more</a>
      </article>
    `).join('');
  } catch (err) {
    container.textContent = 'Unable to fetch news at this time.';
  }
}

export function displayDailyQuote(containerId) {
  const quotes = [
    "Education is the passport to the future.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Believe in yourself and all that you are."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById(containerId).textContent = quote;
}
