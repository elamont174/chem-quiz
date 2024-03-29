/* jshint esversion:8 */
//OPENING SCREEN

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//QUIZ

//Variables
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const questionNumber = document.getElementById('questionno');
const endScreenContainer = document.getElementById('end-screen');

let shuffledQuestions, currentQuestionIndex;
const maxNumberOfQuestions = 10;
let currentQuestionNumberCount = 0;
let finalScoreCount = 0;
let finalScorePercentage = 0;

let correctAnswerTally = document.getElementById('final-score');
let finalPercentageGrade = document.getElementById('final-percentage');

//Button event listeners
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartButton.addEventListener('click', restartGame);

//FUNCTIONS

//Playing the game

function startGame() {
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    currentQuestionNumberCount++;
    questionNumber.innerText = currentQuestionNumberCount;
    questionElement.innerText = question.question;
    answerButtonsElement.textContent = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
            button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
        nextButton.disabled = true;
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct && correct!==undefined) {
        finalScoreCount++;
    }
    
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (maxNumberOfQuestions > currentQuestionIndex + 1) {
        nextButton.disabled = false;
    } else {
        goToEndScreen();
           }
}

//End (results) screen 

function goToEndScreen(){
    endScreenContainer.classList.remove('hide');
    correctAnswerTally.innerText = finalScoreCount;
    finalPercentageGrade.innerText = ((finalScoreCount/10)*100);
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
           }
}
    
    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }

//Restart Game

    function restartGame(){
        endScreenContainer.classList.add('hide');
        questionNumber.innerText = 0;
        currentQuestionIndex = 0;
        currentQuestionNumberCount = 0;
        finalScoreCount = 0;
        finalScorePercentage = 0;
        nextButton.classList.add('hide');
        startGame();
    }

//Questions dataset

const questions = [
    {
        question: "What is the charge on an electron?",
        answers: [
            {text: 'negative', correct: true },
            {text: 'positive', correct: false },
            { text: 'neutral', correct: false },
            { text: 'doesn\'t exist', correct: false }
            ]
    },
        {
            question: "What is the charge on a proton?",
            answers: [
                { text: 'negative', correct: false },
                { text: 'positive', correct: true },
                { text: 'neutral', correct: false },
                { text: 'doesn\'t exist', correct: false }
            ]
        },
        {
            question: "What is the charge on a neutron?",
            answers: [
                { text: 'negative', correct: false },
                { text: 'positive', correct: false },
                { text: 'neutral', correct: true },
                { text: 'doesn\'t exist', correct: false }
            ]
        },
        {
            question: "What is the mass of an electron?",
            answers: [
                { text: '0', correct: true },
                { text: '1', correct: false },
                { text: '12', correct: false },
                { text: '100', correct: false }
            ]
        },
        {
            question: "What is the mass of a neutron?",
            answers: [
                { text: '0', correct: false },
                { text: '1', correct: true },
                { text: '12', correct: false },
                { text: '100', correct: false }
            ]
        },
        {
            question: "What is the mass of a proton?",
            answers: [
                { text: '0', correct: false },
                { text: '1', correct: true },
                { text: '12', correct: false },
                { text: '100', correct: false }
            ]
        },
        {
            question: "Where in an atom would you find an electron?",
            answers: [
                { text: 'in shells', correct: true },
                { text: 'nucleus', correct: false },
                { text: 'you wouldn\'t', correct: false },
                { text: 'neucleus', correct: false }
            ]
        },
        {
            question: "Where in an atom would you find a neutron?",
            answers: [
                { text: 'in shells', correct: false },
                { text: 'nucleus', correct: true },
                { text: 'you wouldn\'t', correct: false },
                { text: 'neucleus', correct: false }
            ]
        },
        {
            question: "Where in an atom would you find a proton?",
            answers: [
                { text: 'in shells', correct: false },
                { text: 'nucleus', correct: true },
                { text: 'you wouldn\'t', correct: false },
                { text: 'neucleus', correct: false }
            ]
        },
        {
            question: "What is the chemical symbol for iron?",
            answers: [
                { text: 'Ir', correct: false },
                { text: 'I', correct: false },
                { text: 'Fe', correct: true },
                { text: 'Fr', correct: false }
            ]
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: [
                { text: 'G', correct: false },
                { text: 'Go', correct: false },
                { text: 'Au', correct: true },
                { text: 'Ag', correct: false }
            ]
        },
        {
            question: "What is the chemical symbol for mercury?",
            answers: [
                { text: 'Hg', correct: true },
                { text: 'M', correct: false },
                { text: 'Me', correct: false },
                { text: 'Mr', correct: false }
            ]
        },
        {
            question: "What does the state symbol (s) mean?",
            answers: [
                { text: 'solid', correct: true },
                { text: 'liquid', correct: false },
                { text: 'gas', correct: false },
                { text: 'aqueous', correct: false }
            ]
        },
        {
            question: "What does the state symbol (l) mean?",
            answers: [
                { text: 'solid', correct: false },
                { text: 'liquid', correct: true },
                { text: 'gas', correct: false },
                { text: 'aqueous', correct: false }
            ]
        },
        {
            question: "What does the state symbol (g) mean?",
            answers: [
                { text: 'solid', correct: false },
                { text: 'liquid', correct: false },
                { text: 'gas', correct: true },
                { text: 'aqueous', correct: false }
            ]
        },
        {
            question: "What does the state symbol (aq) mean?",
            answers: [
                { text: 'solid', correct: false },
                { text: 'liquid', correct: false },
                { text: 'gas', correct: false },
                { text: 'aqueous', correct: true }
            ]
        },
        {
            question: "On the Periodic Table, what is group 1 called?",
            answers: [
                { text: 'alkali metals', correct: true },
                { text: 'alkaline earth metals', correct: false },
                { text: 'halogens', correct: false },
                { text: 'noble gases', correct: false }
            ]
        },
        {
            question: "On the Periodic Table, what is group 2 called?",
            answers: [
                { text: 'alkali metals', correct: false },
                { text: 'alkaline earth metals', correct: true },
                { text: 'halogens', correct: false },
                { text: 'noble gases', correct: false }
            ]
        },
        {
            question: "On the Periodic Table, what is group 7 called?",
            answers: [
                { text: 'alkali metals', correct: false },
                { text: 'alkaline earth metals', correct: false },
                { text: 'halogens', correct: true },
                { text: 'noble gases', correct: false }
            ]
        },
        {
            question: "On the Periodic Table, what is group 0 called?",
            answers: [
                { text: 'alkali metals', correct: false },
                { text: 'alkaline earth metals', correct: false },
                { text: 'halogens', correct: false },
                { text: 'noble gases', correct: true }
            ]
        }
    ];