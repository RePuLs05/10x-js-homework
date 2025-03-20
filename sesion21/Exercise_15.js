const conePrice = 4.00;
const sundaePrice = 8.00;

const conesSoldToday = 250;
const sundaesSoldToday = 120;

const coneEarnings = conePrice * conesSoldToday;
const sundaeEarnings = sundaePrice * sundaesSoldToday;

let totalEarningsBeforeDiscount = coneEarnings + sundaeEarnings;
let discountApplied = 0;
let finalEarnings;
if (totalEarningsBeforeDiscount >= 1000) {
    discountApplied = totalEarningsBeforeDiscount * 0.05;
    finalEarnings = totalEarningsBeforeDiscount - discountApplied;
    console.log("Volume Discount Applied: Yes");
} else {
    finalEarnings = totalEarningsBeforeDiscount;
    console.log("Volume Discount Applied: No");
}

console.log(`Total Earnings Before Discount: $${totalEarningsBeforeDiscount.toFixed(2)}`);
console.log(`Discount Applied: $${discountApplied.toFixed(2)}`);
console.log(`Final Total Earnings After Discount: $${finalEarnings.toFixed(2)}`);
