var randomNumber1 = Math.floor((Math.random() * 6)) + 1;//random number between 1-6
var randonDiceImageSource1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];


var randomNumber2 = Math.floor((Math.random() * 6)) + 1;//random number between 1-6
var randonDiceImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];


function diceroll()
{
  image1.setAttribute("src",randonDiceImageSource1);
  image2.setAttribute("src",randonDiceImageSource2);
  if (randomNumber1>randomNumber2)
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
  else if(randomNumber1<randomNumber2)
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  else
  document.querySelector("h1").innerHTML = "Draw";
}
