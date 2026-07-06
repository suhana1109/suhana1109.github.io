const winSound = new Audio("sounds/win.mp3");
const loseSound = new Audio("sounds/lose.mp3");
const tieSound = new Audio("sounds/tie.mp3");

function playGame(userChoice){
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let message = "";

  if(userChoice === computerChoice){
    message = "😐 It's a Tie!";
    tieSound.play();
  }
  else if(
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ){
    message = "✅ Correct! You Win!";
    winSound.play();
  }
  else{
    message = "❌ Wrong! You Lose!";
    loseSound.play();
  }

  document.getElementById("result").innerHTML =
    `You chose <b>${userChoice}</b><br>
     Computer chose <b>${computerChoice}</b><br><br>
     ${message}`;
}
