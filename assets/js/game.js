$(document).ready(function(){
    let userScore=0;
    let wins=0;
    let losses=0;
    let computerChoice=Math.floor(Math.random()*100+20);
    
    $("#win-score").text(wins);
    $("#losses-score").text(losses);
    $("#user-score").text(userScore);
    $("#computer-guess").text(computerChoice);

    let num1=Math.floor(Math.random()*10);
    let num2=Math.floor(Math.random()*10);
    let num3=Math.floor(Math.random()*10);
    let num4=Math.floor(Math.random()*10);
       

    function reset(){
        userScore=0;
        $("#user-score").text(userScore);
        computerChoice=Math.floor(Math.random()*100+20);
        $("#computer-guess").text(computerChoice);
        num1=Math.floor(Math.random()*10);
        num2=Math.floor(Math.random()*10);
        num3=Math.floor(Math.random()*10);
        num4=Math.floor(Math.random()*10);
        
    }
    function youLoss(){
        losses++;
        $("#losses-score").text(losses);
        $("#result").text("You Loose The game!")
        reset();
    }
    function youWin(){
        wins++;
        $("#win-score").text(wins);
        $("#result").text("You Win The game!")
        reset();
    }
    $(".crystal1").on("click", function(){
       userScore+=num1;
       $("#user-score").text(userScore);
       if(userScore===computerChoice){
           youWin();
       }else if (userScore>=computerChoice){
           youLoss();
       }
    });
    $(".crystal2").on("click", function(){
        userScore+=num2;
        $("#user-score").text(userScore);
        if(userScore===computerChoice){
            youWin();
        }else if (userScore>=computerChoice){
            youLoss();
        }
     });
     $(".crystal3").on("click", function(){
        userScore+=num3;
        $("#user-score").text(userScore);
        if(userScore===computerChoice){
            youWin();
        }else if (userScore>=computerChoice){
            youLoss();
        }
     });
     $(".crystal4").on("click", function(){
        userScore+=num3;
        $("#user-score").text(userScore);
        if(userScore===computerChoice){
            youWin();
        }else if (userScore>=computerChoice){
            youLoss();
        }
     });
    
   

});