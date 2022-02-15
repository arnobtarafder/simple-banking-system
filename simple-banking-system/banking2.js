// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// let number = doubleIt(3);
// console.log(number);
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
    return amountValue;
}
document.getElementById("deposit-submit").addEventListener(onmouse)
function updateTotalField(totalFieldID, amount) {
    // debugger;
    const totalText = document.getElementById(totalFieldID);
    const depositTotalText = totalText.innerText;
    const currentTotal = parseFloat(depositTotalText);
    totalText.innerText = currentTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    return currentBalanceTotal;
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

document.getElementById("deposit-submit").addEventListener("click", function(){
                             /* console.log("deposit button clicked");
        const depositInput = document.getElementById("deposit-input");
        const depositAmountText = depositInput.value;
        const depositAmount = parseFloat(depositAmountText); */
let depositAmount = getInputValue("deposit-input");
if(depositAmount > 0) {
    updateTotalField("deposit-total",depositAmount);
    updateBalance(depositAmount, true)   
}
                                  /* console.log(depositAmount);
        // get current deposit 
        const depositTotal = document.getElementById("deposit-total");
        const depositTotalText = depositTotal.innerText;
        const currentDepositTotal = parseFloat(depositTotalText);
        depositTotal.innerText = currentDepositTotal + depositAmount; */
 
        // console.log(depositTotalText);
    // update balance 
   /*  const balanceTotal = document.getElementById("balance-total")
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = currentBalanceTotal + depositAmount; */

   // clear input value 
//    depositInput.value = "";
});


// handle withdraw button 
document.getElementById("withdraw-submit").addEventListener("click", function() {
                              /* console.log("withdraw button clicked!");
       const withdrawInput = document.getElementById("withdraw-input");
       const withdrawAmountText = withdrawInput.value;
       const withdrawAmount = parseFloat(withdrawAmountText) */
    const withdrawAmount = getInputValue("withdraw-input")
    if(withdrawAmount > 0) {
        updateTotalField("withdraw-total",withdrawAmount);
        updateBalance(withdrawAmount, false)
    }
                             // console.log(withdrawAmountText);
    // get and update withdraw total 
   /* const withdrawTotal = document.getElementById("withdraw-total");
    const CurrentWithdrawTotalText = withdrawTotal.innerText;
    const CurrentWithdrawTotal = parseFloat(CurrentWithdrawTotalText);
    withdrawTotal.innerText = CurrentWithdrawTotal + withdrawAmount;*/
    // updateTotalField("withdraw-total",withdrawAmount);

    // update balance after withdraw 
/*     const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = currentBalanceTotal - withdrawAmount; */
//   updateBalance(withdrawAmount, false)

    // clear input value 
    // withdrawInput.value = "";
})