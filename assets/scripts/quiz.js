const questions = [
  {
    question: "Add a 'tooltip' to the paragraph below.",
    code: `<p ...="More Info">Some Info</p>`,
    answers: ["tooltip", "caption", "title", "info"],
    correctAnswer: 2,
  },
  {
    question: "Make the element below into a link.",
    code: `<a ...="https://www.google.com">Google</a>`,
    answers: ["href", "link", "src", "to"],
    correctAnswer: 0,
  },
  {
    question: "Specify an alternate text for the image.",
    code: `<img src="myPic.png" ...="Ahmed Saber">`,
    answers: ["notLoaded", "title", "text", "alt"],
    correctAnswer: 3,
  },
  {
    question:
      "Use the correct HTML tag to add the biggest possible heading with the text 'Home Page'.",
    code: ``,
    answers: [
      "<h6>Home Page</h6>",
      "<h1>Home Page</h1>",
      "<h0>Home Page</h0>",
      "<h>Home Page</h>",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Use the correct HTML tag to add a paragraph with the text 'My name is Ahmed Saber'.",
    code: ``,
    answers: [
      "<p>My name is Ahmed Saber</p>",
      "<paragraph>My name is Ahmed Saber</paragraph>",
      "<para>My name is Ahmed Saber</para>",
      "<text>My name is Ahmed Saber</text>",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which tag is used to add a horizontal rule.",
    code: ``,
    answers: ["<hr></hr>", "<br></br>", "<hr>", "<br>"],
    correctAnswer: 2,
  },
  {
    question: "Which tag is used to add a line break.",
    code: ``,
    answers: ["<lb></lb>", "<br></br>", "<lb>", "<br>"],
    correctAnswer: 3,
  },
  {
    question:
      "Which tag is used to add text with preserved spaces and linebreaks.",
    code: ``,
    answers: [
      "<p></p>",
      "<pre></pre>",
      "<pres></pres>",
      "<preserved></preserved>",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Use the correct HTML attribute to set the color of the paragraph to 'red'.",
    code: `<p ...="color: red;">Some Text</p>`,
    answers: ["inline", "link", "css", "style"],
    correctAnswer: 3,
  },
  {
    question:
      "Use the correct HTML tag to add extra importance to the word 'frontend'.",
    code: `<p>I'm a <...>frontend</...> web developer</p>`,
    answers: ["strong", "i", "em", "span"],
    correctAnswer: 0,
  },
  {
    question:
      "Use an HTML element to add quotation marks around the word 'great'.",
    code: `<p>Frontend Web Development is <...>great</...>p>`,
    answers: ["mark", "q", "quo", "span"],
    correctAnswer: 1,
  },
  {
    question: "Choose the correct syntax for a comment tag.",
    code: ``,
    answers: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
    correctAnswer: 3,
  },
  {
    question:
      "Choose the correct attribute of anchor tag to open its url in new tab.",
    code: ``,
    answers: ['tab="_blank"', 'tab="_new"', 'target="_blank"', 'target="_new"'],
    correctAnswer: 2,
  },
  {
    question: "Choose the correct syntax for adding an image.",
    code: ``,
    answers: ["<image>", "<image></image>", "<img>", "<img></img>"],
    correctAnswer: 2,
  },
];
let i = 0;
let score = 0;
let questionNumber = questions.length;
let point = 5;
let seconds = 60;
let divQ = document.querySelector(".div-q");
let qusetionArea = document.querySelector(".question-area > p");
let codeArea = document.querySelector(".div-question > p");
let checkBtn = document.querySelector(".btn-check");
// when page is loaded it add add question and answer buttons and score , timer 
document.addEventListener("DOMContentLoaded", () => {
  // quizeSettings() is used to add score and timer
  quizeSettings();
  //addQusetion(questions[i]) is used to add question
  addQusetion(questions[i]);
  //selectAnswer() is used to add answer
  selectAnswer();
});
// it will run every time click on next or back  or check to change score and number of question
function quizeSettings() {
  divQ.innerHTML = `
            <div class="div-one">
                <p>Quetion number <span class="currentQuestion">${
                  i + 1
                }</span> out of <span class="questionNumber">${questionNumber}</span></p>
                <p>Score : <span class="score">${score}</span></p>
            </div>
            <div class="div-two">
                <div class="time-div">
                    <p>60</p>
                </div>
            </div>
            `;
}
// the method of setInterval 
// set point to two if the timeout
function timer() {
  if (seconds === 0) {
    let template = `
    <div class="icon">i</div>
    <h2>Time Out</h2>
    <p>If you answer this question correctly, you will get only 2 points instead of 5</p>
    <button class="btn-ok" onclick="closePopup()">ok</button>
`;
    showPopup(template);
    clearInterval(timerInterval);
    point = 2;
  } else {
    seconds -= 1;
    if (document.querySelector(".time-div p")) {
      document.querySelector(".time-div p").innerHTML = seconds;
    }
  }
}
let timerInterval = setInterval(timer, 1000);
// it make a popup that appear to worn about something you pass to it tamplate that will appear
function showPopup(template) {
  document.querySelector(".overlay").style.display = "block";
  let popup = document.querySelector(".popup");
  popup.innerHTML = template;
}
// use to close popup by ok button
function closePopup() {
  document.querySelector(".overlay").style.display = "none";
  
}
// use to add qusetion and answers to dom
function addQusetion(question) {
  qusetionArea.innerHTML = question.question;
  if (question.code !== "") {
    codeArea.innerText = question.code;
    document.querySelector(".div-question").style.display = "block";
  } else {
    document.querySelector(".div-question").style.display = "none";
  }
  question.answers.forEach((ans) => {
    let btn = document.createElement("button");
    btn.className = "btn-ans";
    btn.dataset.index = question.answers.indexOf(ans);
    btn.innerText = ans;
    document.querySelector(".answers-area").appendChild(btn);
  });
}
// add selecte class to chosen answer and assign answer index to check button 
function selectAnswer() {
  let btnsAnswer = document.querySelectorAll(".btn-ans");
  btnsAnswer.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      btnsAnswer.forEach((btn) => {
        btn.classList.remove("selected");
      });
      e.target.classList.add("selected");
      checkBtn.dataset.answer = e.target.dataset.index;
    })
  );
}
// check if the user has selected answer or not if not show popup else clearInterval 
// and disabled all buttons to prevent user from select again 
// checked selected answer if true add class correct else wrong class
function goCheck() {
  let btn = document.querySelector(".selected");
  if (btn) {
    // add new property to questions object [selectedAnswer] the answer the user selected whether the answer wrong or correct to use it again when click back   
    questions[i].selectedAnswer = checkBtn.dataset.answer;
    clearInterval(timerInterval);
    seconds = 61;
    let AllAnswers = document.querySelectorAll(".btn-ans");
    AllAnswers.forEach((ans) => {
      ans.setAttribute("disabled", "disabled");
    });
    if (checkBtn.dataset.answer == questions[i].correctAnswer) {
      btn.classList.add("correct");
      let template = `
            <div class="icon correct"><i class="fa fa-check"></i></div>
            <h2>Correct Answer</h2>
            <button class="btn-ok" onclick="closePopup()">ok</button>`;
      showPopup(template);
      score += point;
      quizeSettings()
    } else {
      btn.classList.add("wrong");
      let AllAnswers = document.querySelectorAll(".btn-ans");
      AllAnswers.forEach((ans) => {
        if (ans.dataset.index == questions[i].correctAnswer) {
          ans.classList.add("correct");
        }
      });
      let template = `
            <div class="icon wrong">X</div>
            <h2>wrong Answer</h2>
            <button class="btn-ok" onclick="closePopup()">ok</button>
  `;
      showPopup(template);
    }
    checkBtn.style.display = "none";
    document.querySelector(".btn-next").style.display = "inline-block";
  } else {
    let template = `
      <div class="icon">i</div>
      <h2>Choose first</h2>
      <button class="btn-ok" onclick="closePopup()">ok</button>
      `;
    showPopup(template);
  }
}

