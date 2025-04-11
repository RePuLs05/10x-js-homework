const riskLevels = [100, 150, 50, 200, 150, 50];


const hexValues = riskLevels.map(level => level.toString(16));
console.log("Hex values:", hexValues);


const highRisks = riskLevels.filter(level => level > 100);
console.log("Filtered high risks:", highRisks);


const totalRisk = riskLevels.reduce((total, level) => total + level, 0);
console.log("Total risk level:", totalRisk);


const firstHighRisk = riskLevels.find(level => level > 150);
console.log("First risk above 150:", firstHighRisk);


const cleanedData = [...riskLevels]; 
for (let i = cleanedData.length - 1; i >= 0; i--) {
  if (cleanedData[i] < 80) {
    cleanedData.splice(i, 1);
  }
}
console.log("Cleaned data (after removing <80):", cleanedData);

