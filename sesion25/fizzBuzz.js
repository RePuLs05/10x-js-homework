function fizzBuzzTwist() {
  const fizz="Fizz";
  const buzz="Buzz";    
  const fizzBuzz="FizzBuzz";
  const almostFizz="AlmostFizz";
  const fizzBuzzArray = [];
  for(let i=1; i<=50; i++){
    if(i===3 || i%10===3){
      fizzBuzzArray.push(almostFizz);
    }
    else  if(i%3===0 && i%5===0){
      fizzBuzzArray.push(fizzBuzz)
    }
    else if(i%3===0){
      fizzBuzzArray.push(fizz);
    }
    else if(i%5===0){
      fizzBuzzArray.push(buzz);
    }
    else{
      fizzBuzzArray.push(i);
    }
  }
  return fizzBuzzArray;
}
const fizzBuzzResult = fizzBuzzTwist();
console.log(fizzBuzzResult);