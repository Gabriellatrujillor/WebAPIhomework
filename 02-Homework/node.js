// VARIABLES DECLARED!
var startButton = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");
// var finalScore = ......
// START BUTTON EVENT LISTENER AND FUNCTION TO NEXT SCREEN
startButton.addEventListener("click", function () {
  console.log("start button clicked");
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  console.log("begin timer countdown: ");
  countDown();
});
// MORE VARIABLES DECLARED
var timeLeft = 35;
var timer = document.getElementById("timer");
var timerId = setInterval(countDown, 1000);
// DISPLAY TIMER FUNCTION
function countDown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);
    //GO TO END SCREEN
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    console.log("time is out, go to end screen.");
  } else {
    timer.innerHTML = timeLeft + " seconds remaining!";
    timeLeft--;
  }
}
// RUN QUIZ (try to not use a for loop as it will get very complicated with the nexting. instead, try to use the index method we discussed)¸
var questions = [];
var answerOptions =[]
// END SCREEN
document.getElementById("score").textContent = "asdfghjkjhgfdsdfghjk";
// RUN QUIZ (try to not use a for loop as it will get very complicated with the nexting. instead, try to use the index method we discussed)¸

////TEST CODE

// var quiz = newQuiz(questions);

// var question = [
//     new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
//     new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
//     new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
// ];

// function quiz(questions) {
//     this.score = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
// }

// var questionOne = document.getElementById("btn0");
// {

//     // questionZero.addEventListener("click", function () (
//     //    console.log("question zero clicked"); 
//     // ))
// }
// var questionTwo = document.getElementById("btn1");{

// }
// var questionOne = document.getElementById("btn2");{

// }



// var questions = [];
// var answerOptions =[]
// END SCREEN



