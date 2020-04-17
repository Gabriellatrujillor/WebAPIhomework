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
var timerId;
var questionIndex=0;
// DISPLAY TIMER FUNCTION


// ****OBJECTIVE: KEEP TIMER FROM RUNNING WITHOUT PRESSING START

// ***** ORIGINAL TIMER FUNCTION********
function startTime(){
  timerId = setInterval(countDown, 1000);

}

function stopTime(){
  clearInterval(timerId);

}

function resetTime(){
  timeLeft=35;

}

function reduceTime(){
  timeLeft= timeLeft-15;

}
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

function choicesClicked(e){
  stopTime();
  console.log("stop time")
  console.log(timeLeft);
  console.log(event.target.textContent)

  if(event.target.textContent== Game.answer[questionIndex]){
    console.log("good job!")
  }
  else{
    //decrement time
    reduceTime();
    console.log("YOU ARE WRONG you lose 15s");
  }

  questionIndex++;
  renderQuestion();
}

//function to render the question
function renderQuestion(){
  console.log("starting time")
  startTime();
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

  document.querySelector("#choices").textContent="";

  for(var i=0;i<Game.choices[questionIndex].length;i++){
    var choice1 = document.createElement("button");
  //<button></button>
  choice1.textContent = Game.choices[questionIndex][i];
  //<button>JavaScript</button>
  choice1.setAttribute("user-choice", Game.choices[questionIndex][i])
  //<button user-choice="Javascript">JavaScript</button>
  choice1.setAttribute("class", "buttonStyle");
  //<button user-choice="Javascript" class="buttonStyle">JavaScript</button>
  choice1.setAttribute("onclick", "choicesClicked()");
  document.querySelector("#choices").appendChild(choice1);

  

  }







  console.log(Game.choices[0][0]);
  console.log(Game.choices[0][1]);
  console.log(Game.choices[0][2]);
  console.log(Game.choices[0][3]);
  document.querySelector("#answer").textContent=Game.answer[questionIndex];
  console.log(Game.answer[0]);

  //function when user onclicks (.buttonStyle) a choice to call choicesClicked();




//stop the time
//evaluate if ans wrong or right
//if wrong, decrement time
//if right display correct

//update questionIndex++
//go to the next card
//call renderQuestion
   
}

//questiongame data
// var question = [
//     new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
//     new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
//     new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
// ];

var Game=
{
  question:["Hyper Text Markup Language Stand For?", "Which language is used for styling web pages?", "Which is not a JavaScript Framework?"],
  choices:[
             ["JavaScript", "XHTML","CSS", "HTML"],
             ["HTML", "JQuery", "CSS", "XML"],
             ["Python Script", "JQuery","Django", "NodeJS"]

          ],
  answer: ["HTML","CSS","Django"]

}