function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("ห้ามหารด้วย 0 ");
        return "Error";
    }
    return a / b;
}

function calculate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: 
            alert("Operator ไม่ถูกต้อง");
            return null;
    }
}


console.log(calculate('+', 5, 3)); 
console.log(calculate('*', 4, 2)); 
console.log(calculate('/', 10, 0)); 
