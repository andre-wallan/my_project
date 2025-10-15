export function buildAttendanceChart() {
  const ctx = document.getElementById("attendanceChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [{
        label: "Attendance (%)",
        data: [95, 92, 88, 93, 90],
        borderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true, max: 100 } }
    }
  });
}
