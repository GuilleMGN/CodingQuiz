


// function runQuestions() {
//     document.createElement();

// }
function startTimer() {
    // TIMER
    var timeleft = 75;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
        }
        else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
            console.log(timeleft);
        }
        timeleft--;
    }, 1000);

}

startTimer();