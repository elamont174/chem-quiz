const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    setNextQuestion()
}

function setNextQuestion() {}

function selectAnswer() {}


const questions = [
    {
        question: "What is the charge on an electron?",
        answers: ['negative', 'positive', 'neutral', 'does not exist'],
        correctAnswer: 'negative'
  },
    {
        question: "What is the charge on a proton?",
        answers: ['negative', 'positive', 'neutral', 'does not exist'],
        correctAnswer: 'positive'
},
    {
        question: "What is the charge on a neutron?",
        answers: ['negative', 'positive', 'neutral', 'does not exist'],
        correctAnswer: 'neutral'
},
{
        question: "What is the mass on an electron?",
        answers: ['0', '1', '12', '100'],
        correctAnswer: '0'
    },
{
        question: "What is the mass on a neutron?",
        answers: ['0', '1', '12', '100'],
        correctAnswer: '1'
    },
{
        question: "What is the mass on a proton?",
        answers: ['0', '1', '12', '100'],
        correctAnswer: '1'
    },
{
        question: "Where in an atom would you find an electron?",
        answers: ['in shells', 'nucleus', 'you would not', 'neucleus'],
        correctAnswer: 'in shells'
},
{
        question: "Where in an atom would you find a neutron?",
        answers: ['in shells', 'nucleus', 'you would not', 'neucleus'],
        correctAnswer: 'nucleus'
},
{
        question: "Where in an atom would you find a proton?",
        answers: ['in shells', 'nucleus', 'you would not', 'neucleus'],
        correctAnswer: 'nucleus'
},
{
        question: "What is the chemical symbol for iron?",
        answers: ['Ir', 'I', 'Fe', 'Fr'],
        correctAnswer: 'Fe'
    },
{
        question: "What is the chemical symbol for gold?",
        answers: ['G', 'Go', 'Au', 'Ag'],
        correctAnswer: 'Au'
    },
{
        question: "What is the chemical symbol for mercury?",
        answers: ['Hg', 'M', 'Me', 'Mr'],
        correctAnswer: 'Hg'
    },
{
        question: "What does the state symbol (s) mean?",
        answers: ['solid', 'liquid', 'gas', 'aqueous'],
        correctAnswer: 'solid'
    },
{
        question: "What does the state symbol (l) mean?",
        answers: ['solid', 'liquid', 'gas', 'aqueous'],
        correctAnswer: 'liquid'
    },
{
        question: "What does the state symbol (g) mean?",
        answers: ['solid', 'liquid', 'gas', 'aqueous'],
        correctAnswer: 'gas'
    },
{
        question: "What does the state symbol (aq) mean?",
        answers: ['solid', 'liquid', 'gas', 'aqueous'],
        correctAnswer: 'aqueous'
    },
{
        question: "On the Periodic Table, what is group 1 called?",
        answers: ['alkali metals', 'alkaline earth metals', 'halogens', 'noble gases'],
        correctAnswer: 'alkali metals'
    },
{
        question: "On the Periodic Table, what is group 2 called?",
        answers: ['alkali metals', 'alkaline earth metals', 'halogens', 'noble gases'],
        correctAnswer: 'alkaline earth metals'
    },
{
        question: "On the Periodic Table, what is group 7 called?",
        answers: ['alkali metals', 'alkaline earth metals', 'halogens', 'noble gases'],
        correctAnswer: 'halogens'
    },
{
        question: "On the Periodic Table, what is group 0 called?",
        answers: ['alkali metals', 'alkaline earth metals', 'halogens', 'noble gases'],
        correctAnswer: 'noble gases'
    },
]