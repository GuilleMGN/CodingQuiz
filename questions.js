// COUNTDOWN TIMER
// Get span element to change only the number and not the <p> tag
var countdown = document.getElementById("countdown");
// Timer starts at 75 seconds
var timeleft = 75;
// Function that will run the timer
function startTimer() {
    var timer = setInterval(function () {
        countdown.textContent = timeleft;
        timeleft--;
        // Conditional if timer hits 0
        if (timeleft < 0) {
            countdown.textContent = timeleft;
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}
// Invoke the timer function upon page load
startTimer();

// List of question titles with their choices and answers as objects
var questions = [
    {   // Question 1
        title: "What are the 3 building blocks of a webpage? ",
        choices: ["HTML, CSS, JS", "GitHub, GitLab, GitBash", "Header, Body, Footer", "String, Number, Boolean"],
        answer: "HTML, CSS, JS"
    },
    {   // Question 2
        title: "Inside which HTML element can we put JavaScript code? ",
        choices: ["<javascript>", "<code>", "<script>", "<js>"],
        answer: "<script>"
    },
    {   // Question 3
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {   // Question 4
        title: "What does CSS stand for? ",
        choices: ["Computer Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Coding Style Section"],
        answer: "Cascading Style Sheets"
    },
    {   // Question 5
        title: "Which option is NOT an HTML DOM method?",
        choices: ["addEventListener()", "getElementById()", "createElement()", "console.log()"],
        answer: "console.log()"
    }
];
// Change text below questions list to give feedback based on user selection
var computer = document.getElementById("computer");
computer.textContent = "You will be penalized -10s for every wrong answer!";
// Assign the four buttons to variables to determine possible answers
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
// Question index will start at 0 to begin with first question
var questionIndex = 0;

// Function that will display the user each question
function runQuestions() {
    // Change the question number span
    var currentQuestion = questions[questionIndex];
    var questionNumber = document.getElementById("question-number");
    questionNumber.textContent = questionIndex + 1;
    // Change the question title
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion.title;
    // Display all the questions in the list
    var option1 = document.getElementById("option1")
    option1.textContent = currentQuestion.choices[0];
    var option2 = document.getElementById("option2")
    option2.textContent = currentQuestion.choices[1];
    var option3 = document.getElementById("option3")
    option3.textContent = currentQuestion.choices[2];
    var option4 = document.getElementById("option4")
    option4.textContent = currentQuestion.choices[3];
    // Run function to check users clicked answer based on what question index we are on
    if (questionIndex == 0) {
        question1();
    }
    else if (questionIndex == 1) {
        question2();
    }
    else if (questionIndex == 2) {
        question3();
    }
    else if (questionIndex == 3) {
        question4();
    }
    else if (questionIndex == 4) {
        question5();
    }
} // End runQuestions();

// Invoke the initial questions function
runQuestions();

// Run endQuiz() function when user finished test or when time runs out
function endQuiz() {
    // Asks user for initials
    var initials = prompt("Quiz over! Your score was " + (timeleft + 1) + "! Please enter your initials: ");
    // Checks if initials string submitted by user is not empty in order to run the saveHighScore() funciton
    if (initials != "") {
        saveHighScore(initials);
    }
}

// Saves users initials into our Local Storage
function saveHighScore(initials) {
    // Get saved scores from our Local Storage. If none then set to empty array
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    // Save score and initials into an object
    var newScore = {
        score: timeleft,
        initials: initials
    };
    // Save object to our Local Storage
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    // Redirect to highscores page
    location.href = "highscores.html";
} // End all questions