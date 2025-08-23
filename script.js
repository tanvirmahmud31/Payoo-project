// login btn functionility

document.getElementById("login-btn").addEventListener("click",function(e){
    e.preventDefault()
    
    const mobileNumber= 1701369031
    const pinNumber= 1234

    const mobileNo= document.getElementById("mobile-no").value
    console.log(mobileNo)

    const mobileNoConverted= parseInt(mobileNo);
    console.log(mobileNoConverted)

    const pinNo= document.getElementById("pin-no").value
    console.log(pinNo)

    const pinNoConverted= parseInt(pinNo);
    console.log(pinNoConverted)

    if(mobileNoConverted === mobileNumber && pinNoConverted === pinNumber){
        window.location.href= "./home.html"
    }
    else{
        alert("invalid")
    }

})