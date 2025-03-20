const ticketPrice = 20;
const ticketsSold = 50;
const concertCosts = 8000;

const totalEarnings = ticketPrice * ticketsSold;
const profit = totalEarnings - concertCosts;

if (profit > 0) {
    console.log(`Concert Profit: $${profit}. Great success!`);
} else {
    console.log(`Concert did not cover costs. Earnings: $${totalEarnings}, Costs: $${profit}.`);
}
