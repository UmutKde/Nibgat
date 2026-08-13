const equalButton = document.querySelector('[data-equal]');
const operationButtons = document.querySelectorAll('[data-operation]');
let number1Box = document.getElementById("number1");
let number2Box = document.getElementById("number2");
let resultBox = document.getElementById("result");

let val1 = 0.0, val2 = 0.0;
let process;


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        process = button.innerText;
    })
});

equalButton.addEventListener('click', () => {
    val1 = parseFloat(number1Box.value);
    val2 = parseFloat(number2Box.value);

    if (process === "+")
        resultBox.innerHTML = val1 + val2;

    else if (process === "-")
        resultBox.innerHTML = val1 - val2;
    else if (process === "*")
        resultBox.innerHTML = val1 * val2;
    else {
        if (val1 === 0 && val2 === 0)
            resultBox.innerHTML = "Belirsiz"
        else if (val2 === 0)
            resultBox.innerHTML = "Tanımsız";
        else
            resultBox.innerHTML = val1 / val2;
    }
});

// eşittir butonuna hiç gerek yokmuş ama öncesinde tasarımı yaptığımdan dolayı koymuş oldum
// bu kodları yazmaya başladığım zaman fark ettim direk tuşların kendisine de verebilirdim resultBox.innerHTML
// değerini güncellemeyi.