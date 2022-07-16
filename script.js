let action;

function calculate() {
    let numberOne = Number(document.getElementById("numberOne").value);
    let numberTwo = Number(document.getElementById("numberTwo").value);
    let result;
    switch (action) {
        case '+' :
            result = numberOne + numberTwo
            break;
        case '-' :
            result = numberOne - numberTwo
            break;
        case '*' :
            result = numberOne * numberTwo
            break;
        case '/' :
            result = numberOne / numberTwo
            break;
    }
    document.getElementById("result").innerHTML = result;
}
