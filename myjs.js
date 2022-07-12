var op;
function func() {
var num1 = Number(document.getElementById("num1").value);
var num2 = Number(document.getElementById("num2").value);
var result;
switch (op) {
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
