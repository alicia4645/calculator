var num1
var operator
var num2 

function operate(operator,num1,num2){
    switch (operator){
        case '+': return num1 + num2
        case '-': return num1 -  num2
        case '*': return num1 * num2
        case '/': return (num2 === 0) ? "invalid" : num1 / num2
        default: break
    }
    

}