# The Odin Project: Rock, Paper, Scissors

Input(User): Use prompt to get user input from console
    -must be case-insensitive
    -no need to check if input is a valid choice
Input(Computer): Randomized choice
Output: User choice versus randomized computer choice
        Check winner
        Display the scores using console log

Pseudocode:

1. CREATE a new function named getComputerChoice.
2. GENERATE a random number between 0-2.
    - IF number is 0, return computerChoice as "rock"
    - ELSE IF number is 1, return computerChoice as "paper"
    - ELSE if number is 2, return computerChoice as "scissors"

3. CREATE a new function named getHumanChoice.
    - PROMPT user for a valid choice
    - RETURN choice as lowercase

4. CREATE a global variable named humanScore initialized at 0.
5. CREATE a global variable named computerScore initialized at 0.
6. CREATE a new function called playRound that accepts two parameters; one for the computer choice and the other for the player choice.
    - IF player choice is "rock" and computer choice is "scissors"
        OR if player choice is "paper" and computer choice is "rock"
        OR if player choice is "scissors" and computer choice is "paper"
        - DISPLAY "You win! {humanChoice} beats {computerChoice}!"
        - INCREMENT humanScore variable 
    - ELSE IF player choice is "rock" and computer choice is "paper"
        OR if player choice is "paper" and computer choice is "scissors"
        OR if player choice is "scissors" and computer choice is "rock"
        - DISPLAY "You lose! {computerChoice} beats {humanChoice}!"
        - INCREMENT computerScore variable
    - ELSE player choice and computer choice are the same
        - DISPLAY "It's a draw!"