function predictPerformance() {
  const hours = Number(document.getElementById("hours").value);
  const attendance = Number(document.getElementById("attendance").value);
  const assignments = Number(document.getElementById("assignments").value);
  const sleep = Number(document.getElementById("sleep").value);
  const internet = Number(document.getElementById("internet").value);

  let score = 0;

  // Daily study hours
  if (hours >= 6) score += 2;
  else if (hours >= 3) score += 1;

  // Attendance
  if (attendance >= 90) score += 2;
  else if (attendance >= 75) score += 1;

  // Assignments
  if (assignments >= 5) score += 2;
  else if (assignments >= 3) score += 1;

  // Sleep
  if (sleep >= 7 && sleep <= 9) score += 2;
  else if (sleep >= 5) score += 1;

  // Internet usage
  if (internet <= 2) score += 2;
  else if (internet <= 4) score += 1;

  let performance = "";

  if (score >= 9) performance = "Excellent";
  else if (score >= 6) performance = "Good";
  else if (score >= 4) performance = "Needs Improvement";
  else performance = "Poor";

  document.getElementById("result").innerText = `Predicted performance: ${performance}`;
}