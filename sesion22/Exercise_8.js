function sortStudent(name,callback){
    console.log(`Sorting ${name} into....`);
    console.log(callback());
  }

  const getRandomHouse=()=>{
    const house=["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
    return house[Math.floor(Math.random()*house.length)];
  }
  sortStudent("Harry",getRandomHouse);
  sortStudent("Harry",()=>"Griffindor");