// Initialize score and page
if (!localStorage.getItem("score")) {
  localStorage.setItem("score", 0);
  localStorage.setItem("page", 1);
}

// Sound effects
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

function check(correct) {
  if (correct === 1) {
    correctSound.play();
    let score = parseInt(localStorage.getItem("score"));
    localStorage.setItem("score", score + 1);
  } else {
    wrongSound.play();
  }

  let page = parseInt(localStorage.getItem("page"));
  page++;
  localStorage.setItem("page", page);

  setTimeout(() => {
    if (page <= 9) {
      window.location.href = "riddle" + page + ".html";
    } else {
      window.location.href = "score.html";
    }
  }, 700); // delay so sound can play
}