// check if the user answer the question before or not using [selectedAnswer] which add to questions object when the user checked
// if the user answer all the question the function check score if greater than 50% [(questions.length * 5) / 2] rerender to leaderboard(not maked yet)
function goNext() {
  i += 1;
  if (i < questions.length) {
    removeQusetion();
    quizeSettings()
    addQusetion(questions[i]);
    selectAnswer();
    if(questions[i].selectedAnswer) {
      clearInterval(timerInterval);
      AddWrongAndCorrectClasses()
    }else{
      checkBtn.style.display = "inline-block";
      document.querySelector(".btn-next").style.display = "none";
      timerInterval = setInterval(timer, 1000);
    }
  } else {
    if (score >= (questions.length * 5) / 2) {
      clearInterval(timerInterval);
      sessionStorage.setItem('score', score)
      window.location.href = "../../certificate/"
    } else {
      document.querySelector(".quiz-container").innerHTML = `
      <h2>Unfortunately, You have not passed the test..</h2>
      <p>Don't worry, You can try again later.</p>
      <a href='../../' class="back-home"><i class="fa fa-angle-left fa-lg"></i> Back to Home</a>
      `;
      clearInterval(timerInterval);
    }
  }
}
function goBack() {
  let btn = document.querySelector(".selected");
  if (btn) {
    let btnCorrect = document.querySelector(".btn-ans.correct");
    let btnwrong = document.querySelector(".btn-ans.wrong");
    if(btnCorrect || btnwrong) {
      if (i > 0) {
        clearInterval(timerInterval);
        i -= 1;
        removeQusetion();
        quizeSettings()
        addQusetion(questions[i]);
        AddWrongAndCorrectClasses()
      }else{
        let template = `
        <div class="icon">i</div>
        <h2>First Question</h2>
        <p>You can't go back</p>
        <button class="btn-ok" onclick="closePopup()">ok</button>
        `;
      showPopup(template)
      }
    }else{
      let template = `
      <div class="icon">i</div>
      <h2>Not Checked</h2>
      <p>You need to check the correct answer first</p>
      <button class="btn-ok" onclick="closePopup()">ok</button>
      `;
    showPopup(template);
    }
    
  } else {
    let template = `
      <div class="icon">i</div>
      <h2>Choose first</h2>
      <button class="btn-ok" onclick="closePopup()">ok</button>
      `;
    showPopup(template);
  }
}
// used when back or next button is clicked to remove question from dom 
function removeQusetion() {
  let answersArea = document.querySelector(".answers-area");
  while (answersArea.hasChildNodes()) {
    answersArea.removeChild(answersArea.childNodes[0]);
  }
}
// used when back button is clicked or next button is clicked and the user answer that question (to add wrong and correct classes ) 
function AddWrongAndCorrectClasses(){
  let AllAnswers = document.querySelectorAll(".btn-ans");
        AllAnswers.forEach((ans) => {
          ans.setAttribute("disabled", "disabled");
          if (ans.dataset.index === questions[i].selectedAnswer) {
            ans.classList.add("wrong");
          }
          if (ans.dataset.index == questions[i].correctAnswer) {
            ans.classList.add("correct");
            ans.classList.add("selected");
          }
        });
      checkBtn.style.display = "none";
      document.querySelector(".btn-next").style.display = "inline-block";
}
