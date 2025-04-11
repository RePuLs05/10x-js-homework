function processMatrixData(numbers) {
  const binaryNumbers = numbers.map(num => num.toString(16));
  const highestValue = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
  return {
    binaryNumbers,
    highestValue
  };
}
const input = [3, 7, 15, 22,28];
const result = processMatrixData(input);
console.log("Binary Conversion:", result.binaryNumbers);
console.log("Highest Value:", result.highestValue);