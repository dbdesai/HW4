
var wins = 0;
var losses = 0;
var score = 0;

var winningNumber = Math.floor((Math.random() * 120) + 19);

// Rando value assigned to crystals - 1 to 12
var redCrystal = Math.floor((Math.random() * 12) + 1);
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var yellowCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1);



$(document).ready(function(){
// Crystal Buttons
$('#red').click(function(){
			score = score + redCrystal;
			result();
		})

$('#blue').click(function(){
			score = score + blueCrystal;
			result();	
		})

$('#yellow').click(function(){
			score = score + yellowCrystal;
			result();
		})

$('#green').click(function(){
			score = score + greenCrystal;
			result();
		})
		// Display winning number HTML
		$("#randomNumber").append(winningNumber);

		// Display score in HTML
		$("#score").append(score);

});


// Update HTML
function updateScore(){
	$('#score').empty();
	$('#score').append(score);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#score').replaceAll(score);
}

// Restart game. Reset random numbers
function restart(){
	score = 0;
	winningNumber = Math.floor((Math.random() * 120) + 19);
	$("#randomNumber").empty();
	$("#randomNumber").append(winningNumber);
	redCrystal = Math.floor((Math.random() * 12) + 1);
	blueCrystal = Math.floor((Math.random() * 12) + 1);
	yellowCrystal = Math.floor((Math.random() * 12) + 1);
	greenCrystal = Math.floor((Math.random() * 12) + 1);
	updateScore();
}

function result (){
	if (score == winningNumber) {
			wins = wins + 1;
			alert('YOU DID IT SON');
			restart();
			}			
		else if (score > winningNumber) {
			losses = losses + 1;
			alert('"You Lose Agian, Mutt" - Klaus (from the chipmonk adventure)');
			restart();
			}
		else {
			updateScore();
			}
}
