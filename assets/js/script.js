6const card = document.querySelector('#question-card');
const questionText = document.querySelector('#question');
const cardBody = document.querySelector('#card-body');
const cardFooter = document.querySelector('#card-footer');
const results = document.querySelector('#results');
const score = document.querySelector('.score');
const vHiSc = document.querySelector('.view-high-scores')

const startButton = document.querySelector('#start-btn');

const timerEl = document.querySelector('#time-remaining');
const timerDelay = 1000;
var timeLeft = 60;
var questionCount = 0;
var quizEnd = false;
////////////////////////////////////////////////////////

let myQuestions = [
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answer: "4.",
        options: {
            1.: "Numbers and Strings",
            2.: "Other Arrays",
            3.: "Booleans",
            4.: "All of the above"
        }
    },

    {
        question: "The condition in an if / else statement is enclosed with ____.",
        answer: "3.",
        options: {
            1.: "Quotes",
            2.: "Curly Brackets",
            3.: "Parenthesis",
            4.: "Square Brackets"
        }
    },

    {
        question: "Commonly used data types DO NOT include:",
        answer: "3.",
        options: {
            1.: "Strings",
            2.: "Booleans",
            3.: "Alerts",
            4.: "Numbers"
        }
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "1.",
        options: {
            1.: "console.log",
            2.: "Terminal / Bash",
            3.: "For Loops",
            4.: "JavaScript",
        }
    },

    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer: "2.",
        options: {
            1.: "Commas",
            2.: "Quotes",
            3.: "Curly Brackets",
            4.: "Parenthesis"
        }
    }
  ];

/////////////////////////////////////////////////////////


  // if start button is pressed: 
  startButton.onclick = () => {
      showQuestions(questionCount);
      var countdownTimer = setInterval(function(){
        if (timeLeft > 0) {
            timeLeft--;
            if (timeLeft < 5) {
                timerEl.style.color = "red";
            }
        }
        else if (timeLeft === 0) {
              showResults ();
              clearInterval(countdownTimer);
        }

          timerEl.textContent = timeLeft;

          if (quizEnd) {
            clearInterval(countdownTimer);
        }
      }, 1000)

     
  }


/// Inserting questions and options from array
function showQuestions (index) {
    const questionText = document.querySelector(".card-header");
    const answers = document.querySelector(".answers");
    let question = '<h2>' + myQuestions[index].question + '</h2>';
    let options = '<div class="options" data-id="1.">' + myQuestions[index].options[1.] + '<span></span></div>'
                    + '<div class="options" data-id="2.">' + myQuestions[index].options[2.] + '<span></span></div>'
                    + '<div class="options" data-id="3.">' + myQuestions[index].options[3.] + '<span></span></div>'
                    + '<div class="options" data-id="4.">' + myQuestions[index].options[4.] + '<span></span></div>';
    questionText.innerHTML = question;
    answers.innerHTML = options;

}

function handleOptionEvents(event) {
    // validate event 
    if (event.target.matches(".options")) {
        let selectedOption = event.target;
        answerSelected(selectedOption);
    }

}

function answerSelected(selectedOption) {
    let userAnswer = selectedOption.dataset.id;
    let correctAns = myQuestions[questionCount].answer;
    if (userAnswer != correctAns) {
        console.log("Answer is Incorrect!");

        // remove time from timer
        timeLeft = timeLeft -10;
    }
    
    // move to next question 
    questionCount++

    if (questionCount < myQuestions.length -1) {
        showQuestions(questionCount);
    } else if (questionCount === myQuestions.length ) {
        showResults();
    }

}

function showResults() {
    results.style.opacity = 1;
    quizEnd = true;
    score.textContent = timeLeft + "!";
}


var saveScore = function() {
    localStorage.setItem("score", JSON.stringify(timeLeft));
}

if (localStorage.getItem("hScores")) {
    hScores = JSON.parse(local.storage.getItem("hScores"));
    hScores.forEach(function(allScores) {
    vHiSc = text.content(hScores);
    })
}
///////////////////////////////////////////////////////////////////////////////


card.addEventListener("click", handleOptionEvents);

