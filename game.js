const question  = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let score = 0;
let questionCounter = 0;
let currentQuestion = {};
let acceptingAnswers = false;
let avaibleQuestions = [];

let questions = [
    {
        question : "What do you think about when a black person is mentioned?",
        choice1 : "A nice person",
        choice2 : "A beautiful person",
        choice3 : "A hard-worker",
        choice4 : "Nigger",
        answer: 4
    },
    {
        question : "What should you do when you see a black person?",
        choice1 : "Give him a hug",
        choice2 : "Become friends with him",
        choice3 : "Call 911 and run as fast as u can",
        choice4 : "Greet them",
        answer: 3
    },
    {
        question : "How should you treat black people",
        choice1 : "With respect",
        choice2 : "Spit on them, and call them monkeys",
        choice3 : "With kindness",
        choice4 : "With equality",
        answer: 2
    },
    {
        question : "What should you say when u greet a nigger or magjup?",
        choice1 : "Hello sir",
        choice2 : "Greetings",
        choice3 : "Stfu up nigger",
        choice4 : "None of the above",
        answer: 3
    },
    {
        question: "How should u call a black person?",
        choice1 : "NIGGER NIGGA MONKEY MUT KAK ",
        choice2 : "Choice 1",
        choice3 : "Choice 1",
        choice4 : "Choice 1",
        answer: 1
    }
]

const CORREST_QUESTION = 10;
const maxQuestions = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    avaibleQuestions = [...questions];
    console.log(avaibleQuestions);
    getAnQuestion();
}

getAnQuestion = () => {
    questionCounter++;
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
        getAnQuestion();
    })
})


startGame();


