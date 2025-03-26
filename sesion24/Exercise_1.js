
function calculateBMI(mass, height) {
    return mass / (height * height);
}


let markMass1 = 78, markHeight1 = 1.69;
let johnMass1 = 92, johnHeight1 = 1.95;

let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(`Test Data 1 - Mark's BMI: ${markBMI1.toFixed(2)}, John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Test Data 1 - Does Mark have a higher BMI than John? ${markHigherBMI1}`);


let markMass2 = 95, markHeight2 = 1.88;
let johnMass2 = 85, johnHeight2 = 1.76;

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Test Data 2 - Mark's BMI: ${markBMI2.toFixed(2)}, John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Test Data 2 - Does Mark have a higher BMI than John? ${markHigherBMI2}`);
