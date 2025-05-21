function calculate (){
let num1 = Number (document.querySelector(`#num1`).value)
let num2 = Number (document.querySelector(`#num2`).value)
let operation = document.querySelector(`#operation`).value
let result

if (isNaN(num1) || isNaN(num2)){
    result = `ENTER VALID NUMBERS`
} else {
    switch(operation){
        case `add` :
          result =  num1 + num2
            break
            case `subtract` :
            result =    num1 - num2
            break
            case `multiply` :
                result = num1 * num2
                break
               case "divide":
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default:
                result = "Select an operation";
    }
}

document.querySelector(`#result`).textContent = `RESULT = ${result}`
}