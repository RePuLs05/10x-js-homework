function triangleType(a, b, c) {
    
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        return "Not a triangle";
    }
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || a === c || b === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}
console.log(triangleType(3, 3, 3)); 
console.log(triangleType(3, 3, 4)); 
console.log(triangleType(3, 4, 5)); 
console.log(triangleType(1, 2, 3)); 
console.log(triangleType(5, 10, 5));
console.log(triangleType(-1, 2, 3));
console.log(triangleType(0, 4, 5)); 
