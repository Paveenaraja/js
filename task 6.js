var income = prompt("Monthly Income:");
var rent = prompt("Rent:");
var groceries = prompt("Groceries:");
var Transport = prompt("Transport:");
income = Number(income);
rent = Number(rent);
groceries = Number(groceries);
Transport = Number(Transport);
c=rent+groceries+Transport;
d=income-c;
f=(c*100)/income;
alert("Total Expenses: "+" "+c);
alert("Remaining Balance:"+" "+d);
alert("Percentage Spent:"+" "+f+"%");
if(c<=income){
    alert("Message: You are within budget.");
}
else{
    alert("Message: You are Overspending.");
}



