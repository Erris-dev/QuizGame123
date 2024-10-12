const highScoreList = document.getElementById("high-Scores-List");
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

highScoreList.innerHTML = highScore
.map( score => {
    return `<li id="high-score">${score.name}-${score.score}</li>`;
}).join("")