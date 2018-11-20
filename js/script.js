// *************************** YOUR CODE BELOW *******************************

function computerminds(){
    
    var randomChoice = Math.random()

    if(randomChoice < 0.333333){
        $("#computerChoice").text("rock");
    }
    else if(randomChoice < 0.666666){
        $("#computerChoice").text("paper");
    }
    else{
        $("#computerChoice").text("scissors");
    }
console.log(randomChoice)

}

$("#shoot").click(function(){

var input =$("#input").val();

    $("#userChoice").text(input);
    $("#computerChoice").text(computerminds());

});
var input =$("#input").val();

if(input === computerminds()){
    alert("TIE");
    console.log("tie");
}

//******************TEST EARLY AND OFTEN USING console.log() ******************

//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

