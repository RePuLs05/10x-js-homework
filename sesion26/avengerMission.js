const avengerMission = [
{name: "hulk", budget: 2000},
{name: "ironman", budget: 3000},
{name: "thor", budget: 4000},
{name: "spiderman", budget: 1000}
];
const avengerMissionReduce=avengerMission.reduce((acc,crr)=>acc+crr.budget,0);
console.log(avengerMissionReduce);
