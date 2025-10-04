let student = { name: "", email: "", age : 0 };

    
    function storeInfo() {
      try {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let age = parseInt(document.getElementById("age").value);

        if (!name || !email || !age) throw "All fields are required!";
        if (isNaN(age)) throw "Age must be a number!";
        if(age<12) throw "Age must be greater than 12";

        student.name = name;
        student.email = email;
        student.age = age;

        document.getElementById("infoMsg").innerText = "Info stored successfully!";
      } 
    
    catch (err) {
        document.getElementById("infoMsg").innerText = "Error: "+err;
      }
    }
    var container = document.getElementById('container');
 var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var result = document.getElementById('result');

var currQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

function loadQuestion(index) {
  var data = questions[index];
  question.textContent = data.question;
  option1.textContent = data.option1;
  option2.textContent = data.option2;
  option3.textContent = data.option3;
  option4.textContent = data.option4;
  var selectedOption = document.querySelector('#container input[type = radio]:checked');
  selectedOption.checked = false;
};

function loadNextQuestion() {
  var selectedOption = document.querySelector('#container input[type = radio]:checked');
  if(!selectedOption){
    alert("Please select some option!");
    return;
  }
  
  if(questions[currQuestion].answer === selectedOption.nextElementSibling.textContent){
    score ++;
  }
  selectedOption.checked = false;
  currQuestion++; 
  if (currQuestion ==totalQuestions-1 ) {
    document.getElementById('nextQuestion').textContent = 'Finish';
  } if(currQuestion == totalQuestions){
    container.style.display ='none';
    result.style.display = '';
    result.textContent = 'Your Score : '+score;
    score = 0;
    return;
  }
  loadQuestion(currQuestion);
  
      
document.getElementById("json.data").innerText = JSON.stringify(
      { student, score, totalQuestions },
      null,
      2
    );
    return;
  };
  
loadQuestion(currQuestion);


