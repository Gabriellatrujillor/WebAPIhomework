// FAILED OBJECTIVES I NEED HEEEEEELLLLPPPP:
// QUESTIONS, CHOICES AND ANSWERS DISPLAYING ON WINDOW BUT NOT RUNNING THROUGH FOR LOOP PROPERLY
    // GAME.CHOICES PROPERTY LENGTH IS UNDEFINED
// NEED TO COLLECT ANSWER DATA AND HIGH SCORE TO LOCAL STORAGE AND DISPLAY RESULTS IN endScreen element
  // UTILIZE GET ITEM METHOD = HIGH SCORE


// VARIABLES DECLARED!
var startButton = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");

// COLLECTING ANSWERS VAR, SELECTING DIV ID = ANSWER / 25 ***TESTING****
// var answerSub = document.getElementById('answer')

// START BUTTON EVENT LISTENER AND FUNCTION TO NEXT SCREEN
startButton.addEventListener("click", function () {
  console.log("start button clicked");
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  console.log("begin timer countdown: ");
  countDown();
  renderQuestion();
});

// TIMER VARIABLES DECLARED
var timeLeft = 35;
var timer = document.getElementById("timer");
var timerId;

// *** I THINK THIS IS WHAT'S MAKING THE ARRAY NOT RUN PROPERLY???
var questionIndex= 0;

// TIMER FUNCTIONS
function startTime(){
  timerId = setInterval(countDown, 1000);
}

function stopTime(){
  clearInterval(timerId);


}

function resetTime(){
  timeLeft=35;

}

// NOT RUNNING INTO NEGATIVES BUT NOT CUTTING TO END SCREEN ONCE COMPLETE
function reduceTime(){
  timeLeft= timeLeft-5;

}

function countDown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);
    //GO TO END SCREEN
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    console.log("Done already? Go to the end screen!");
  } else {
    timer.textContent = timeLeft + " seconds remaining!";
    timeLeft--;
  }

}


// WHEN EVENT OF CHOICE SELECTED IT RUNS IF OR ELSE STATEMENT
function choicesClicked(e){
  stopTime();
  console.log("stop time")
  console.log(timeLeft);
  console.log(event.target.textContent)

  if(event.target.textContent== Game.answer[questionIndex]){
    console.log("Ayyy you got it right!")
  }
  else{
    //decrement time
    reduceTime();
    console.log("WRONG!! You lose 5 seconds");
  }

  questionIndex++;
  renderQuestion();
}


function checkAnswer() {
  Game.choices = document.getElementsByName("")
}


// RENDER QUESTIONS
function renderQuestion(){
  console.log("starting time")
  startTime();
  document.querySelector("#quiz-screen").setAttribute("class","");
 // countDown();
 console.log(Game);
  console.log(Game.question[0]);
  document.querySelector("#question-title").textContent=Game.question[questionIndex];
  

  // GAME CHOICES FOR LOOP + CREATING ON CLICK BUTTONS
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
  // CONSOLE LOG CONFIRMING
  // console.log(Game.choices[0][0]);
  // console.log(Game.choices[0][1]);
  // console.log(Game.choices[0][2]);
  // console.log(Game.choices[0][3]);
  document.querySelector("#answer").textContent=Game.answer[questionIndex];
  console.log(Game.answer[0]);
}

// GAME VARIABLE WITH QUESTIONS, CHOICES AND ANSWERS
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