# PROJECT ROCK PAPER SCISSORS BY THE ODIN PROJECT

## Plan
<p>
Interface: Console <br>
Input: Generate random value for computer move and prompt user for input.<br>
Output: Output results using alert window. Output must result in who won the rps round.<br>
</p>

## PseudoCode:

- Execute Program
- Create array to store list of valid moves.
- Create two input variables. One for the computer and one for the user/player.
- Generate move for computer via Math.random function.
  - Based on the result of the random function, select a rps move.
- Get input from user via prompt.
  - must be case insensitive
  - only accepts strings
  - accepts null
- Create a function to determine who won.
- Output result via alert function.
  - must declare start of round
  - show player and computer move
  - show tally

  ### *NOTE pseudocode served as something to follow.. though the final program ended something entirely different along the way but it's still good


***

## RPS with UI

<p>
Interface: Web UI
  - Add three buttons for each player move
  - Add div for displaying results
</p>

Need to remove:
- function that validates player move
- array that lists valid moves

Questions:
When does the game start?
-starts when the player chooses a move (i.e. when a player presses a move button)
When does the game end?
-once the player or computer reaches 5 points
  