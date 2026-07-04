if (!localStorage.getItem("score")) {
  localStorage.setItem("score", 0);
  localStorage.setItem("page", 1);
}

const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

function check(correct) {
  if (correct === 1) {
    correctSound.play();
    alert("✔ सही उत्तर!");
    let score = parseInt(localStorage.getItem("score"));
    localStorage.setItem("score", score + 1);
  } else {
    wrongSound.play();
    alert("✖ गलत उत्तर!");
  }

  let page = parseInt(localStorage.getItem("page")) + 1;
  localStorage.setItem("page", page);

  setTimeout(() => {
    if (page <= 9) {
      window.location.href = "riddle" + page + ".html";
    } else {
      window.location.href = "score.html";
    }
  }, 700);
}
