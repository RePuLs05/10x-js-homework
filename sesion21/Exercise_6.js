const fuelCapacity = 1000;  
const currentFuel =999;   

const fuelPercentage = (currentFuel / fuelCapacity) * 100;
if(fuelPercentage>100){
  console.error("შეცდომაა მიმდინარე საწვავის რაოდენობაში");
  return 0;
}
if (fuelPercentage > 80) {
    console.log(`Launch status: Ready for takeoff! \n fuel capacity's  : ${fuelPercentage} %`);
} else {
    console.log(`Launch status: Insufficient fuel. Refuel required.  \n fuel capacity's : ${fuelPercentage} %`);
}
