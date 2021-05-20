console.log('ROCK, PAPER OR SCISSORS\n\n\n\n');

function computerPlay (){

    let cpu = ["rock", "paper", "scissors"];
//cheap math to select a random object from the erray above.
    let String; play = cpu[Math.floor(Math.random()*cpu.length)];

//** if you just console.log the result, another function cant see the variable... */
    return play;
}

function game() {

    let Score1 = 0;
    let Score2 = 0;

    for (let index = 1; index <= 5; index ++) {

        const playerSelection = prompt("ROCK PAPER OR SCISSORS?");
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
       
    }

    console.log("\n\n\n\n player1: " + Score1 + " Cpu: " + Score2 + "\n\n\n\n");

    if (Score1 > Score2) {
        console.log("\n\n\n\nCongratulations, you have beaten a Computer!\n\n\n\n");
    }
    else if  (Score1 < Score2) {
        console.log("\n\n\n\nMachine has taken over human, You loose!...\n\n\n\n");
    }
    else if (Score1 == Score2) {
        console.log ("\n\n\n\nEMPATE\n\n\n\n");
    }


function playRound(playerSelection, computerSelection) {
 
    if (playerSelection == computerSelection ) {

        console.log("this is a tied \n\n" + playerSelection + " X " + computerSelection)
        
    } 
    else if (playerSelection == "paper" && computerSelection =="rock") {
        console.log("matter wraps matter, genious human >.>, you WIN! \n\n" + playerSelection + " X " + computerSelection)
    Score1++;
    } 
    else if (playerSelection == "paper" && computerSelection =="scissors") {
        console.log("You lose, Computer cuts paper :c \n\n" + playerSelection + " X " + computerSelection)
     Score2++
    } 
    else if (playerSelection == "scissors" && computerSelection =="rock") {
        console.log("You lose, Computer smashed your pair of scissors :c \n\n" + playerSelection + " X " + computerSelection)
     Score2++
    } 
    else if (playerSelection == "scissors" && computerSelection =="paper") {
        console.log("Scissors cut paper for humans, you WIN! ^.^ \n\n" + playerSelection + " X " + computerSelection)
      Score1++
    } 
    else if (playerSelection == "rock" && computerSelection =="paper") {
        console.log("You lose, Computer wrapped your rock :c  \n\n" + playerSelection + " X " + computerSelection)
     Score2++
    } 
    else if (playerSelection == "rock" && computerSelection =="scissors") {
        console.log("ROCK SMASHES MY SCISSORS! you WIN! ^.^ \n\n" + playerSelection + " X " + computerSelection)
     Score1++
    } 
    else
    
 return playerSelection;
 

  }}
  
    //entering point of the function.
    game();

  