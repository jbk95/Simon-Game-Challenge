
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*3+1);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  const audio = new Audio("sounds/" + randomChosenColour + ".mp3" );
  audio.play();
  

}
