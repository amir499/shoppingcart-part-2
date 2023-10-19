
function caseUpdate(isIncrease){
    const inputOne = document.getElementById('input-one');
    const inputOneString = inputOne.value;
    const newInput = parseInt(inputOneString);
    let caseNumber;
    if(isIncrease === true){
        caseNumber = newInput + 1;
    }
    else{
        caseNumber = newInput - 1;
    }
    inputOne.value = caseNumber;
    return caseNumber;
}

function caseTotal(newNumber){
    const total = newNumber * 1219;
    const previousNumber = document.getElementById('phone-total');
    previousNumber.innerText = total;
    
}

// calculate 
function getTextElementValueById(elementId) {
    const phoneTotal = document.getElementById(elementId);
    const subtotal = phoneTotal.innerText;
    const subtotalNumber = parseInt(subtotal);
    return subtotalNumber;
}


function calculateSubTotal() {
    // culculate subtotal
    const currentPhoneTotal = getTextElementValueById('total');
    const currentCaseTotal = getTextElementValueById('phone-total');
    console.log(currentPhoneTotal)
    // console.log(currentCaseTotal)
    const culculateSubTotal = currentPhoneTotal + currentCaseTotal;
    const subAmount = document.getElementById('sub');
    subAmount.innerText = culculateSubTotal;
}

document.getElementById('plus').addEventListener('click', function(){
    const newNumber= caseUpdate(true)
    caseTotal(newNumber)
    calculateSubTotal()
});
document.getElementById('minus').addEventListener('click', function(){
    const newNumber= caseUpdate(false)
    caseTotal(newNumber)
    calculateSubTotal()
});