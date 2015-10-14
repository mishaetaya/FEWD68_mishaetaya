
//initialization
//==============================================================================================================
var userchoice, botchoice, botscore, totalbotscore, userscore, totaluserscore, winner, tie, tietotalscore;
var choices = ['Foot', 'Cockroach', 'Nuclear Bomb'];

userscore = 0;
totaluserscore =0;
botscore = 0;
totalbotscore = 0;
tie = 0;
tietotalscore = 0;



//click event listening for the selection of the user's choice and comparison against bot
//==============================================================================================================
$(".foot").click(function(){
	userchoice = 'Foot'; 
	initializegame();
	botplaying();

});

$(".cockroach").click(function(){
	userchoice = 'Cockroach'; 
	initializegame();
	botplaying();
});

$(".nuclear_bomb").click(function(){
	userchoice = 'Nuclear Bomb'; 
	initializegame();
	botplaying();
});



//function that manages comparison of user choice to bot choice
//==============================================================================================================

function botplaying(){
	botchoice = choices[Math.floor(Math.random() * 3)];

	if (botchoice == 'Foot' && userchoice == 'Cockroach'){ winner = 'bot'; }
	
	else if (botchoice == 'Foot' && userchoice == 'Nuclear Bomb') {winner = 'user'; }
	
	else if (botchoice == 'Nuclear Bomb' && userchoice == 'Foot') {winner = 'bot'; }
	else if (botchoice == 'Nuclear Bomb' && userchoice == 'Cockroach') {winner = 'user'; }

	else if (botchoice == 'Cockroach' && userchoice == 'Nuclear Bomb') {winner = 'bot'; }
	else if (botchoice == 'Cockroach' && userchoice == 'Foot') {winner = 'user'; }
	
	else if(botchoice == userchoice){winner = 'tie';}

	$(".Yourselection span").append(userchoice);
	$(".Botselection span").append(botchoice);	
	$(".winner span").append(winner);

	if (winner == 'bot') {
		botscore = 1;
		totalbotscore = totalbotscore + 1;
		$(".botscore").empty();
		$(".botscore").append(totalbotscore);	
	}

	else if (winner == 'user'){
		userscore = 1;
		totaluserscore = totaluserscore + 1;
		$(".yourscore").empty();
		$(".yourscore").append(totaluserscore);	
	}

	else if(winner = 'tie'){
		tie = 1;
		tietotalscore = tietotalscore + 1;
		$(".ties").empty();
		$(".ties").append(tietotalscore);
	}

$(".scorebutton").click(function(){
	$(".botscore").empty();
	$(".botscore").append(0);	
	$(".yourscore").empty();
	$(".yourscore").append(0);	
	$(".ties").empty();
	$(".ties").append(0);

	totaluserscore =0;
	totalbotscore = 0;
	tietotalscore = 0;

	initializegame();

});

}


//function that initializes each game - i.e. clears the results from the previous game
//==============================================================================================================
function initializegame(){

	$(".Yourselection span").empty();
	$(".Botselection span").empty();	
	$(".winner span").empty();

}

