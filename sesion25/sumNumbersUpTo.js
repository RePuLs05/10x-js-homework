

function sumNumbersUpTo(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log(sum);
}

sumNumbersUpTo(10);