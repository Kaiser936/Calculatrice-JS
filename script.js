let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    updateScreen();
}

function appendOperation(operation) {
    currentExpression += operation;
    updateScreen();
}

function calculate() {
    try {
        const result = eval(currentExpression);
        currentExpression = result.toString();
        updateScreen();
    } catch (error) {
        currentExpression = '';
        updateScreen();
    }
}

function clearResult() {
    currentExpression = '';
    updateScreen();
}

function updateScreen() {
    const screen = document.getElementById('result');
    screen.value = currentExpression;
}
