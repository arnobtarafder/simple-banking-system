let changeColor   = document.getElementById('Color'),
      colors      = ['#000048', '#B5C7A4', '#DCAFDE', '#A4DADA', '#B79F9F'];
let   colorIndex  = 0;

changeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
});
document.getElementById("Village").addEventListener("mousemove", function() {
    document.body.style.color = "#198E1E";
})

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

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    return currentBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const currentBalanceTotal = parseFloat(balanceTotalText);
    const currentBalanceTotal = getCurrentBalance();
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
if(depositAmount > 0) {
    updateTotalField("deposit-total",depositAmount); 
    updateBalance(depositAmount, true);
    document.getElementById("deposit-totals").style.overflow = "hidden";
    document.getElementById("balance-totals").style.overflow = "hidden"
}
else{
    alert("please, give a valid/positive amount of number")
}

});
// handle withdraw button 
document.getElementById("withdraw-submit").addEventListener("click", function() {
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
   if(withdrawAmount > 0 && withdrawAmount <= currentBalance) {
    updateTotalField("withdraw-total",withdrawAmount);
    // update balance after withdraw 
    updateBalance(withdrawAmount, false);
    document.getElementById("withdraw-totals").style.overflow = "hidden";
    // document.getElementById("balance-totals").style.overflow = "hidden";
   }
  else if (withdrawAmount > currentBalance) {
       alert("You cannot withdraw more than what you have in your account balance:)sorry")
   }
   else{
       alert("please, give a positive amount of number!!")
   }

})