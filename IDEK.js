console.log("qwert");

var currentOpp = '';
var currentNum1 = '';
var currentNum2 = '';

// clears current
// takes operator and saves it as currentOpp
function appendOperator(operator) {
    currentOpp = '';
    currentOpp = operator;
}

function run() {
    currentNum1 = document.getElementById('number1').value;
    currentNum2 = document.getElementById('number2').value;
    switch (currentOpp){
        case '+':
            var result = currentNum1 + currentNum2;
            break;

        case '-':
            var result = currentNum1 - currentNum2;
            break;

        case 'x':
            var result = currentNum1 * currentNum2;
            break;

        case '÷':
            if (currentInput === '0') {
                alert("Cannot divide by zero");
                return;
            }  
            var result = currentNum1 / currentNum2;
        
            break;

    }
    console.log(result);
}

