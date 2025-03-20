const speedLimit = 50;  
let carSpeed = 20;  
console.log(`Car Speed Before Acceleration: ${carSpeed} mph`);
carSpeed += 25;  

if (carSpeed > speedLimit) {
    console.log("Speed Warning: You are going too fast! ");
} else {
    console.log("Speed is okay. ");
}

console.log(`Current Speed: ${carSpeed} mph`);
