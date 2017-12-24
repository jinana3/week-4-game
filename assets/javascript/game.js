$( document ).ready(function(){
//global variables should include 
//wins
//losses
//NumberToMatch
//YourScore

var wins = 0;
var losses = 0;

var NumberToMatch = 0;
var YourScore = 0;
var cryone = 0;
var crytwo = 0;
var crythree = 0;
var cryfour = 0;

//----------------------------------------------------------
function getRandomIntInclusive(min, max) { //copied from MDN web docs
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
  //The maximum is inclusive and the minimum is inclusive 
}

function  newGame(){
	//get a number to match
	NumberToMatch = getRandomIntInclusive(19, 120);
	console.log(NumberToMatch);

	//reset yourscore to 0
	YourScore = 0;

	//random crystal one value
	cryone = getRandomIntInclusive(1,12);
	crytwo = getRandomIntInclusive(1,12);
	crythree = getRandomIntInclusive(1,12);
	cryfour = getRandomIntInclusive(1,12);

	$("#NumberToMatch").html("<h3>" + NumberToMatch+ "</h3>");
	$("#YourScore").html("<h3>" + YourScore + "</h3>");
}

function win(){
	alert("you won!");
	wins++;
	$("#wins").text(wins);
	newGame();
}

function  lose(){
	alert("number too high! you lose");
	losses++;
	$("#losses").text(losses);
	newGame();
}

//---------------------------------------------------------------

newGame();

$('#cryone').on ('click', function(){
    YourScore = YourScore + cryone;
    $('#YourScore').html("<h3>" + YourScore + "</h3>"); 
          //sets win/lose conditions
        if (YourScore == NumberToMatch){
          	win();
        }
        else if (YourScore > NumberToMatch){
          	lose();
        }   
  })  

$('#crytwo').on ('click', function(){
    YourScore = YourScore + crytwo;
    $('#YourScore').html("<h3>" + YourScore + "</h3>"); 
          //sets win/lose conditions
        if (YourScore == NumberToMatch){
          	win();
        }
        else if (YourScore > NumberToMatch){
          	lose();
        }   
  })  

$('#crythree').on ('click', function(){
    YourScore = YourScore + crythree;
    $('#YourScore').html("<h3>" + YourScore + "</h3>"); 
          //sets win/lose conditions
        if (YourScore == NumberToMatch){
          	win();
        }
        else if (YourScore > NumberToMatch){
          	lose();
        }   
  })  

$('#cryfour').on ('click', function(){
    YourScore = YourScore + cryfour;
    $('#YourScore').html("<h3>" + YourScore + "</h3>"); 
          //sets win/lose conditions
        if (YourScore == NumberToMatch){
          	win();
        }
        else if (YourScore > NumberToMatch){
          	lose();
        }   
  })  
})


