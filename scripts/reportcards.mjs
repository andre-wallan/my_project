export async function fetchAndRenderReportCards(containerId, dataUrl) {
  const container = document.getElementById(containerId);
  try {
    const response = await fetch(dataUrl);
    const data = await response.json();

    container.innerHTML = data.map(student => `
      <div class="report-card">
        <h3>${student.name}</h3>
        <p><strong>Grade:</strong> ${student.grade}</p>
        <p><strong>Average:</strong> ${student.average}%</p>
        <p><strong>Status:</strong> ${student.status}</p>
      </div>
    `).join('');
  } catch (error) {
    container.innerHTML = "<p>Failed to load report cards.</p>";
  }
}
