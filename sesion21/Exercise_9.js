const kitchenHasGhost = true;  
const livingRoomHasGhost = false;  

const isHouseSafe = kitchenHasGhost && livingRoomHasGhost;  

if (isHouseSafe) {
    console.log("The house is safe! No ghosts in the Kitchen or Living Room.");
} else {
    console.log("Danger! The house is NOT safe. Ghosts detected!");
}
