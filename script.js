// Main Page, when user clicks start, run Questions page
document.getElementById("start-button").addEventListener("click", function () {
    window.location.href = "questions.html";
});

// Answer logic
// MAKE IF STATEMENTS IF QUESTION INDEX == NUMBER THEN RUN FUNCTION1 FOR 1 OR FCTN 2 FOR 2 UP TO 5, WHEN IT HITS 6 THEN END QUIZ
// Answer for Question 1 is A
var answerIsCorrect = true;
function question1() {
    answerIsCorrect = true;
    btn1.addEventListener("click", function () {
        if (option1.textContent == questions[0].answer) {
            computer.textContent = "Correct! ";
            computer.style.color = "green";
            answerIsCorrect = true;
            questionIndex++;
            runQuestions();
        }
    })
    btn2.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn3.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn4.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
}
// Answer for Question 2 is C
function question2() {
    answerIsCorrect = true;
    btn1.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn2.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn3.addEventListener("click", function () {
        if (option3.textContent == questions[1].answer) {
            answerIsCorrect = true;
            computer.textContent = "Correct! ";
            computer.style.color = "green";
            questionIndex++;
            runQuestions();
        }
    })
    btn4.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
}
// Answer for Question 3 is D
function question3() {
    answerIsCorrect = true;
    btn1.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn2.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn3.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn4.addEventListener("click", function () {
        if (option4.textContent == questions[2].answer) {
            answerIsCorrect = true;
            computer.textContent = "Correct! ";
            computer.style.color = "green";
            questionIndex++;
            runQuestions();
        }
    })
}
// Answer for Question 4 is C 
function question4() {
    answerIsCorrect = true;
    btn1.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn2.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn3.addEventListener("click", function () {
        // alert("clicked btn one");
        if (option3.textContent == questions[3].answer) {
            answerIsCorrect = true;
            computer.textContent = "Correct! ";
            computer.style.color = "green";
            questionIndex++;
            runQuestions();
        }
    })
    btn4.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
}
// Answer for Question 5 is D
function question5() {
    answerIsCorrect = true;
    btn1.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn2.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn3.addEventListener("click", function () {
        answerIsCorrect = false;
        computer.textContent = " Wrong! -10s";
        computer.style.color = "red";
    })
    btn4.addEventListener("click", function () {
        if (option4.textContent == questions[4].answer) {
            answerIsCorrect = true;
            computer.textContent = "Correct! ";
            computer.style.color = "green";
            questionIndex++;
            endQuiz();
        }
    })
}