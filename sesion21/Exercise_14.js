const hasTreasureMap=true;
const foundAncientKey=false;
const solvedRiddleScroll=true;
const hasCompass= true;
const isFullMoon=false;

const canFindTreasure = hasTreasureMap && (foundAncientKey || (solvedRiddleScroll && hasCompass));

if(canFindTreasure){
  console.log("Success! Alex can find the legendary treasure!");
} else {
    console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.");
}