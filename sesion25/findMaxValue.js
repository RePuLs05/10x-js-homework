const findMaxValue = (numbers) => {
  let maxValue = 0;
  for (const num of numbers) {
    if (num > maxValue) {
      maxValue = num;
    }
  }
  return maxValue;
};

console.log(findMaxValue([10,20,70,30,40,50]));
   