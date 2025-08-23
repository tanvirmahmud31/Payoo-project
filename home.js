const fixedPin=1234

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()

    
    const bank= document.getElementById("bank").value
    console.log(bank)
    const accountNumber= document.getElementById("account-number").value
    const addAmmount =parseInt(document.getElementById("add-ammount").value)
    const pinNumber= parseInt(document.getElementById("pin-no").value)

    //console.log(bank,accountNumber,addAmmount,pinNumber)

    if(accountNumber.length!==11){
        alert("please provide valid number")
        return
    }

    if(pinNumber !==fixedPin){
        alert("Correct pin please")
        return;
    }
    const availableBalance=document.getElementById("available-balance").innerText
    //console.log(availableBalance)
    const totalBalance= addAmmount + parseInt(availableBalance);
    document.getElementById("available-balance").innerText=totalBalance
})

//togling

document.getElementById("add-money-btn").addEventListener("click",function(){
    document.getElementById("cashout-parent").style.display="none"
    document.getElementById("add-money-parent").style.display="block"
})

document.getElementById("cashout-btn").addEventListener("click",function(){
     document.getElementById("add-money-parent").style.display="none"
    document.getElementById("cashout-parent").style.display="block"
   
})