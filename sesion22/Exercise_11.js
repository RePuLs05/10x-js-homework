function batman(){
  return function(){
    return "I am Batman!";
  };
}

const nameIdentity=batman();
console.log(nameIdentity);
