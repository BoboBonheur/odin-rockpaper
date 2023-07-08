const option = ['rock','paper','scissors'];

function getComputerChoice(){
   const choice = option[Math.floor(Math.random() * option.length)];
   return choice;
}

function checkWinner(playerSelection, computerSelection){
   if (playerSelection == computerSelection){
return 'tie';
   }
   else if(
      (playerSelection == "rock" && computerSelection == "scissors") ||

      (playerSelection == "scisssors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")
   ){
      return "player";
   } else{
      return "computer";
   }
}

function playRound(playerSelection, computerSelection){
   const result = checkWinner(playerSelection,computerSelection );

   if (result == "tie"){
      return "its a tie"
   }
   else if(result == "player"){
      return `you winner! ${playerSelection}  beat ${computerSelection}`

   }
   else{
      return `you Lose!; ${computerSelection} beat ${playerSelection}`
   }
}

function getPlayerChoice(){
   let validatedInput = false;
   while(validatedInput == false){
      const choice = prompt( "rock paper scissors");
      if (choice == null){
         continue;
      }
      const choiceInLower = choice.toLowerCase();
      if (option.includes(choiceInLower)){
         validatedInput = true ;
         return choiceInLower;
      }
   }

}

function game(){
   let scorePlayer = 0;
   let scoreComputer = 0;
   console.log('welcome');
   for (let i=0 ; i< 5 ; i++){
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound( playerSelection,computerSelection));
if (checkWinner(playerSelection,computerSelection)== "player"){
      scorePlayer ++;
}else if(checkWinner(playerSelection,computerSelection)== "computer"){
scoreComputer++;
}
}

console.log("Game Over")
if(scorePlayer > scoreComputer){
   console.log('player was wone the game');
}else if(scorePlayer < scoreComputer){
console.log('computer wine')
}else{
   console.log('tie')
}

}
game()