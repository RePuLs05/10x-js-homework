function filterOdds(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(filterOdds([1, 2, 3, 4, 5]));
