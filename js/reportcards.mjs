export function loadReportCards() {
  const container = document.getElementById('reportContainer');

  const students = [
    { name: 'Andrew Allan', subject: 'ICT', grade: 'A' },
    { name: 'Grace Namara', subject: 'Mathematics', grade: 'B+' },
    { name: 'Samuel Okello', subject: 'Science', grade: 'A-' },
    { name: 'Mercy Atwine', subject: 'Entrepreneurship', grade: 'B' },
  ];

  container.innerHTML = students.map(student => `
    <div class="card report-card">
      <h3>${student.name}</h3>
      <p><strong>Subject:</strong> ${student.subject}</p>
      <p><strong>Grade:</strong> ${student.grade}</p>
    </div>
  `).join('');
}
