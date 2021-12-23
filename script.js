const MOVES = ["Rock",
               "Paper",
              "Scissors"];

function computerPlay() {
  const choice = generateMoveNumber();
  
  function generateMoveNumber() {
    const NUMBER_OF_VALID_MOVES = 3;
    return Math.floor(Math.random() * NUMBER_OF_VALID_MOVES); 
  }
  //console.log(choice);
  return MOVES[choice];  
}