let student = { name: "", birthYear: 0, city: "" };

    
    function storeInfo() {
      try {
        const name = document.getElementById("name").value.trim();
        const birthYear = parseInt(document.getElementById("birthYear").value);
        const city = document.getElementById("city").value.trim();

        if (!name || !birthYear || !city) throw "All fields are required!";
        if (isNaN(birthYear)) throw "Birth year must be a number!";

        student.name = name;
        student.birthYear = birthYear;
        student.city = city;

        document.getElementById("infoMsg").innerText = "Info stored successfully!";
      } catch (err) {
        document.getElementById("infoMsg").innerText = "Error: " + err;
      }
    }

    
    function checkAge() {
      try {
        if (!student.birthYear) throw "Please enter your info first!";
        const currentYear = new Date().getFullYear();
        const age = currentYear - student.birthYear;
        let msg = `${student.name}, you are ${age} years old. `;
        msg += (age >= 18) ? "You are eligible (18+)." : "You are not eligible yet.";
        document.getElementById("ageMsg").innerText = msg;
      } catch (err) {
        document.getElementById("ageMsg").innerText = "Error: " + err;
      }
    }

  
    function showGreeting() {
      try {
        if (!student.name) throw "Please enter your info first!";
        const hour = new Date().getHours();
        let greet = (hour < 12) ? "Good Morning" :
                    (hour < 18) ? "Good Afternoon" : "Good Evening";
        document.getElementById("greetMsg").innerText =
          `${greet}, ${student.name} from ${student.city}!`;
      } catch (err) {
        document.getElementById("greetMsg").innerText = "Error: " + err;
      }
    }

    
    function doMath(op) {
      try {
        const n1 = parseFloat(document.getElementById("num1").value);
        const n2 = parseFloat(document.getElementById("num2").value);
        if (isNaN(n1) || isNaN(n2)) throw "Enter valid numbers!";
        let result;
        switch(op) {
          case "add": result = n1 + n2; break;
          case "sub": result = n1 - n2; break;
          case "mul": result = n1 * n2; break;
          case "div": 
            if (n2 === 0) throw "Division by zero not allowed!";
            result = n1 / n2; break;
        }
        document.getElementById("calcMsg").innerText = "Result: " + result;
      } catch (err) {
        document.getElementById("calcMsg").innerText = "Error: " + err;
      }
    }

    
    function showQuote() {
      const quotes = [
        "Believe in yourself!",
        "Every day is a second chance.",
        "Hard work beats talent.",
        "Push yourself, no one else will.",
        "Stay positive, work hard, make it happen."
      ];
      const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quoteMsg").innerText = quotes[randomIndex];
    }

    
    function showJSON() {
      try {
        if (!student.name) throw "Please enter your info first!";
        document.getElementById("jsonMsg").innerText =
          JSON.stringify(student, null, 2);
      } catch (err) {
        document.getElementById("jsonMsg").innerText = "Error: " + err;
      }
    }
    