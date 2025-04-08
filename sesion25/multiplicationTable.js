function printMultiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(`${i}x${j}=${i * j}`);
    }
    console.log(`------------MULTIPLICATION TABLE FOR ${i}------------`);
  }
}


printMultiplicationTable(5);