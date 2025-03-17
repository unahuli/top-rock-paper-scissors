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