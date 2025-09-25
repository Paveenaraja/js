let mark="90";
let a=Number(mark);
switch(true){
    case(mark>=90 && mark<=100):
    console.log("grade:A");
    break;
    case(mark>=75 && mark<=89):
    console.log("grade:B");
    break;
    case(mark>=50 && mark<=74):
    console.log("grade:C");
    break;
    default:
       console.log("grade:Fail"); 

}
var c=18;
if(c%2 == 0){
    console.log("even");
}
else{
    console.log("odd");
}
var b=9;
if(b>0 && b<=5){
   console.log("It's a weekday");
}
 else if(b>5 && b<=7){
    console.log("It's a weekend");
}
else if(b>7){
    console.log("Invalid day");
}

