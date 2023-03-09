let num1 = '';
let num2 = '';
let operator = '';
let result = '';

function addNumber(number) {
    if (operator == '') {
        num1 += number;
        document.getElementById('screen').value = addCommas(num1);
    } else {
        num2 += number;
        document.getElementById('screen').value = addCommas(num2);
    }
}

function addOperator(op) {
    console.log('addOperator called with operator:', op);
    operator = op;
}


function calculate() {
    debugger;
    switch (operator) {
        case '+':
            result = parseInt(num1.replace(/,/g, '')) + parseInt(num2.replace(/,/g, ''));
            break;
        case '-':
            result = parseInt(num1.replace(/,/g, '')) - parseInt(num2.replace(/,/g, ''));
            break;
        case '*':
            result = parseInt(num1.replace(/,/g, '')) * parseInt(num2.replace(/,/g, ''));
            break;
        case '/':
            result = parseInt(num1.replace(/,/g, '')) / parseInt(num2.replace(/,/g, ''));
            break;
    }
    document.getElementById('screen').value = addCommas(result);
}

function clearScreen() {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    document.getElementById('screen').value = '';
}

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
