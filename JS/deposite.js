document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    depositeField.value = '';


    if (isNaN(newDepositeAmount)) {
        alert('Please provide a valid number');
        return;
    }



    // console.log(typeof newDepositeAmount);

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDipositeTotalString = depositeTotalElement.innerText;
    const previosTotalDeposite = parseFloat(previousDipositeTotalString);

    // console.log(typeof previosTotalDeposite);

    const currentDepositeTotal = previosTotalDeposite + newDepositeAmount;

    depositeTotalElement.innerText = currentDepositeTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal
        + newDepositeAmount;

    balanceTotalElement.innerText = currentBalanceTotal;



}

)



// withdraw button 


// step-1

document.getElementById('btn-withdraw').addEventListener('click', function () {


    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }


    // console.log(typeof newWithdrawAmount)


    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');


    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);






    //  step-5

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Tor acount ae age taka deposite kor tarpor taka tulte ashbi');
        return;
    }

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6
    const currentBalanceTotal = previousBalanceTotal
        - newWithdrawAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

})