function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
     // clear input value 
     inputField.value = "";
    return amountValue
}
function updateTotalField(totalFieldID, depositAmount) {
    const depositTotal = document.getElementById(totalFieldID);
    const depositTotalText = depositTotal.innerText;
    const currentDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = currentDepositTotal + depositAmount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd == true) {
        balanceTotal.innerText = currentBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = currentBalanceTotal - amount;
    }
}
// get and update deposite total 
document.getElementById("deposit-submit").addEventListener("click", function(){
let depositAmount = getInputValue("deposit-input");
updateTotalField("deposit-total",depositAmount); 
updateBalance(depositAmount, true)

});
// handle withdraw button 
document.getElementById("withdraw-submit").addEventListener("click", function() {
    const withdrawAmount = getInputValue("withdraw-input")
    updateTotalField("withdraw-total",withdrawAmount);
    // update balance after withdraw 
    updateBalance(withdrawAmount, false)

})