export async function fetchAndRenderReportCards(containerId, jsonPath) {
  const container = document.getElementById(containerId);
  try {
    const res = await fetch(jsonPath);
    if (!res.ok) throw new Error('Failed to fetch report cards');
    const data = await res.json();

    container.innerHTML = data.map(student => `
      <article class="report-card">
        <h3>${student.name}</h3>
        <p>Class: ${student.class}</p>
        <ul>
          ${student.grades.map(g => `<li>${g.subject}: ${g.score}</li>`).join('')}
        </ul>
      </article>
    `).join('');
  } catch (error) {
    container.textContent = 'Unable to load report cards at the moment.';
  }
}
