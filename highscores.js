function outputHighscore() {

    // var users = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    // alert("This works");
    // Create for loop, in that loop create document.createElement <li> tags console.log highscore page, make sure you can append anything into that ul create test
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });
    highscores.forEach(function (score) {
        if (score.initials != null) {
            // create li tag for each high score
            var li = document.createElement("li");
            li.textContent = (score.score + 1) + " | " + score.initials;
            // display on page
            var ul = document.getElementById("highscores");
            ul.appendChild(li);
        }
    });

    // var li = document.createElement("li");
    // li.textContent = score.timeleft + " | " + score.initials;

    // var highscores = document.getElementById("highscores");
    // highscores.appendChild(li);
    // // console.log(timeleft + " | " + initials);
    // // alert(initials);
    // var newUser = new User(timeleft, initials);

    // var liTag = document.createElement("li");
    // liTag.textContent = score.initials + " - " + score.score;

    // // display on page
    // var olEl = document.getElementById("highscores");
    // olEl.appendChild(liTag);
}

function clearHighscore() {
    highscores.innerHTML = "";
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighscore;

outputHighscore();