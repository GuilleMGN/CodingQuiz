# CodingQuiz

In this assignment I coded a timed quiz with 5 multiple choice questions related to coding. The main page starts off with a welcome screen and 
some instructions. There are two ways to continue: a start button and an anchor tag button that links the highscores page and back. 
In order to begin the quiz, the user must select the start button which has an event listener, upon click opens the questions page. 

Once you enter the questions page, the timer at the bottom starts counting down from 75 seconds, and there is an unordered list, and the list 
elements are shown to the user from an object named questions. In this object the values for the question title, choices, and answer are determined. 
The question titles are then displayed in four list elements with 4 buttons next to them. When the user selects their answer by clicking these 
buttons, a message is displayed to the user whether they got the question right or wrong. If their answer is correct, the question moves on, 
however if their selection is wrong, the timer will subtract 10 seconds, which penalizes the user for selecting the wrong answer. It was a 
little challenging for me to determine the logic behind each button (a, b, c, or d) to be correct or incorrect, and when to subtract the 
ten seconds from the timer. I managed to get this working by using the funcitons in add event listeners to determine if its right or wrong, 
then removing the event listeners and adding them again when I moved on to the next question. The quiz would end once the timer hits 0, 
or once the user has finished the 5 questions. Once complete, it prompts the user for their initials and changes to the highscores page. 

The users initials and time remaining is saved onto the local storage to later output their name and their score onto the leaderboard. 
On the highscores page, theres another unordered list that has list elements which display all the highscores saved onto local storage. 
They are sorted into the order for the person with the greatest score to be on top, and the lowest on the bottom. I also ensured that if a user 
doesnt input any characters, it will not be displayed on the leaderboard because the empty array returned a null value. There is a clear button 
that deletes the local storages items array. Finally, I used my own css for some styling and included bootstrap for a neat responsive layout. 

Screenshots of the webpage can be found at (./Assets/image.png)

URL to GitHub Repository: https://github.com/GuilleMGN/CodingQuiz 
Live webpage URL: https://guillemgn.github.io/CodingQuiz/index.html 
