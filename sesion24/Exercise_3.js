// Function to calculate average score
function calculateAverage(scores) {
    return scores.reduce((a, b) => a + b,0) / scores.length;
}

// Function to determine the winner
function determineWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log("Dolphins win the trophy!");
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log("Koalas win the trophy!");
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log("It's a draw!");
    } else {
        console.log("No team wins the trophy.");
    }
}

// Test Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];
let dolphinsAvg1 = calculateAverage(dolphinsScores1);
let koalasAvg1 = calculateAverage(koalasScores1);
console.log(`Test Data 1 - Dolphins Avg: ${dolphinsAvg1.toFixed(2)}, Koalas Avg: ${koalasAvg1.toFixed(2)}`);
determineWinner(dolphinsAvg1, koalasAvg1);

// Data Bonus 1
let dolphinsScores2 = [97, 112, 101];
let koalasScores2 = [109, 95, 123];
let dolphinsAvg2 = calculateAverage(dolphinsScores2);
let koalasAvg2 = calculateAverage(koalasScores2);
console.log(`Bonus 1 - Dolphins Avg: ${dolphinsAvg2.toFixed(2)}, Koalas Avg: ${koalasAvg2.toFixed(2)}`);
determineWinner(dolphinsAvg2, koalasAvg2);

// Data Bonus 2
let dolphinsScores3 = [97, 112, 101];
let koalasScores3 = [109, 95, 106];
let dolphinsAvg3 = calculateAverage(dolphinsScores3);
let koalasAvg3 = calculateAverage(koalasScores3);
console.log(`Bonus 2 - Dolphins Avg: ${dolphinsAvg3.toFixed(2)}, Koalas Avg: ${koalasAvg3.toFixed(2)}`);
determineWinner(dolphinsAvg3, koalasAvg3);
