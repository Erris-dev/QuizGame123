const question  = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const questionScore = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let acceptingAnswers = false;
let avaibleQuestions = [];

let questions = [];

fetch("questions.json").then(res => {
    return res.json();
}).then(loadedQuestions => {
    questions = loadedQuestions;
    startGame();
})

const CORRECT_QUESTION = 10;
const maxQuestions = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    avaibleQuestions = [...questions];
    console.log(avaibleQuestions);
    getAnQuestion();

    game.classList.remove("hidden");
    loader.classList.add("hidden");
}

getAnQuestion = () => {
    if (avaibleQuestions.length == 0 || questionCounter >=  maxQuestions) {
        return window.location.assign('end.html');
    }

    localStorage.setItem("MostRecentScore", score);

    questionCounter++;
    progressText.innerText = "Question " + questionCounter + "/" + maxQuestions;

    progressBarFull.style.width = (questionCounter / 6) * 100 + "%";

    const questionIndex = Math.floor(Math.random() * avaibleQuestions.length);
    currentQuestion = avaibleQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset.number
        choice.innerText = currentQuestion["choice" + number];
        console.log("Number: ", number); // Check if this logs the correct numbers
        console.log("Text: ", currentQuestion["choice" + number]); // Check if the correct text is being fetched
    });

    avaibleQuestions.splice(questionIndex, 1)

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = "incorrect";
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = "correct";
        }

        if (classToApply == "correct") {
            incrementScore(CORRECT_QUESTION);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getAnQuestion();
        }, 1000);
    })
})

incrementScore = num => {
    score += num;
    questionScore.innerText = score;
}



