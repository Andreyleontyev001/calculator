let action;

function calculate() {
    let number_1 = Number(document.getElementById("number_1").value);
    let number_2 = Number(document.getElementById("number_2").value);
    let result;
    switch (action) {
        case '+' :
            result = number_1 + number_2
            break;
        case '-' :
            result = number_1 - number_2
            break;
        case '*' :
            result = number_1 * number_2
            break;
        case '/' :
            result = number_1 / number_2
            break;
    }
    document.getElementById("result").innerHTML = result;
}
