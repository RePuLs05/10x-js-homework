let healthPotionPrice = 15;  // price for one health potion
let manaPotionPrice = 20;  // price for one mana potion

let healthPotionsBought = 1;  // number of health potions
let manaPotionsBought = 1;  // number of mana potions

let totalCost = (healthPotionPrice * healthPotionsBought) + (manaPotionPrice * manaPotionsBought);
console.log(totalCost);
if (totalCost > 50) {
    totalCost *= 0.9;// apply a 10% discount if total is above 50
    console.log("Total cost is above 50 gold");
}

console.log("Total cost after any discounts:", totalCost);
