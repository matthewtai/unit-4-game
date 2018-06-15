$(document).ready(function() {

var numguess = 0;
var totalscore = 0;
var numwins = 0;
var numlosses = 0;
var redgem = 0;
var greengem = 0;
var purplegem = 0 ;
var bluegem = 0;
var winsound = new Audio('assets/win.wav');
var losesound = new Audio('assets/lose.wav');

var gamestart = {
    
	randomNumber: function(iMin,iMax) {
		var rannum = Math.floor(Math.random() * (iMax - iMin + 1) + iMin); 
		return rannum ;
	} ,

    play: function() {
		numguess = gamestart.randomNumber(19, 120) ;
		totalscore	= 0;	
		
		$("#myscore").html("Your Total Score is: " + totalscore);
		$("#mynumber").html("The Number to Match is: " + "<strong>"+numguess+"</strong>");
		
		
		redgem = gamestart.randomNumber(1, 12) ;
		greengem = gamestart.randomNumber(1, 12) ;
		purplegem = gamestart.randomNumber(1,12) ;
		bluegem = gamestart.randomNumber(1, 12) ;
	} , 
  	
	checkScore: function() {
		$("#myscore").html("Your Total Score is: " + totalscore);
		
		if (totalscore > numguess) {
			numlosses += 1 ;
			$("#linkpic").html('<img src="assets/images/linkdead.jpg" style="border-radius: 60%;" width="225">');
			$("#numlosses").html("<b>Losses: </b>" + numlosses);
			$("#comments").html("Sorry! Please Try Again.");
			losesound.play();
			alert("Sorry! Please Try Again!");
			gamestart.play();
		}
		
		if (totalscore == numguess) {
			numwins += 1 ;
			$("#numwins").html("<strong>Wins:  </strong>" + numwins);
			$("#linkpic").html('<img src="assets/images/linkhappy.jpeg" style="border-radius: 50%;" width="225">');
			$("#comments").html("You Win!");
			winsound.play();
			alert("Congratulations! You Win!");
			gamestart.play();
		} 
	} , 
} ; 


    gamestart.play();
	
	$("#redgem").on("click", function() {
       totalscore += redgem ;
	   gamestart.checkScore() ; 
	}); 

	$("#greengem").on("click", function() {
       totalscore += greengem ; 
	   gamestart.checkScore() ;
    }); 
	
	$("#purplegem").on("click", function() {
	   totalscore += purplegem ; 
	   gamestart.checkScore() ;
    });  
	
	$("#bluegem").on("click", function() {
       totalscore += bluegem;
	   gamestart.checkScore() ;
    }); 

}); 
