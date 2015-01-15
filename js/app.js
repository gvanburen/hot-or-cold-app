
$(document).ready(function(){
	
	var randomNumber = Math.round(Math.random() * 100);
	console.log(randomNumber);
	var userGuessCounter = 0

	$('#guessButton').click(function(){
		var userGuess = $('#userGuess').val();
		if (isNaN(userGuess)) {
			alert('Please enter a valid number');
		} else {
			guessCounter();
			letsPlay();
		}
	});

	function guessCounter() {
		userGuessCounter += 1;
		$('#count').html(userGuessCounter);
	};

	function letsPlay() {
		var userGuess = $('#userGuess').val();
		var prevGuess = $('<li>' + userGuess + '</li>');
		var feedback = function(guessFB) {$('#feedback').html(guessFB)};

		$('#guessList').append(prevGuess);

		if (userGuess == randomNumber) {
 			feedback("You got it!");
 		} else if (Math.abs(randomNumber - userGuess) <= 10) {
 			feedback("You're hot");
 		} else if (Math.abs(randomNumber - userGuess) <= 20) {
 			feedback("You're warm");
 		} else if (Math.abs(randomNumber - userGuess) <= 30) {
 			feedback("You're cold");
 		} else {
 			feedback("You're freezing!")
 		}
 	};

	$('.new').click(function(){
		letsPlay();
	})

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});



