export function renderAttendanceChart(canvasId, data) {
  new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: [
        { label: 'Present', data: data.present },
        { label: 'Absent', data: data.absent }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}
