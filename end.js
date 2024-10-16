const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const MostRecentScore = localStorage.getItem("MostRecentScore");

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

const MAX_HIGH_SCORE = 5;
finalScore.innerText = MostRecentScore

username.addEventListener("keyup", () => {
    saveScoreButton.disabled = !username.value
})

saveHighScore = e => {
    console.log("Saved!")
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value 
    }

    highScore.push(score);

    highScore.sort((a,b) => b.score - a.score)

    highScore.splice(5);

    localStorage.setItem("highScore", JSON.stringify(highScore));
    console.log(highScore);
}