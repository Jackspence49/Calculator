//Buttons
const clear = document.querySelector(".clearBtn")
const negative = document.querySelector(".negativeBtn")
const percent = document.querySelector(".percentBtn")
const numbers = document.querySelectorAll(".numberBtn")
const display = document.querySelector(".display")
const equals = document.querySelector("#equalsBtn")
const addition = document.querySelector("#addBtn")
const subtraction = document.querySelector("#subtractBtn")
const multiplication = document.querySelector("#multiplyBtn")
const division = document.querySelector("#divideBtn")



//Numbers Append to Display
let displayNum = 0
let numberOne 
let numberTwo
let operator


//Display Number on the Screen
display.textContent = displayNum

//Operators Clear the Display and all values
function clearDisplay() {
    displayNum = 0
}

clear.addEventListener('click',(event) => {
    clearDisplay(event);
    display.textContent = displayNum
});

//Calculator numbers has basic functionality
numbers.forEach(button => {button.addEventListener('click',function() {
    const number = button.innerText;
    if (display.innerText === "0") {
        display.innerText = number;
    }
    else {
        display.innerText += number;
    }
    displayNum = display.textContent
})
})

//Math Operators Functionality
function positiveNegative () {
   displayNum =  displayNum * -1
}

negative.addEventListener('click',(event) => {
    positiveNegative(event);
    display.textContent = displayNum
});

function percentage () {
    displayNum =  displayNum * .01
 }
 
 percent.addEventListener('click',(event) => {
    percentage(event);
    display.textContent = displayNum
});

function add() {
    numberOne = displayNum
    operator = '+'
    displayNum = 0
};

addition.addEventListener('click',(event) => {
    add(event);
    display.textContent = displayNum
});

function minus() {
    numberOne = displayNum
    operator = '-'
    displayNum = 0
};

subtraction.addEventListener('click',(event) => {
    minus(event);
    display.textContent = displayNum
});

function mutiply() {
    numberOne = displayNum
    operator = '*'
    displayNum = 0
};

multiplication.addEventListener('click',(event) => {
    mutiply(event);
    display.textContent = displayNum
});

function Divide() {
    numberOne = displayNum
    operator = '/'
    displayNum = 0
};

division.addEventListener('click',(event) => {
    Divide(event);
    display.textContent = displayNum
});

function equal() {
    switch(operator) {
        case '+':
            numberTwo = displayNum
            numberOne = parseFloat(numberOne)
            numberTwo = parseFloat(numberTwo)
            displayNum = numberOne + numberTwo
            break;
        case '-':
            numberTwo = displayNum
            numberOne = parseFloat(numberOne)
            numberTwo = parseFloat(numberTwo)
            displayNum = numberOne - numberTwo
            break;
        case '*':
            numberTwo = displayNum
            numberOne = parseFloat(numberOne)
            numberTwo = parseFloat(numberTwo)
            displayNum = numberOne * numberTwo
            break;
        case '/':
            numberTwo = displayNum
            numberOne = parseFloat(numberOne)
            numberTwo = parseFloat(numberTwo)
            if(numberTwo === 0) {
                displayNum = "ERROR"
            }
            else
            displayNum = numberOne / numberTwo
            break;
    }
}
        
equals.addEventListener('click',(event) => {
    equal(event);
    display.textContent = displayNum
});

//Divide by zero Error



//Add Key board support
