const calculator = document.querySelector('.main-container');
const keys = document.querySelector('.buttons-container');
const displayInput = document.getElementById('display')

let num1 = 0;
let num2 = 0;
let process;
displayInput.focus();
displayInput.placeholder = "Enter first number";
    keys.addEventListener('click', e => {
    if (e.target.matches('button')) 
    {
        const key = e.target;
        const action = key.dataset.action;
        
        if(action === 'add')
        {
            num1 = Number(displayInput.value);
            process = 'add';
            displayInput.value ="";
            displayInput.placeholder = "Enter second number";
            displayInput.focus();
        }
        if(action === 'subtract')
        {
            num1 = Number(displayInput.value);
            process = 'subtract';
            displayInput.value ="";
            displayInput.placeholder = "Enter second number";
            displayInput.focus();
        }
        if(action === 'divide')
        {
            num1 = Number(displayInput.value);
            process = 'divide';
            displayInput.value ="";
            displayInput.placeholder = "Enter second number";
            displayInput.focus();
        }
        if(action === 'multiply')
        {
            num1 = Number(displayInput.value);
            process = 'multiply';
            displayInput.value ="";
            displayInput.placeholder = "Enter second number";
            displayInput.focus();
        }
        if(action === 'calculate')
        {
            num2 = Number(displayInput.value);
            console.log(num2);
            if(process === 'add')
                displayInput.value = sum(num1,num2);
            if(process === 'subtract')
                displayInput.value = subtract(num1,num2);
            if(process === 'divide')
                displayInput.value = divide(num1,num2);
            if(process === 'multiply')
                displayInput.value = multiply(num1,num2);
            
            process = "";
            displayInput.placeholder = "Enter first number";
        }

        if(action === 'clear')
        {
            num1 = undefined;
            num2 = undefined;
            process = '';
            displayInput.value = "";
            displayInput.placeholder = "Enter first number";
            displayInput.focus();
        }
    }
});

function sum(number1,number2)
{
    return number1+number2;
}

function subtract(number1,number2)
{
    return number1-number2;
}

function divide(number1,number2)
{
    if(number2 == 0)
        return "Undefined";
    
    return number1/number2;
}

function multiply(number1,number2)
{
    return number1*number2;
}