function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Error: Division by zero";
        case '%':
            return b !== 0 ? a % b : "Error: Division by zero";
        case '**':
            return a ** b;
        default:
            return "Invalid operator";
    }
}

// Test cases
console.log(calculate(10, 5, '+')); 
console.log(calculate(10, 5, '-')); 
console.log(calculate(10, 5, '*')); 
console.log(calculate(10, 5, '/')); 
console.log(calculate(10, 0, '/')); 
console.log(calculate(10, 5, '%')); 
console.log(calculate(10, 0, '%')); 
console.log(calculate(2, 3, '**')); 
console.log(calculate(10, 5, '&')); 