let choice_action_button;
function action() {
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let result;
    switch (choice_action_button) {
    case '+' :
        result = num1 + num2
        break;
    case '-' :
        result = num1 - num2
        break;
    case '*' :
        result = num1 * num2
        break;
    case '/' :
        result = num1 / num2
        break;           
}
document.getElementById("result").innerHTML = result;
}
