$(document).ready(function() {
 
	//Set number counter to 30
	var number = 30;

	//Variable that holds the interval
	var interval;

	//Start timer to begin quiz
	function startQuiz(){
		alert("Click OK to Start");
		run();
		//$('start').on("click", run);
	}

	startQuiz();
	

	//The function to set the interval

	function run(){
		interval = setInterval(decrement, 1000);
		if (number == 0){
				clearTimeout(number);
			}
	}

	//The Decrement Function
	function decrement(){
		//decrease number by one
		number--;

		//show the number in the timer tag
		$("#timer").html("<h2>" + number + "<h2>");

		//If the number hits zero
		if (number === 0){
			//Stop the function
			stop();
			//Give notice 
			alert("Sorry Times Up!");
			//Stop the function
		}

	}

	function stop(){
		//clear interval
		clearInterval(interval);

	}

	//Declare Answers
	var firstQuest = "batman";

	var secondQuest = "wonderWoman";

	//Reset timer for correct answer

	/*if ($("#batman").attr("checked", true) === true){
		clearTimeout(number);
		alert("Correct! Your Timer has Reset!");
		run();

	}else{
		//alert("Please Try again");
	}*/


	//Execute Run Function
	//run();








});//END DOCUMENT.READY