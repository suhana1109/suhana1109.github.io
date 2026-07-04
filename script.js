if(!localStorage.getItem("score")){
localStorage.setItem("score",0);
localStorage.setItem("page",1);
}

const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

function check(isCorrect){
if(isCorrect){
correctSound.play();
let s = parseInt(localStorage.getItem("score"));
localStorage.setItem("score", s + 1);
alert("✔ Correct Answer!");
}else{
wrongSound.play();
alert("✖ Wrong Answer!");
}

let p = parseInt(localStorage.getItem("page")) + 1;
localStorage.setItem("page", p);

setTimeout(()=>{
if(p <= 9){
window.location.href = "puzzle" + p + ".html";
}else{
window.location.href = "score.html";
}
},700);
}
