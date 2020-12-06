// Function to output highscores from our Local Storage
function outputHighscore() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    // Create loop that will create new <li> element tags to output/append on highscore page
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });
    highscores.forEach(function (score) {
        if (score.initials != null) {
            // Create li tag for each high score
            var li = document.createElement("li");
            li.textContent = (score.score + 1) + " | " + score.initials;
            // Display on page
            var ul = document.getElementById("highscores");
            ul.appendChild(li);
        }
    });
}
// Function to clear all highscores from the highscore list
function clearHighscore() {
    highscores.innerHTML = "";
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
// When clear button is clicked, run the clearHighscore() function
document.getElementById("clear").onclick = clearHighscore;
// Invoke the outputHighscore() function instantly upon page load
outputHighscore();