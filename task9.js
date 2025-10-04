let student = {};

// ========== Registration ==========
function storeInfo() {
  try {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = parseInt(document.getElementById("age").value);

    if (!name || !email || !age) throw "All fields are required!";
    if (isNaN(age)) throw "Age must be a number!";
    if (age < 12) throw "Age must be greater than 12";

    student = { name, email, age };
    localStorage.setItem("studentData", JSON.stringify(student));

    document.getElementById("infoMsg").innerText = "Info stored successfully!";
  } catch (err) {
    document.getElementById("infoMsg").innerText = "Error: " + err;
  }
}

// ========== Quiz ==========
let container = document.getElementById('container');
let question = document.getElementById('question');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let result = document.getElementById('result');

if (container) {  // only run quiz part if on quiz page
  let currQuestion = 0;
  let score = 0;
  let totalQuestions = questions.length;

  function loadQuestion(index) {
    let data = questions[index];
    question.textContent = data.question;
    option1.textContent = data.option1;
    option2.textContent = data.option2;
    option3.textContent = data.option3;
    option4.textContent = data.option4;

    // Uncheck all radios
    document.querySelectorAll('input[name="option"]').forEach(opt => opt.checked = false);
  }

  loadQuestion(currQuestion);

  window.loadNextQuestion = function() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    let selectedAnswer = selectedOption.nextElementSibling.textContent;
    if (selectedAnswer === questions[currQuestion].answer) score++;

    currQuestion++;
    if (currQuestion < totalQuestions) {
      if (currQuestion === totalQuestions - 1)
        document.getElementById('nextQuestion').textContent = "Finish";
      loadQuestion(currQuestion);
    } else {
      container.style.display = 'none';
      result.style.display = 'block';
      document.getElementById('scoreText').textContent = `Your Score: ${score}/${totalQuestions}`;

      let studentData = JSON.parse(localStorage.getItem("studentData")) || {};
      studentData.score = score;
      studentData.totalQuestions = totalQuestions;

      localStorage.setItem("studentData", JSON.stringify(studentData));
      document.getElementById("json").innerText = JSON.stringify(studentData, null, 2);
    }
  };

  window.showjson = function() {
    document.getElementById("json").innerText = localStorage.getItem("studentData");
  };
}
