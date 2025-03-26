function playGame(player1, player2) {
    const validMoves = ["rock", "paper", "scissors"];
    
    if (!validMoves.includes(player1) || !validMoves.includes(player2)) {
        return "Invalid move";
    }
    
    if (player1 === player2) {
        return "It's a tie!";
    }
    
    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

// Test cases
console.log(playGame("rock", "scissors")); 
console.log(playGame("scissors", "paper")); 
console.log(playGame("paper", "rock")); 
console.log(playGame("rock", "paper")); 
console.log(playGame("scissors", "rock")); 
console.log(playGame("paper", "scissors"));
console.log(playGame("rock", "rock")); 
console.log(playGame("paper", "paper"));
console.log(playGame("scissors", "scissors")); 
console.log(playGame("rock", "fire")); 
