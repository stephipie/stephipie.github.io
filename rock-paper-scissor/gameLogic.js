export { getComputerChoice, getResults };

// Function to receive a random computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to define the result of the game
function getResults(playerChoice, computerChoice) {
    const outcomes = {
        rock: {
             rock: "draw", 
             paper: "lose", 
             scissors: "win" },
        paper: {
             rock: "win", 
             paper: "draw", 
             scissors: "lose" },
        scissors: { 
            rock: "lose", 
            paper: "win", 
            scissors: "draw" },
    };
    return outcomes[playerChoice][computerChoice];
};
