document.addEventListener("DOMContentLoaded", updateSummary);

let stats = {
  result1: { correct: 0, incorrect: 0 },
  result2: { correct: 0, incorrect: 0 },
};

function checkAnswer(resultId, answer) {
  const correctAnswers = { result1: "a", result2: "d" };
  const result = document.getElementById(resultId);
  if (answer === correctAnswers[resultId]) {
    result.textContent = "ถูกต้อง!";
    result.style.color = "green";
    stats[resultId].correct++;
  } else {
    result.textContent = "Incorrect! Try again.";
    result.style.color = "red";
    stats[resultId].incorrect++;
  }
  updateSummary();
}

function updateSummary() {
  const summary = document.getElementById("summary");
  summary.innerHTML = "";
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let hasStarted = false;

  Object.keys(stats).forEach((key) => {
    const { correct, incorrect } = stats[key];
    if (correct > 0 || incorrect > 0) {
      hasStarted = true;
    }
    summary.innerHTML += `คำถาม ${key.slice(
      -1
    )}: ถูก ${correct} ข้อ, ผิด ${incorrect} ข้อ<br>`;
    totalCorrect += correct;
    totalIncorrect += incorrect;
  });

  if (!hasStarted) {
    summary.innerHTML = "เลือกคำตอบจากคำถามเพื่อเริ่มต้น!";
  } else {
    summary.innerHTML += `<strong>สรุปผลทั้งหมด:</strong> ถูก ${totalCorrect} ข้อ, ผิด ${totalIncorrect} ข้อ`;
  }
}
