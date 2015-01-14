
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$('.new').click(function(){
  		newGame();
  	});
});

function newGame() {
	var randomNumber = Math.random();
		randomNumber *= 100;
		randomNumber = Math.round(randomNumber);
	var userGuessCounter = 0;
	
	$('#count').html(userGuessCounter);
	$('#userGuess').val('');
	$('#guessList').html('');

	$('#guessButton').click(function(){
		var newGuess = $('#userGuess').val();
		if (isNaN(newGuess)) {
			alert('Please enter a valid number');
		} else {
			checkYourGuess();
		}
	});

	function checkYourGuess(){
		var userGuess = $('#userGuess').val();
			userGuess = +userGuess;
		var prevGuess = $('<li>' + userGuess + '</li>')

		userGuessCounter++;
		$('#userGuess').val('');
		$('#count').html(userGuessCounter);
		$('#guessList').append(prevGuess);
  		
  		if (userGuess == randomNumber) {
  			alert("You got it!");
  			$('#userGuess').val('');
			$('#guessList').html('');
			newGame();
  		} else {
  		// if (userGuess != randomNumber) {
			if (Math.abs(randomNumber - userGuess) <= 10) {
				alert("You're hot");
			} else if (Math.abs(randomNumber - userGuess) <= 20) {
				alert("You're warm");
			} else {
				alert("You're cold");
			}
		};
	};	
};


