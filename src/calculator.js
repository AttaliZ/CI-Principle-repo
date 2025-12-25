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
        if (typeof alert === "function") {
            alert("ห้ามหารด้วย 0 ");
        }
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
            if (typeof alert === "function") {
                alert("Operator ไม่ถูกต้อง");
            }
            return null;
    }
}

if (require.main === module) {
    console.log(calculate('+', 5, 3)); 
    console.log(calculate('*', 4, 2)); 
    console.log(calculate('/', 10, 0)); 
}

module.exports = {add,subtract,multiply,divide,calculate,};
