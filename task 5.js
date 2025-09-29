function MiniQuiz(){
    let score = 0;
    const Q1 = "What is the national animal?\n\n"+
                "A. Lion\n" +"B. Tiger\n"+"C. Dear\n"+"D. Elephant\n";
    let ans1 = prompt(Q1)
    switch(ans1){
        case 'B':
        score++;
        alert("Correct!");
        break;
        default:
        alert("Incorrect!");
        break;
       }
    const Q2 = "Who invented the telephone?\n\n"+
                "A. Thomas Edison \n" +"B. Alexander Graham Bell \n"+"C. Nikola Tesla\n"+"D. Guglielmo Marconi\n";
    const A2 = "B";
    let ans2 = prompt(Q2) 
    switch(ans2){
        case 'B':
        score++;
        alert("Correct!");
        break;
        default:
        alert("Incorrect!");
        break;
       }  
    const Q3 = " Which festival is known as the Festival of Lights? \n\n"+
                "A. Holi\n" +"B. Christmas\n"+"C. Diwali\n"+"D. Eid\n";
    const A3 = "C";
    let ans3 = prompt(Q3)
    switch(ans3){
        case 'C':
        score++;
        alert("Correct!");
        break;
        default:
        alert("Incorrect!");
        break;
       }    
    const Q4 = "What is the largest desert in the world?\n\n"+
                "A. The Gobi Desert\n" +"B. The Kalahari Desert\n"+"C. The Sahara Desert \n"+"D. The Arabian Desert \n";
    const A4 = "C";
    let ans4 = prompt(Q4)
    switch(ans4){
        case 'C':
        score++;
        alert("Correct!");
        break;
        default:
        alert("Incorrect!");
        break;
       }    
    const Q5 = "How many colors are there in a rainbow?\n\n"+
                "A. Five\n" +"B. Six\n"+"C. Seven\n"+"D. Eight\n";
    const A5 = "C";
    let ans5 = prompt(Q5) 
    switch(ans5){
        case 'C':
        score++;
        alert("Correct!");
        break;
        default:
        alert("Incorrect!");
        break;
       }    
    alert("Your Final Score: "+ score +"/5"); 
}
MiniQuiz();