// system .1
/*
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const newInput = inputField.value;
    const newInputNumber = parseInt(newInput);

    const newNumber = newInputNumber + 1;
    inputField.value = newNumber;

    const total = document.getElementById('total');
    const totaNumber = total.innerText;
    const totalNumberTo = parseInt(totaNumber);

    const totalAmount = newNumber * 59;
    total.innerText = totalAmount;

})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const btnMinus = document.getElementById('input-field');
    const btnNew = btnMinus.value;
    const btnNumber = parseInt(btnNew);

    const previousNumber = btnNumber - 1;
    if (btnNumber === 0) {
        return 0;
    }
    btnMinus.value = previousNumber;


    const total = document.getElementById('total');
    const totaNumber = total.innerText;
    const totalNumberTo = parseInt(totaNumber);
    const secondMinus = previousNumber * 59;
    total.innerText = secondMinus;
})
*/



// system 2
/*
function iphoneCase(isIncrease) {
    const inputField = document.getElementById('input-field');
    const newInputField = inputField.value;
    const previousCaseNumber = parseInt(newInputField);
    // const newNumber = newInputString + 1;
    // inputField.value = newNumber;

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    inputField.value = newCaseNumber;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    iphoneCase(true)
})



document.getElementById('btn-case-minus').addEventListener('click', function () {
    iphoneCase(false)
})



*/
// input-field
// btn-case-plus

// system 3 
/*
function iphoneCase(isIncrease) {
    const inputField = document.getElementById('input-field');
    const inputFieldString = inputField.value;
    const inputNewNumber = parseInt(inputFieldString);
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = inputNewNumber + 1;
    }
    else {
        newCaseNumber = inputNewNumber - 1;
    }
    inputField.value = newCaseNumber;
    return newCaseNumber;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newAmount = iphoneCase(true);
    const total = newAmount * 59;
    const previousInput = document.getElementById('total');
    previousInput.innerText = total;

})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newAmount = iphoneCase(false);
    const total = newAmount * 59;
    const previousInput = document.getElementById('total');
    previousInput.innerText = total;
})
*/


function iphoneCase(isIncrease) {
    const inputField = document.getElementById('input-field');
    const inputFieldString = inputField.value;
    const inputNewNumber = parseInt(inputFieldString);
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = inputNewNumber + 1;
    }
    else {
        newCaseNumber = inputNewNumber - 1;
    }
    inputField.value = newCaseNumber;
    return newCaseNumber;
}

function updateTotalPrice(newAmount) {
    const total = newAmount * 59;
    const previousInput = document.getElementById('total');
    previousInput.innerText = total;
}

// cuculate sub total below

function getTextElementValueById(elementId) {
    const phoneTotal = document.getElementById(elementId);
    const subtotal = phoneTotal.innerText;
    const subtotalNumber = parseInt(subtotal);
    return subtotalNumber;
}

function sgetTextElementValueById(elementId, value){
    const subAmount = document.getElementById(elementId);
    subAmount.innerText = value;
}

function calculateSubTotal() {
    // culculate subtotal
    const currentPhoneTotal = getTextElementValueById('total');
    const currentCaseTotal = getTextElementValueById('phone-total');
   // console.log(currentPhoneTotal)
    // console.log(currentCaseTotal)
    const culculateSubTotal = currentPhoneTotal + currentCaseTotal;
    sgetTextElementValueById('sub', culculateSubTotal)
    
    //calculate tax
    const taxAmount = (culculateSubTotal * 0.1).toFixed(2);
    const texNumber = parseFloat(taxAmount)
    sgetTextElementValueById('tax-amount', texNumber);

    const finalAmount = culculateSubTotal + texNumber;
    sgetTextElementValueById('final-total', finalAmount)

}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newAmount = iphoneCase(true);
    updateTotalPrice(newAmount)

    //    calculate 
    calculateSubTotal();

})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newAmount = iphoneCase(false);
    updateTotalPrice(newAmount);

    calculateSubTotal()

})




