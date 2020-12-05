// Main Page, when user clicks start, run Questions page
document.getElementById("start-button").addEventListener("click", function () {
    window.location.href = "questions.html";
});

// Answer logic
function correct() {
    computer.textContent = "Correct! ";
    computer.style.color = "green";
    questionIndex++;
    runQuestions();
}
function wrong() {
    computer.textContent = " Wrong! -10s ";
    computer.style.color = "red";
    timeleft -= 10;
}
function final() {
    computer.textContent = " Correct! ";
    computer.style.color = "green";
    questionIndex++;
    endQuiz();
}
// MAKE IF STATEMENTS IF QUESTION INDEX == NUMBER THEN RUN FUNCTION1 FOR 1 OR FCTN 2 FOR 2 UP TO 5, WHEN IT HITS 6 THEN END QUIZ
// Answer for Question 1 is A (option 1)
function question1() {
    if (option1.textContent == questions[0].answer) {
        btn1.addEventListener("click", correct); // Makes sure button 1 is correct
        btn2.removeEventListener("click", wrong);
        btn3.removeEventListener("click", wrong);
        btn4.removeEventListener("click", wrong);
    }
    btn2.addEventListener("click", wrong); // The other 3 buttons are wrong
    btn3.addEventListener("click", wrong);
    btn4.addEventListener("click", wrong);

}
// Answer for Question 2 is C (option 3)
function question2() {
    btn1.removeEventListener("click", correct); // Remove button 1 from being correct from last question
    if (option3.textContent == questions[1].answer) {
        btn1.removeEventListener("click", wrong);
        btn2.removeEventListener("click", wrong);
        btn3.removeEventListener("click", wrong); // Remove button 3 from being wrong from last question
        btn3.addEventListener("click", correct); // Add button 3 to be correct
        btn4.removeEventListener("click", wrong);
    }
    btn1.addEventListener("click", wrong); // The other 3 buttons are wrong
    btn2.addEventListener("click", wrong);
    btn4.addEventListener("click", wrong);
}
// Answer for Question 3 is D (option 4)
function question3() {
    btn3.removeEventListener("click", correct); // Remove button 3 from being correct from last question
    if (option4.textContent == questions[2].answer) {
        btn1.removeEventListener("click", wrong);
        btn2.removeEventListener("click", wrong);
        btn3.removeEventListener("click", wrong);
        btn4.removeEventListener("click", wrong); // Remove button 4 from being wrong from last question
        btn4.addEventListener("click", correct); // Add button 4 to be correct
    }
    btn1.addEventListener("click", wrong); // The other 3 buttons are wrong
    btn2.addEventListener("click", wrong);
    btn3.addEventListener("click", wrong);
}
// Answer for Question 4 is C (option 3)
function question4() {
    btn4.removeEventListener("click", correct); // Remove button 4 from being correct from last question
    if (option3.textContent == questions[3].answer) {
        btn1.removeEventListener("click", wrong);
        btn2.removeEventListener("click", wrong);
        btn3.removeEventListener("click", wrong); // Remove button 3 from being wrong from last question
        btn3.addEventListener("click", correct); // Add button 3 to be correct
        btn4.removeEventListener("click", wrong);
    }
    btn1.addEventListener("click", wrong); // The other 3 buttons are wrong
    btn2.addEventListener("click", wrong);
    btn4.addEventListener("click", wrong);
}
// Answer for Question 5 is D (option 4)
function question5() {
    btn3.removeEventListener("click", correct); // Remove button 3 from being correct from last question
    if (option4.textContent == questions[4].answer) {
        btn1.removeEventListener("click", wrong);
        btn2.removeEventListener("click", wrong);
        btn3.removeEventListener("click", wrong);
        btn4.removeEventListener("click", wrong); // Remove button 4 from being wrong from last question
        btn4.addEventListener("click", final); // Add button 4 to be correct (final) and its set to FINAL for the LAST QUESTION
    }
    btn1.addEventListener("click", wrong); // The other 3 buttons are wrong
    btn2.addEventListener("click", wrong);
    btn3.addEventListener("click", wrong);
}

// VV-- INCASE EVERYTHING GOES ABSOLUTELY WRONG --VV
// function question5() {
//     answerIsCorrect = true;
//     btn1.addEventListener("click", function () {
//         answerIsCorrect = false;
//         computer.textContent = " Wrong! -10s";
//         computer.style.color = "red";
//     })
//     btn2.addEventListener("click", function () {
//         answerIsCorrect = false;
//         computer.textContent = " Wrong! -10s";
//         computer.style.color = "red";
//     })
//     btn3.addEventListener("click", function () {
//         answerIsCorrect = false;
//         computer.textContent = " Wrong! -10s";
//         computer.style.color = "red";
//     })
//     btn4.addEventListener("click", function () {
//         if (option4.textContent == questions[4].answer) {
//             answerIsCorrect = true;
//             computer.textContent = "Correct! ";
//             computer.style.color = "green";
//             questionIndex++;
//             endQuiz();
//         }
//     })
// }