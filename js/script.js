// variables

// coding

//GLOBAL VARIABLES
/* global $ */
function computerminds(){
    
    var randomChoice = Math.random();

    if(randomChoice < 0.333333){ 
       $("#computerChoice").text("rock");
    }
    else if(randomChoice > 0.333333 && randomChoice < 0.666666){
        $("#computerChoice").text("paper");
    }
    else if(randomChoice > 0.666666 && randomChoice < 0.999999){
        $("#computerChoice").text("scissors");
    }
        console.log(randomChoice);
}

function results(){
    var inputs = $("#input").val();
    // var paper= $("#computerChoice").text("paper");
    // var rock= $("#computerChoice").text("rock");
    // var scissors= $("#computerChoice").text("scissors");
    var computerChoice =$("#computerChoice").text();

    if(computerChoice==="paper" && inputs==="paper"){
        $("#result").text("It's A Tie");
        console.log("Tie");

        }
    else if(computerChoice==="paper" && inputs==="scissors"){
        $("#result").text("Player Wins");
                console.log("Player Wins");

        }
    else if(computerChoice==="paper"  && inputs==="rock"){
        $("#result").text("Computer Wins");
                console.log("Computer Wins");
}
    else if(computerChoice==="rock" && inputs==="scissors"){
        $("#result").text("Computer Wins");
            console.log("computer Wins");

        }
    else if(computerChoice==="rock" && inputs==="paper"){
        $("#result").text("Player Wins");
        console.log("player Wins");
        }
    else if(computerChoice==="rock" && inputs==="rock"){
        $("#result").text("It's A Tie");
            console.log("Tie");

        }
    else if(computerChoice==="scissors" && inputs==="scissors"){
        $("#result").text("It's A Tie");
        console.log("Tie");
        }    
    else if(computerChoice==="scissors" && inputs==="paper"){
        $("#result").text("Computer Wins");
            console.log("computer Wins");

        }
    else if(computerChoice==="scissors" && inputs==="rock"){
        $("#result").text("Player Wins");
                console.log("player Wins");

        } 
    else{
        alert("Please type rock, paper, or scissors as your answer");
        }
    }

// working buttons
$("#shoot").click(function(){
    var input = $("#input").val();

    $("#result").text(results());
    $("#userChoice").text(input);
    $("#computerChoice").text(computerminds());

});