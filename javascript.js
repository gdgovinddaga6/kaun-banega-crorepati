var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick =
function(){
if(playing == true){
location.reload(); 
}else{
playing = true;
score = 0;
document.getElementById("scorevalue").innerHTML =score;
show("timeremaining");
timeremaining = 20 + Math.round(9*Math.random());
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
hide("gameOver");
document.getElementById("startreset").innerHTML =
"Reset Game";
startCountdown();
generateQuestions();
}
}
for(i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
if(playing == true){
if(this.innerHTML == correctAnswer){
score++;
document.getElementById("scorevalue").innerHTML = score;

hide("wrong");
show("correct");
setTimeout(function(){
hide("correct");
}, 1000);

generateQuestions();
}else{
score--;
document.getElementById("scorevalue").innerHTML = score;
generateQuestions();
hide("correct");
show("wrong");
setTimeout(function(){
hide("wrong");
}, 1000);

}
}
}
}

function startCountdown(){
action = setInterval(function(){
timeremaining -= 1;
document.getElementById("timeremainingvalue").innerHTML =timeremaining;
if(timeremaining == 0){
stopCountdown();
show("gameOver");
if(score>0){


document.getElementById("gameOver").innerHTML ="<p>Could Do Better!</p><p>Your score is " + score + ".</p>";
}
if(score<=0){
	document.getElementById("gameOver").innerHTML ="<p>You Lose</p><p>Your score is " + score + ".</p>";
}
hide("timeremaining");
hide("correct");
hide("wrong");
playing = false;
document.getElementById("startreset").innerHTML = "StartGame";
}
}, 1000);
}
function stopCountdown(){
clearInterval(action);
}
function hide(Id){
document.getElementById(Id).style.display = "none";
}
function show(Id){
document.getElementById(Id).style.display = "block";
}
function generateQuestions(){
var x = 1+ Math.round(9*Math.random());
var y = 1+ Math.round(9*Math.random());
correctAnswer = x*y;
document.getElementById("question").innerHTML = x +
"x" + y;
var correctPosition = 1+ Math.round(3*Math.random());
document.getElementById("box"+correctPosition).innerHTML =
correctAnswer; 

var answers = [correctAnswer];
for(i=1; i<5; i++){
if(i != correctPosition) {
var wrongAnswer;
do{
wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random())); 
}while(answers.indexOf(wrongAnswer)>-1)
document.getElementById("box"+i).innerHTML =
wrongAnswer;
answers.push(wrongAnswer);
}
}
}