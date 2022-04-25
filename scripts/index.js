// Store the wallet amount to your local storage with key "amount"

function addtowallet(){

    let amount = Number(document.getElementById("amount").value);

    let x = Number(localStorage.getItem("amount"))
    if(x != undefined){
        let add = x + amount;
        localStorage.setItem("amount" , add);
    }
    else{
        localStorage.setItem("amount",amount)
    }
}