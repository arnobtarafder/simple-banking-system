// handle deposit button event 
document.getElementById("deposit-submit").addEventListener("click", function() {
// GET THE AMOUNT DEPOSITED 

   // console.log("deposit button working brooo!!");
    const depositInput = document.getElementById("deposit-input");
   // console.log(depositAmount);
    // const depositAmount = depositInput.value;
    // new newDepositText 
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)
    // total amount 
    const depositTotal = document.getElementById("deposit-total");
    // currentDepositText
    const currentDepositText = depositTotal.innerText;
    const currentDepositAmount = parseFloat(currentDepositText);
    // new total 
    const newDepositTotal = currentDepositAmount + newDepositAmount;
    document.getElementById("deposit-totals").style.overflow = "hidden" 
    document.getElementById("deposit-totals").style.color = "green" 
    depositTotal.innerText = newDepositTotal;

    // clear the deposit input field 
    depositInput.value = "";


// UPDATE ACCOUNT BALANCE 
const balanceTotal = document.getElementById("balance-total");
const balanceTotalText = balanceTotal.innerText;
const currentBalanceTotal = parseInt(balanceTotalText);
const newBalanceTotal = currentBalanceTotal + newDepositAmount;
document.getElementById("balance-totals").style.overflow = "hidden"
document.getElementById("balance-totals").style.color = "green"
balanceTotal.innerText = newBalanceTotal;



// HANDLE WITHDRAW EVENT HANDLER 
document.getElementById("withdraw-submit").addEventListener("click", function() {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);
    // set withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const currentWithdrawText = withdrawTotal.innerText;
    const currentWithdrawTotal = parseFloat(currentWithdrawText);

    const newWithdrawTotal = currentWithdrawTotal + newWithdrawAmount;
    document.getElementById("withdraw-totals").style.color = "red"
    document.getElementById("withdraw-totals").style.overflow = "hidden"
    withdrawTotal.innerText = newWithdrawTotal;


    
    // update balance total 
    const balanceTotal = document.getElementById("balance-total");
    const currentBalanceText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);
    const newBalanceTotal = currentBalanceTotal - newWithdrawAmount;
    
    balanceTotal.innerText = newBalanceTotal;
    // clear withdraw input field
    withdrawInput.value = "";

})
    








  // let specials = document.getElementById("special-button")
    //     let special = specials.addEventListener("click",function(){
    //         depositInput.value = "";
    //     })
    // })
        
})