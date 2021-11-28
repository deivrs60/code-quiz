const card = document.querySelector('#question-card');
const questionText = document.querySelector('#question');
const cardBody = document.querySelector('#card-body');
const cardFooter = document.querySelector('#card-body');

const startButton = document.querySelector('#start-btn');

const timerEl = document.querySelector('#time-remaining');
const timerDelay = 1000;
const startingTime = 59;



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

  


  /////////



  


  /////////


  // if start button is pressed: 
  startButton.onclick = () => {
      showQuestions(0);
      if(questionCount > myQuestions.length -1) {
        questionCount++;
        showQuestions(questionCount);
    } else {
        console.log("Questions Completed")
    }
      showQuestions(1);
      showQuestions(2);
      showQuestions(3);
      showQuestions(4);
  }

  let questionCount = 0;
/// Inserting questions and options from array
function showQuestions (index) {
    const questionText = document.querySelector(".card-header");
    const answers = document.querySelector(".answers");
    let question = '<h2>' + myQuestions[index].question + '</h2>';
    let options = '<div class="options">' + myQuestions[index].options[1.] + '<span></span></div>'
                    + '<div class="options">' + myQuestions[index].options[2.] + '<span></span></div>'
                    + '<div class="options">' + myQuestions[index].options[3.] + '<span></span></div>'
                    + '<div class="options">' + myQuestions[index].options[4.] + '<span></span></div>';
    questionText.innerHTML = question;
    answers.innerHTML = options;
}



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
