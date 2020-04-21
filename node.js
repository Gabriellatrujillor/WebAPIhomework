// FAILED OBJECTIVES I NEED HEEEEEELLLLPPPP:
    // GAME.CHOICES PROPERTY LENGTH IS UNDEFINED
// NEED TO COLLECT ANSWER DATA AND HIGH SCORE TO LOCAL STORAGE AND DISPLAY RESULTS IN endScreen element
  // UTILIZE GET ITEM METHOD = HIGH SCORE
  //localstorage


// VARIABLES DECLARED!
var startButton = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");

// COLLECTING ANSWERS VAR, SELECTING DIV ID = ANSWER / 25 ***TESTING****
// var answerSub = document.getElementById('answer')

// START BUTTON EVENT LISTENER AND FUNCTION TO NEXT SCREEN
startButton.addEventListener("click", function () {
  timerLeft=35;
  timer = document.getElementById("timer");
  timerId;
 score=0;
scorearray=JSON.parse(localStorage.getItem("scores"));

  console.log("start button clicked");
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  console.log("begin timer countdown: ");
  countDown();
  renderQuestion();
  document.querySelector("#end-screen").setAttribute("class","hide");
});

// TIMER VARIABLES DECLARED
var timeLeft = 35;
var timer = document.getElementById("timer");
var timerId;
var score=0;
var scorearray=JSON.parse(localStorage.getItem("scores"));

// Checks to see if we have any todos in localStorage
// If we do, set the local insideList variable to our todos
// Otherwise set the local insideList variable to an empty array
if (!Array.isArray(scorearray)) {
  scorearray = [];
}


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
    endGame();
   
  } else {
    timer.textContent = timeLeft + " seconds remaining!";
    timeLeft--;
  }

}



function endGame(){
  quizScreen.classList.add("hide");
  endScreen.classList.remove("hide");
  console.log("Done already? Go to the end screen!");
   //tell user score
    //ask user for name
    //add it to the array
   //display out all users
  //  <form>
  //   <input type="text">
  //   <input type="submit" value="save">
  // </form>



 var input= document.createElement("input");
 input.setAttribute("class", "userform");
 var savebtn= document.createElement("button");
 savebtn.setAttribute("class", "save");
 savebtn.setAttribute("onClick", "saveUser()");
 savebtn.innerHTML="Save";


 document.querySelector("#end-screen").appendChild(input);
 document.querySelector("#end-screen").appendChild(savebtn);

 








}

function saveUser(e){
  event.preventDefault();
  var username =document.querySelector(".userform").value;
  var userscore=score;
  var userdata={
    name:username,
    score:userscore
  }
  console.log(userdata);
  scorearray.push(userdata);
  //set to local storage
  localStorage.setItem("scores", JSON.stringify(scorearray));
  displayScore();
}



function displayScore(){
  document.querySelector("#end-screen").setAttribute("class","show");
  scorearray=JSON.parse(localStorage.getItem("scores"))
  console.log(scorearray)
  var highscore=0;
  var highscoreindex=0;
  for(var i=0;i<scorearray.length;i++){
    if(scorearray[i].score>highscore){
      highscoreindex=i;
      highscore=scorearray[highscoreindex].score;

    }
    var div=document.createElement("div");
    div.setAttribute("class", "userboard");
    div.textContent= scorearray[i].name+ " "+scorearray[i].score;
    document.querySelector("#end-screen").appendChild(div);
  }

  var p=document.createElement("p");
  p.textContent= "HIGHSCORE: "+scorearray[highscoreindex].score +" || " +scorearray[highscoreindex].name;
  document.querySelector("#end-screen").appendChild(p);
  var startoverbtn= document.createElement("button");
  startoverbtn.setAttribute("id", "start-quiz");
  startoverbtn.textContent="Start Over";
  document.querySelector("#end-screen").appendChild(startoverbtn);

}


// WHEN EVENT OF CHOICE SELECTED IT RUNS IF OR ELSE STATEMENT
function choicesClicked(e){
  stopTime();
  console.log("stop time")
  console.log(timeLeft);
  console.log(event.target.textContent)

  if(event.target.textContent== Game.answer[questionIndex]){
    console.log("Ayyy you got it right!")
    score++;
    //display score on html (user document.queryselector)
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

  //so if we are at the end of the game, render out endgame function
  //if not continue below
  //we still have questions and do all the stuff below
  if(questionIndex < Game.question.length)
  {console.log("starting time")
  startTime();
  document.querySelector("#quiz-screen").setAttribute("class","");
 // countDown();
 console.log(Game);
  console.log(Game.question[questionIndex]);
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
  console.log(Game.answer[questionIndex]);


  }
  else{
    alert("GAME IS OVER");
    //go to endgame screen
    endGame();
   
  }
  
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