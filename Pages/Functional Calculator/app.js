
var inputCal = document.getElementById('calculatorInput');




function valueToSet (btnValue){



        if (btnValue === '=') {
            var result = eval(inputCal.value);
            inputCal.value = result;
            return;
        }
    
        if (btnValue === 'DEL') {
            inputCal.value = inputCal.value.slice(0, inputCal.value.length - 1);
            return;
        }
    
        if (btnValue === 'C') {
            inputCal.value = '';
            return;
        }
    
        if (btnValue === 'x2') {
            inputCal.value = Math.pow(eval(inputCal.value), 2);
            return;
        }
    
        inputCal.value += btnValue;
    }
