if (!localStorage.getItem("score")) {
  localStorage.setItem("score", 0);
}

function checkAnswer(puzzle, correct) {
  let input = document.getElementById("ans" + puzzle).value.toLowerCase();
  let score = parseInt(localStorage.getItem("score"));

  if (input === correct) {
    score++;
    localStorage.setItem("score", score);
    alert("Correct!");
  } else {
    alert("Wrong answer!");
  }

  if (puzzle < 4) {
    window.location.href = "puzzle" + (puzzle + 1) + ".html";
  } else {
    window.location.href = "score.html";
  }
}
