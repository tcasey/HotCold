$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(400);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(400);
  	});

  	/*Variable Declarations*/

  	var randomNumber;
  	var counter = 0;

  	/*generates a random number for game*/
  	var randomNumberGenerator = function() {
  		return Math.floor((Math.random()* 100) + 1);
  	};

  	/*creates a new game*/
  	var newGame = function() {
  		randomNumber = randomNumberGenerator();
  		counter = 0;
  		GlobalRandomNumber = randomNumber;
  		$('#count').text(counter);
  		$('#guessList').text('');
  		$("#feedback").text('Hot & Cold');
  	};

  	newGame();

  	$("#guessButton").on("click", function() {
  		event.preventDefault(); // prevent page reload on event
  		var userGuess = Number(document.getElementById("userGuess").value);  //reference to input text field

	  	if (userGuess <= 100 && isNaN(userGuess) === false) {
	  		$('#guessList').append(userGuess + " ");
        // var color = $("#feedback").css('color');
        $('#guessList').css('color', '#999');
	  		counter++; // increment global counter
	  	}

  		if (userGuess == randomNumber) {
  			$("#feedback").text('winner!!');
        $("#feedback").css('color', '#bdb380');
	  		} else if (userGuess > 100 || isNaN(userGuess)) {
	  			$("#feedback").text('enter a number from 1 to 100');
          $("#feedback").css('color', '#fff');

	  		}
	  			else if (userGuess > (randomNumber + 50) || userGuess < (randomNumber - 50)) {
	  			$("#feedback").text('icecold');
          $("#feedback").css('color', 'rgb(48, 63, 159)');

	  		} else if (userGuess > (randomNumber + 30) || userGuess < (randomNumber - 30)) {
	  			$("#feedback").text('cold');
          $("#feedback").css('color', 'rgb(3, 169, 244)');

	  		} else if (userGuess > (randomNumber + 15) || userGuess < (randomNumber - 15)) {
	  			$("#feedback").text('warm');
          $("#feedback").css('color', 'rgb(255, 152, 0)');


	  		} else if (userGuess > (randomNumber + 5) || userGuess < (randomNumber - 5)) {
	  			$("#feedback").text('hot');
          $("#feedback").css('color', 'rgb(244, 67, 54)');


	  		} else if (userGuess > (randomNumber + 1) || userGuess < (randomNumber - 1)) {
	  			$("#feedback").text('very hot');
          $("#feedback").css('color', 'rgb(211, 47, 47)');

	  		}

	  		$('#userGuess').val(''); //resets input field
	  		$('#count').text(counter); //updates counter div

  	});

  	$('.new').on("click", function() {  // calls newGame function on click event
  		newGame();

  	});

});
