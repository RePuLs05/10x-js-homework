function repeatString(str, n) {
  let result = "";
  let count = 0;

  do {
      result += str;
      count++;
  } while (count < n);

  return result;
}


console.log(repeatString("Hello ", 3)); 