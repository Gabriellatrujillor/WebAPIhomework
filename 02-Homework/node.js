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
  //countDown();
  renderQuestion();
});


// MORE VARIABLES DECLARED
var timeLeft = 35;
var timer = document.getElementById("timer");
//var timerId = setInterval(countDown, 1000);
var questionIndex=0;
// DISPLAY TIMER FUNCTION


// ****OBJECTIVE: KEEP TIMER FROM RUNNING WITHOUT PRESSING START

// ***** ORIGINAL TIMER FUNCTION********
function countDown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);
    //GO TO END SCREEN
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    console.log("time is out, go to end screen.");
  } else {
    timer.textContent = timeLeft + " seconds remaining!";
    timeLeft--;
  }

}
//function to render the question
function renderQuestion(){
  document.querySelector("#quiz-screen").setAttribute("class","");
 // countDown();
  //display the current q, choices, answers
  //console.log(Game);
  console.log(Game.question[0]);
  document.querySelector("#question-title").textContent=Game.question[questionIndex];
  
  // var choice1 = document.createElement("button");
  // //<button></button>
  // choice1.textContent = Game.choices[0][0];
  // //<button>JavaScript</button>
  // document.querySelector("#choices").appendChild(choice1);
  // //appends the first btn to #choices location
  // var choice2 = document.createElement("button");
  // choice2.textContent = Game.choices[0][1];
  // document.querySelector("#choices").appendChild(choice2);

  // var choice3 = document.createElement("button");
  // choice3.textContent = Game.choices[0][2];
  // document.querySelector("#choices").appendChild(choice3);

  // var choice4 = document.createElement("button");
  // choice4.textContent = Game.choices[0][3];
  // document.querySelector("#choices").appendChild(choice4);

  for(var i=0;i<Game.choices[questionIndex].length;i++){
    var choice1 = document.createElement("button");
  //<button></button>
  choice1.textContent = Game.choices[questionIndex][i];
  //<button>JavaScript</button>
  choice1.setAttribute("user-choice", Game.choices[questionIndex][i])
  //<button user-choice="Javascript">JavaScript</button>
  choice1.setAttribute("class", "buttonStyle");
  //<button user-choice="Javascript" class="buttonStyle">JavaScript</button>
  document.querySelector("#choices").appendChild(choice1);

  

  }

//document.querySelector(".buttonStyle").onclick= choicesClicked();
  console.log(Game.choices[0][0]);
  console.log(Game.choices[0][1]);
  console.log(Game.choices[0][2]);
  console.log(Game.choices[0][3]);
  document.querySelector("#answer").textContent=Game.answer[questionIndex];
  console.log(Game.answer[0]);

  //  function choicesClicked(){
  //    alert("clicked");
  //  }
}

//questiongame data
// var question = [
//     new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
//     new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
//     new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
// ];

var Game=
{
  question:["Hyper Text Markup Language Stand For?", "Which language is used for styling web pages?"],
  choices:[
             ["JavaScript", "XHTML","CSS", "HTML"],
             ["HTML", "JQuery", "CSS", "XML"],

          ],
  answer: ["HTML","CSS"]

}

//function call for renderQuestion
//renderQuestion();


//function when user onclicks (.buttonStyle) a choice
//stop the time
//evaluate if ans wrong or right
//if wrong, decrement time
//if right display correct

//update questionIndex++
//go to the next card
//call renderQuestion





// ***** TEST CODE ******
// function countDown() {
//     var timeLeft = 35; setInterval(function () {
//     timeLeft--;
//     timer.textContent = timeLeft + " seconds remaining!";
//         if (timeLeft >= 0) {
//             span = document.getElementById("timer");
//             span.innerHTML = timeLeft;
//         }
//       if (timeLeft === 0) {
//           alert("Time is out, proceed to end screen");
//         clearTimeout(timerId);
//         //GO TO END SCREEN
//         quizScreen.classList.add("hide");
//         endScreen.classList.remove("hide");
//         console.log("time is out, go to end screen.");
//       }
    
//     }, 1000) };

//     document.getElementById(quizScreen).click(function(){
//         countDown();
//     });
    

// ****** TEST CODE *****
// function startTimer(){
//     var counter = 5;
//     setInterval(function() {
//       counter--;
//       if (counter >= 0) {
//         span = document.getElementById("count");
//         span.innerHTML = counter;
//       }
//       if (counter === 0) {
//           alert('sorry, out of time');
//           clearInterval(counter);
//       }
//     }, 1000);
//   }
  
//   $("#startClock").click(function(){
//       startTimer();
//   });





// RUN QUIZ (try to not use a for loop as it will get very complicated with the nexting. instead, try to use the index method we discussed)¸
var questions = [];
var answerOptions =[]
// END SCREEN
document.getElementById("score").textContent = "asdfghjkjhgfdsdfghjk";



// ****OBJECTIVE: CREATE QUESTION AND ANSWER ARRAY

//// *****TEST CODE******

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
// END SCREEN }
