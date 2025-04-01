function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}


printObjectKeys({ name: "Alice", age: 25 }); 