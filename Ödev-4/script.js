const numberButtons = document.querySelectorAll('[data-number]'); // +
const operationButtons = document.querySelectorAll('[data-operation]'); // +
const equalsButton = document.querySelector('[data-equals]'); // +
const reverseButton = document.querySelector('[data-reverse]'); // +
const deleteButton = document.querySelector('[data-delete]');
const allDeleteButton = document.querySelector('[data-all-clear]');
const displayInput = document.getElementById('display');
const summaryContainer = document.querySelector('.summary-container');

let number1 = 0.0, number2 = 0.0;
let process;
let currentNumber = "";
displayInput.focus();
displayInput.placeholder = "Enter first number";
let summaryList = [];
let summaryListCounter = 1;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayInput.value = button.innerText;
        currentNumber += displayInput.value;
        displayInput.value = currentNumber;
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        process = button.innerText;
        number1 = displayInput.value;
        displayInput.value = "";
        currentNumber = "";
        displayInput.placeholder = "Enter second number";
    });
});

equalsButton.addEventListener('click', () => {
    number2 = displayInput.value;
    let firstNumber = parseFloat(number1);
    let secondNumber = parseFloat(number2);
    if (process === "+")
        displayInput.value = firstNumber + secondNumber;

    else if (process === "-")
        displayInput.value = firstNumber - secondNumber;

    else if (process === "*")
        displayInput.value = firstNumber * secondNumber;

    else if (process === "/") {
        if (secondNumber === 0) {
            displayInput.value = "";
            displayInput.placeholder = "Undefined";
            return;
        }
        displayInput.value = firstNumber / secondNumber;
    }
    else if (process === "%")
        displayInput.value = firstNumber % secondNumber;

    else
        displayInput.value = number1;

    UpdateSummary(firstNumber, secondNumber, process, displayInput.value);
    currentNumber = displayInput.value;
});

reverseButton.addEventListener('click', () => {
    let reversedNumber = parseFloat(displayInput.value);
    reversedNumber = reversedNumber * (-1);
    displayInput.value = reversedNumber;
});

deleteButton.addEventListener("click", () => {
    currentNumber = currentNumber.slice(0, -1);
    displayInput.value = currentNumber;
});

allDeleteButton.addEventListener("click", () => {
    displayInput.value = "";
    currentNumber = "";
    displayInput.placeholder = "Enter first number";
    number1 = 0.0, number2 = 0.0;
});

function UpdateSummary(firstNumber, secondNumber, operation, result) {
    let operationSummary = `${firstNumber} ${operation} ${secondNumber}`;
    summaryList.push({
        id: summaryListCounter,
        islem: operationSummary,
        sonuc: result
    });
    summaryListCounter++;
    updateSummaryUI();
}

function updateSummaryUI() {
    summaryContainer.innerHTML = "";

    summaryList.forEach(item => {
        const cardHTML = `
            <div class="summarycard-container" id="card-${item.id}">
                <div class="upsummarycard-container">${item.islem}</div>
                <div class="mainsummarycard-container">${item.sonuc}</div>
            </div>`;
        summaryContainer.innerHTML += cardHTML;
    });
}