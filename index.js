// Percentage Calculator
function calculatePercentage() {
    const obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);
    const totalMarks = parseFloat(document.getElementById('totalMarks').value);

    if (isNaN(obtainedMarks) || isNaN(totalMarks) || totalMarks <= 0) {
        document.getElementById('percentageResult').innerText = "Please enter valid marks.";
        return;
    }

    const percentage = (obtainedMarks / totalMarks) * 100;
    document.getElementById('percentageResult').innerText = "Your Percentage is: " + percentage.toFixed(2) + "%";
}

// BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('bmiResult').innerText = "Please enter valid weight and height.";
        return;
    }

    const bmi = weight / (height * height);
    document.getElementById('bmiResult').innerText = "Your BMI is: " + bmi.toFixed(2);
}

// Zakat Calculator
function calculateZakat() {
    const wealth = parseFloat(document.getElementById('wealth').value);
    if (isNaN(wealth) || wealth < 0) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
    const zakatWealth = parseFloat(document.getElementById('zakatWealth').value);

    if (isNaN(zakatWealth) || zakatWealth < 0) {
        document.getElementById('zakatResult').innerText = "Please enter a valid amount.";
        return;
    }

    const zakat = zakatWealth * 0.025;
    document.getElementById('zakatResult').innerText = "Your Zakat is: " + zakat.toFixed(2);
}

// Arithmetic Calculator
function calculateAdd() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('arithmeticResult').innerText = "Please enter valid numbers.";
        return;
    }

    const result = num1 + num2;
    document.getElementById('arithmeticResult').innerText = "Addition Result: " + result;
}

function calculateSubtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('arithmeticResult').innerText = "Please enter valid numbers.";
        return;
    }

    const result = num1 - num2;
    document.getElementById('arithmeticResult').innerText = "Subtraction Result: " + result;
}

function calculateMultiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('arithmeticResult').innerText = "Please enter valid numbers.";
        return;
    }

    const result = num1 * num2;
    document.getElementById('arithmeticResult').innerText = "Multiplication Result: " + result;
}

function calculateDivide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        document.getElementById('arithmeticResult').innerText = "Please enter valid numbers. Division by zero is not allowed.";
        return;
    }
    const zakat = wealth * 0.025;
    document.getElementById('result').innerText = "Your Zakat is: " + zakat.toFixed(2);

    const result = num1 / num2;
    document.getElementById('arithmeticResult').innerText = "Division Result: " + result;
}