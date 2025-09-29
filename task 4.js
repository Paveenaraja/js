function ATM(){
    let PIN = prompt("PIN")
    let balance = Number(1000);
    if(PIN == 1234){
        let withdraw= confirm("Withdraw");
        if (withdraw) {
            let amount = prompt("How much amount do you want to withdraw?:")
            if(amount<=1000){
                balance -= amount;
                alert("Withdrawal successful! New balance: "+ balance);
            }
            else{
                alert("Can't able to withdraw!Amount exceeds balance.");
            }

        }
        let Deposit= confirm("Deposit");
        if (Deposit) {
            let amount = Number(prompt("How much amount do you want to deposit?:"))
                balance = balance+amount;
                alert("Deposited successful! New balance is: "+  balance);
            

        }
        let Check = confirm("Check Balance");
        if (Check) {
            alert("Your current Balance:"+balance);

        }
        
    }
    else{
        alert("Incorrect PIN!");
    }
}
ATM();