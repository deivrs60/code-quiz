const timerEl = document.querySelector('#time-remaining');
const card = document.querySelector('#question-card');
const cardHeader = document.querySelector('#card-header');
const cardBody = document.querySelector('#card-body');
const cardFooter = document.querySelector('#card-body');

const startButton = document.querySelector('#start-btn');

const timerDelay = 1000;
const startingTime = 59;


const myQuestions = [
    {
      question: "Arrays in JavaScript can be used to store _______.",
      answers: {
        1.: "numbers and strings",
        2.: "other arrays",
        3.: "booleans",
        4.: "all of the above"
      },
      correctAnswer: "4."
    },
    {
      question: "The condition in an if / else statement is enclosed with ____.",
      answers: {
        1.: "quotes",
        2.: "curly brackets",
        3.: "parenthesis",
        4.: "square brackets"
      },
      correctAnswer: "3."
    },
    {
      question: "Commonly used data types DO NOT include:",
      answers: {
        1.: "strings",
        2.: "booleans",
        3.: "alerts",
        4.: "numbers"
      },
      correctAnswer: "3."
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1.: "console.log",
            2.: "terminal / bash",
            3.: "for loops",
            4.: "JavaScript",
        },
        correctAnswer: "1."
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            1.: "commas",
            2.: "quotes",
            3.: "curly brackets",
            4.: "parenthesis"
        },
        correctAnswer: "2."
    }
  ];

function buildQuiz(){
    var output = [];

    // for each question 
    myQuestions.forEach(
        (currentQuestion, questionNumber) =>  {
            // variable to store the answers
            var answers = [];
        }
    )
}

function showResults(){}





// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);




///////////////////////////////////////////////////////////////////////////////



var hScores = [];
// If hScores exists in localStorage
if (localStorage.getItem("hScores")) {
    // import it
    hScores = JSON.parse(localStorage.getItem("hScores"));
    // display it on the page
    hScores.forEach(function (oneScore) {
        $(".hs-list").append($("<li>").text(oneScore));
    })
}
