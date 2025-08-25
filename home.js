const validPin = 1234;


// reusable code function

function getInPutValueNumber(id) {
    const inputField = document.getElementById(id).value
    const inputFieldConverted = parseInt(inputField);
    return inputFieldConverted
}

function getInput(id) {
    const input = document.getElementById(id)
    return input;
}

// getinnertext function

function getInnertext(id) {
    const availableBalance = document.getElementById(id).innerText
    const availableBalanceNumber = parseInt(availableBalance)
    return availableBalanceNumber
}

// set inner text function

function setInnertext(value) {
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}

// function of toggling

function handleToggle(id) {

    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = "none"
    }
    // document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById(id).style.display = "block";
}
// formbtn function 
 function formBtnHandle(id){
    const formBtns= document.getElementsByClassName("form-btn")
    for(const formBtn of formBtns ){
        formBtn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]")
        formBtn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]" , "bg-[#0874f20d]")
 }
// add money feature

document.getElementById("add-money-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const bank = getInput("bank");
        const accountNumber = getInput("account-number");
        const amount = getInPutValueNumber("add-amount")
        const pinNumber = getInPutValueNumber("add-pin")

        const availableBalance = getInnertext("available-balance");



        if (accountNumber.length < 11) {
            alert("Invalid account Number");
            return;
        }

        if (pinNumber !== validPin) {
            alert("Invalid pin Number");
            return;
        }

        const totalNewAvailableBalance = amount + availableBalance;

        setInnertext(totalNewAvailableBalance);
    });

//cashout money feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const amount = getInPutValueNumber("withdraw-amount");

    const availableBalance = getInnertext("available-balance");

    const totalNewAvailableBalance = availableBalance - amount;

    setInnertext(totalNewAvailableBalance);
});

// toggling feature

document.getElementById("add-button").addEventListener("click", function (e) {
    handleToggle("add-money-parent")
    formBtnHandle("add-button")
});
document.getElementById("cash-out-button").addEventListener("click", function () {
    handleToggle("cash-out-parent")
    formBtnHandle("cash-out-button")
});

document.getElementById("transfer-money-button").addEventListener("click", function () {
    handleToggle("transfer-money-parent")
    formBtnHandle("transfer-money-button")
});

document.getElementById("bonus-button").addEventListener("click",function(){
    handleToggle("bonus-parent")
    formBtnHandle("bonus-button")
})

document.getElementById("pay-button").addEventListener("click",function(){
    handleToggle("pay-bill-parent")
    formBtnHandle("pay-button")
})
document.getElementById("transaction-button").addEventListener("click",function(){
    handleToggle("transaction-parent")
    formBtnHandle("transaction-button")
})

