function calculateGrade() {
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const subject5 = parseInt(document.getElementById('subject5').value);
    
    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const percentage = (totalMarks / 500) * 100;
  
    let grade;
    if (percentage >= 90) {
      grade = 'A+';
    } else if (percentage >= 80) {
      grade = 'A';
    } else if (percentage >= 70) {
      grade = 'B';
    } else if (percentage >= 60) {
      grade = 'C';
    } else if (percentage >= 33) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    const result = `Total Marks: ${totalMarks}<br>Percentage: ${percentage.toFixed(2)}%<br>Grade: ${grade}`;
    document.getElementById('result').innerHTML = result;
  }