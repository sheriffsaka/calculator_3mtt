let display = document.getElementById('display');
let currentInput = '';

function pressButton(value) {
    // Append button value to the current input
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    // Clear the input and reset display to 0
    currentInput = '';
    display.textContent = '0';
}

function calculateResult() {
    try {
        // Evaluate the mathematical expression
        currentInput = eval(currentInput);
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
    }
}
