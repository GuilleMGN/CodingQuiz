var countdown = document.getElementById("countdown");
var timeleft = 75;

// Function that will run the timer
function startTimer() {
    var timer = setInterval(function () {
        countdown.textContent = `${timeleft}`;
        timeleft--;
        // Conditional if timer hits 0
        if (timeleft < 0) {
            countdown.textContent = `${timeleft}`;
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}
// endQuiz();
// Invoke the timer function
startTimer();


// List of question titles with their choices and answers as objects
var questions = [
    {   // Question 1
        title: "What are the 3 building blocks of a webpage? ",
        choices: ["HTML, CSS, JS", "GitHub, GitLab, GitBash", "Head, Body, Footer", "String, Number, Boolean"],
        answer: "HTML, CSS, JS"
    },
    {   // Question 2
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {   // Question 3
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {   // Question 4
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {   // Question 5
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

var questionIndex = 0;
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var computer = document.getElementById("computer");
computer.textContent = "You will be penalized -10s for every wrong answer!";

// Function that will display the user each question
function runQuestions() {
    // Change the question number span
    var currentQuestion = questions[questionIndex];
    var questionNumber = document.getElementById("question-number");
    questionNumber.textContent = `${questionIndex + 1}`;
    // Change the question title
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion.title;
    // Display all the questions    
    var option1 = document.getElementById("option1")
    option1.textContent = currentQuestion.choices[0];
    var option2 = document.getElementById("option2")
    option2.textContent = currentQuestion.choices[1];
    var option3 = document.getElementById("option3")
    option3.textContent = currentQuestion.choices[2];
    var option4 = document.getElementById("option4")
    option4.textContent = currentQuestion.choices[3];
    // Run function to check answer based on what question index we are on
    if (questionIndex == 0) {
        question1();
        console.log(answerIsCorrect);
    }
    else if (questionIndex == 1) {
        question2();
        console.log(answerIsCorrect);
    }
    else if (questionIndex == 2) {
        question3();
        console.log(answerIsCorrect);
    }
    else if (questionIndex == 3) {
        question4();
        console.log(answerIsCorrect);
    }
    else if (questionIndex == 4) {
        question5();
        console.log(answerIsCorrect);
    }
} // End runQuestions();

// Invoke the initial questions function
runQuestions();

// Add button that will run questions again
document.getElementById("next-button").addEventListener("click", function () {
    // Conditional if we ran out of questions
    // if (questionIndex === questions.length) {
    //     endQuiz();
    // }
    // else {
    //     runQuestions();
    //     questionIndex++;
    // }
});
// function User(score, name) {
//     this.score = score;
//     this.name = name;
// }
function endQuiz() {
    var initials = prompt("Quiz over! Your score was " + (timeleft + 1) + "! Please enter your initials: ");
    window.location.href = "highscores.html";
    saveHighScore();
    // if (users.length == 0) {
    //         users.push(newUser);
    //         window.localStorage.setItem("highscores", JSON.stringify(users));
    // }
    // else {
    // }
}
function saveHighScore() {

    // get saved scores from localstorage, or if not any, set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
        score: time,
        initials: initials
    };
    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    // redirect to next page
    window.location.href = "highscores.html";
}














