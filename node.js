

// VARIABLES DECLARED!
var startButton = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");

// START BUTTON EVENT LISTENER AND FUNCTION TO NEXT SCREEN
startButton.addEventListener("click", function () {
  timerLeft=60;
  timer = document.getElementById("timer");
  timerId;
  score=0;
 
  // console.log("start button clicked");
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  // console.log("begin timer countdown: ");
  countDown();
  renderQuestion();
  document.querySelector("#end-screen").setAttribute("class","hide");
});

// TIMER VARIABLES DECLARED
var timeLeft = 60;
var timer = document.getElementById("timer");
var timerId;
var score=0;
var scorearray=JSON.parse(localStorage.getItem("scores"));

// Checks to see if we have any arrays in localStorage
// If we do, set the local insideList variable to our array
// Otherwise set the local insideList variable to an empty array
if (!Array.isArray(scorearray)) {
  scorearray = [];
}

var questionIndex= 0;

// TIMER FUNCTIONS
function startTime(){
  timerId = setInterval(countDown, 1000);
}

function stopTime(){
  clearInterval(timerId);


}

function resetTime(){
  timeLeft=60;

}

function reduceTime(){
  timeLeft= timeLeft-5;

}

function countDown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);
    endGame();
   
  } else {
    timer.textContent = timeLeft + " seconds remaining!";
    timeLeft--;
  }

}




function endGame(){
 
  quizScreen.classList.add("hide");
  endScreen.classList.remove("hide");
  // console.log("Your quest is complete");
  document.querySelector(".userform").value= "";

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
  localStorage.setItem("scores", JSON.stringify(scorearray));
  displayScore();
}



function displayScore(){
  document.querySelector("#end-screen").setAttribute("class","show");
  scorearray=JSON.parse(localStorage.getItem("scores"));
  if (!Array.isArray(scorearray)) {
    //if we have no scores
    scorearray = [];
    document.querySelector("#end-screen").textContent="Your Quest is complete";

  }else{
    //if there are scores, show the user
  console.log(scorearray)
  var highscore=0;
  var highscoreindex=0;
  document.querySelector("#usersResult").innerHTML="";
  for(var i=0;i<scorearray.length;i++){
    if(scorearray[i].score>highscore){
      highscoreindex=i;
      highscore=scorearray[highscoreindex].score;

    }
    var div=document.createElement("div");
    div.setAttribute("class", "userboard");
    div.textContent= scorearray[i].name+ " scored "+scorearray[i].score;
    document.querySelector("#usersResult").appendChild(div);
  }
  //empty highscore
  document.querySelector("#highScore").innerHTML="";
  var p=document.createElement("p");
  p.setAttribute("id","resultStyle");
  p.textContent= "Champion Ranking: "+scorearray[highscoreindex].name +" at level " +scorearray[highscoreindex].score;
  //document.querySelector("div").appendChild(p);
  document.querySelector("#highScore").appendChild(p);
  

  }
 

}


document.querySelector("#start-over").addEventListener( "click", function(event){
  event.preventDefault();
    //take back to first screen
  //index set to zero
  questionIndex= 0;
  console.log("INDEX: "+questionIndex);
  resetTime();
  console.log("TIME: "+timeLeft);
  score = 0;
  console.log("SCORE: "+score);

  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  console.log("begin timer countdown: ");
  countDown();
  renderQuestion();
  document.querySelector("#end-screen").setAttribute("class","hide");

  //timer set back
  //answer set back
  })

document.querySelector("#clear").addEventListener( "click", function(event){
event.preventDefault();
clearScores();
})

function clearScores() {
  window.localStorage.removeItem("scores");
  displayScore();


}


// WHEN EVENT OF CHOICE SELECTED IT RUNS IF OR ELSE STATEMENT
function choicesClicked(e){
  stopTime();
  console.log("stop time")
  console.log(timeLeft);
  console.log(event.target.textContent)

  if(event.target.textContent== Game.answer[questionIndex]){
    console.log("Correct. Level up!")
    score++;
     document.querySelector("#answer").textContent="Correct! Level up";
  }
  else{
    //decrement time
    reduceTime();
    console.log("Wrong. You've lost 5 seconds and you should be ashamed of yourself");
    document.querySelector("#answer").textContent="You've chosen poorly. -5 HP";
  }

  questionIndex++;
  setTimeout(renderQuestion, 1500)
  
}


function checkAnswer() {
  Game.choices = document.getElementsByName("")
}


// RENDER QUESTIONS
function renderQuestion(){
  document.querySelector("#answer").innerHTML="";

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
  console.log(Game.answer[questionIndex]);


  }
  else{
        endGame();
   
  }
  
}

var Game=
{
  question:["A wise old man gives you a weapon to protect yourself on your journey. Which weapon is best for traversing these dangerous lands?", "You come across a young maiden asking you to deliver a letter to her fiance on the other side of the map. What do you do?", "There are rumors of a dragon terrorizing the local townspeople. How do you handle the situation?"],
  choices:[
             ["HA! A broadsword of course!", "A shank- I mean dagger.","A bow made from the eldertree in the North", "My fists are the only weapon I need"],
             ["Accept her quest! For I am a valiant protector of these lands", "Ain't nobody got time for that!", "I will deliver this message for you, but it'll cost you...one million gold pieces", "Run away!!"],
             ["When it lands I will wildly hack at it until it flies away again.", "Find its den, and when it goes to sleep stab it with your shan- I mean dagger!!","Shoot it down with a rare dragonglass arrow you found on the floor", "Ignore the villagers' cries for help because it's none of your business"]

          ],
  answer: ["A bow made from the eldertree in the North","Accept her quest! For I am a valiant protector of these lands", "Shoot it down with a rare dragonglass arrow you found on the floor"]

}