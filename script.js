var operator = null;
var inputValueMemo= 0;

function getContenClick(event) {
   const value = event.target.innerHTML;
   filterAction(value);
}


const filterAction = value =>{
    value === "0" ? addNumberInput(0) : null;
    value === "1" ? addNumberInput(1) : null;
    value === "2" ? addNumberInput(2) : null;
    value === "3" ? addNumberInput(3) : null;
    value === "4" ? addNumberInput(4) : null;
    value === "5" ? addNumberInput(5) : null;
    value === "6" ? addNumberInput(6) : null;
    value === "7" ? addNumberInput(7) : null;
    value === "8" ? addNumberInput(8) : null;
    value === "9" ? addNumberInput(9) : null;
    value === "," ? addNumberInput(",") : null;

    value === "AC" ? deleteInput() : null;

    value === "*" ? setOperation('*') : null;
    value === "-" ? setOperation('-') : null;
    value === "+" ? setOperation('+') : null;
    value === "/" ? setOperation('/') : null;

}


function addNumberInput(value) {
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    const inputValue = inputScreen.value

    if (inputValue.length> 10) {
        return;
    }
    if(inputValue === "0" && inputValue.length === 1 && value!== "," ) {
        inputScreen.value = value;
        return;

    }

    inputScreen.value = inputValue+value;
}

function deleteInput() {
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    inputScreen.value = "0"
}

function setOperation(operator) {
    const inputScreenValue = document.getElementsByClassName("calculator__screen")[0].value;
    this.operator = operator;

    if (inputScreenValue !=0) {
        calculation();
    }
}

function calculation() {
    const inputScreen = document.getElementsByClassName("calculator__screen")[0]
    let valueOne = this.inputValueMemo;
    let valueTwo = inputScreen.value;
    let total = 0;

    if (this.operator === "+" && inputScreen.value !== "") {
        total = valueOne + valueTwo;    
    }
    this.inputValueMemo = total;
    inputScreen.value = "";
    inputScreen.placeholder = total;
}



