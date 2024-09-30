var num1= ""
var operatorValue=""
var num2 =""

var displayValue = ""

var result = ""

var negative = false

function operate(operator,num1,num2){
    switch (operator){
        case '+': return num1 + num2
        case '-': return num1 -  num2
        case '*': return num1 * num2
        case '/': return (num2 === 0) ? "invalid" : num1 / num2
        default: break
    }
}

const buttons = document.querySelectorAll("button")
const display = document.querySelector("#display") 

function displayscreen(value){
    display.innerText += value
    displayValue = display.innerText
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(display.innerText.length <= 20 ){
            if (button.classList.contains("operator")){
                inputOperator(button.innerText)
            }
            else if(button.innerText === "+/-"){
                sign()
            }
            else if(button.innerText === "%"){
                percent()
            }
            else if(button.innerText === "."){
                decimal()
            }
            else if(button.innerText === "="){
                equals()
            }
            else {
                inputNumber(button.innerText)
            }
        }
        if(button.innerText === "AC"){
            clear()
        }
        if(button.innerText === "="){
            equals()
        }
    }) 
})

function inputOperator(operator){
    let text = display.innerText
    if (displayValue === ""){
        
    }
    else if(
        display.innerText.charAt(display.innerText.length - 1).match(/[0-9]/) === null ){
        display.innerText = display.innerText.substring(0, display.innerText.length - 1)
        displayscreen(operator)
        }
    else{
        operatorValue = operator
        displayscreen(operator)
    }
}

function inputNumber(number){
    if(operatorValue === ""){
        if(negative){
            num1 += (number * -1)
            negative = false
        }else{
            num1 += number 
        }
    }else{
        if(negative){
            num2 += (number * -1)
            negative = false
        }else{
            num2 += number 
        }
    }
    displayscreen(number)
}

function equals(){
    if(num1 !== "" && operatorValue !== "" && num2 !== ""){
        result = (parseFloat( eval(num1  + operatorValue + num2).toFixed(8))).toString()
        display.innerText = result
        num1 = result
        num2 = ""
        operatorValue = ""
    }
}

function clear(){
    display.innerText = ""
    num1 = ""
    num2 = ""
    operatorValue = ""
    displayValue = ""
    result = ""
}

function percent(){
    if(operatorValue === ""){
        num1 = (num1/100).toString()
        displayValue = num1
        display.innerText = num1
    }
    else{
        num2 = (num2/100).toString()
        let num = display.innerText.split(operatorValue)
        display.innerText = num[0] + operatorValue
        displayscreen(num2)
    }
}

function sign(){
    if(display.innerText === "-"){
        display.innerText = ""
        negative = false
    }
    else if(display.innerText === "" || display.innerText.charAt(display.innerText.length - 1).match(/[0-9]/) === null && display.innerText !== "0." ){
        displayscreen("-")
        negative = true
    }
    else if (operatorValue === ""){
        num1 =  num1 * -1
        displayValue = num1
        display.innerText = num1
    }
    else{
        num2 =  num2 * -1
        let num = display.innerText.split(operatorValue)
        display.innerText = num[0] + operatorValue
        displayscreen(num2)
    }
}

function decimal(){
    if(num1 === ""){
        num1 = "0."
        displayscreen("0.")
    }
    else if(num1 !== "" &&  !num1.includes(".") && operatorValue === ""){
        num1 += "."
        displayscreen(".")
    }
    else if(operatorValue !== "" && num2 === ""){
        num2 = "0."
        displayscreen("0.")
    }
    else if(num2 !== "" && !(num2.includes("."))){
        num2 += "."
        displayscreen(".")
    } 
}
