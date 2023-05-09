let numbers = "0";
let countDecimal = 0;
let currentOperation = '';
let recentNumber = "";

function clickNumber(number) {
   
    if(numbers.charAt(0) === '0' && numbers.charAt(1) == '') {
        numbers = "";
    }

    numbers += number; 
    document.getElementById('inputValue').value = numbers;
    
}


function clickDecimal(decimal) {   
  
    if(countDecimal !== 1) {
        numbers += decimal;
        document.getElementById('inputValue').value = numbers;
        countDecimal++; 
    }

}

function calculate() {

    let result = 0; 

    switch(currentOperation) {
        case '+':
            result = Number.parseFloat(recentNumber) + Number.parseFloat(numbers);
            document.getElementById('recentInput').value = recentNumber + " + " + numbers + " = ";
            break;
        case '-':
            result = Number.parseFloat(recentNumber) - Number.parseFloat(numbers);
            document.getElementById('recentInput').value = recentNumber + " - " + numbers + " = ";
            break;
        case '*':
            result = Number.parseFloat(recentNumber) * Number.parseFloat(numbers);
            document.getElementById('recentInput').value = recentNumber + " * " + numbers + " = ";
            break;
        case '/':
            result = Number.parseFloat(recentNumber) / Number.parseFloat(numbers);
            document.getElementById('recentInput').value = recentNumber + " / " + numbers + " = ";
            break;
    }

    numbers = result.toString();
    currentOperation = "";
    document.getElementById('inputValue').value = result;

}

function operation(operate) {
    
    if(currentOperation === '') {

        switch(operate) {
            case '+':
            document.getElementById('recentInput').value = numbers + operate;
            currentOperation = operate;
            break;
        case '-':
            document.getElementById('recentInput').value = numbers + operate;
            currentOperation = operate;
            break;
        case '*':
            document.getElementById('recentInput').value = numbers + operate;
            currentOperation = op;
            break;
        case '/':
            document.getElementById('recentInput').value = numbers + operate;
            currentOperation = operate;
            break;
        case '=':
            document.getElementById('recentInput').value = numbers + operate;
            currentOperation = operate;
            break;

        }

        recentNumber = numbers;
        numbers = '0';
        countDecimal = 0;

        document.getElementById('inputValue').value = numbers;  

    }

    else {

        let tempRecentArray = document.getElementById('recentInput').value.split("");

        for(let i = 0; i < tempRecentArray.length; i++) {
            if(tempRecentArray[i] === '+' || tempRecentArray[i] === '-' || tempRecentArray[i] === '*' || tempRecentArray[i] === '/') {
                tempRecentArray[i] = op;
                currentOperation = op;
                break;
            }
        }

        let newValue = "";
        for(let i = 0; i < tempRecentArray.length; i++) {
            newValue += tempRecentArray[i];
        }

        document.getElementById('recentInput').value = newValue;

    }

}


function clearAll() {

    document.getElementById("recentInput").value = "";
    document.getElementById("inputValue").value = "0";
    numbers = "0";
    countDecimal = 0;
    currentOperation = "";
    
}

function eraseLast() {

    let tempArrary = numbers.split(""); 
    tempArrary.pop(); 

    numbers = "";
    for(let i = 0; i < tempArrary.length; i++) {
        numbers += tempArrary[i];
    }

    if(numbers.charAt(0) === '') {
        numbers = '0';
    }

    document.getElementById('inputValue').value = numbers;

}

function divideByOne() {

    document.getElementById('recentInput').value = "1/(" + numbers + ")";

    numbers = (1 / (Number.parseFloat(numbers))).toString();

    if(numbers == Infinity) {
        document.getElementById('inputValue').value = "Cannot divide by zero";
        numbers = '0';

    } else {
        document.getElementById('inputValue').value = numbers;
    }

}

function percentage() {

    document.getElementById('recentInput').value = numbers + "% = ";
    numbers = (Number.parseFloat(numbers) / 100).toString();
    document.getElementById('inputValue').value = numbers;

}

function clearEntry() {

    numbers = '0';
    document.getElementById('inputValue').value = numbers;

}