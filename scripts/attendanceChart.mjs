export function renderAttendanceChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: [
        { label: 'Present', data: data.present },
        { label: 'Absent', data: data.absent }
      ]
    },
    options: { responsive: true }
  });
}
