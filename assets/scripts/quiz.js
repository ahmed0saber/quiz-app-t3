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
let seconds = 60
let divQ = document.querySelector(".div-q");
let qusetionArea = document.querySelector(".question-area > p");
let codeArea = document.querySelector(".div-question > p");
let checkBtn = document.querySelector(".btn-check");
document.addEventListener("DOMContentLoaded", () => {
  quizeSettings();
  addQusetion(questions[i]);
  addAnswer();
});
function quizeSettings() {
  let template = document.createElement("div");
  template.innerHTML = `
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
  divQ.appendChild(template);
}
function timer(){
  if (seconds === 0) {
    let template = `
    <div class="icon">i</div>
    <h2>Time Out</h2>
    <p>If you answer this question correctly, you will get only 2 points instead of 5</p>
    <button class="btn-ok" onclick="closePopup()">ok</button>
`;
    showPopup(template);
    clearInterval(timerInterval);
  } else {
    seconds -= 1;
    if(document.querySelector(".time-div p")){
      document.querySelector(".time-div p").innerHTML = seconds;
    }
  }
}
let timerInterval = setInterval(timer, 1000 );

function showPopup(template) {
  document.querySelector(".overlay").style.display = "block";
  let popup = document.querySelector(".popup");
  popup.innerHTML = template;
}
function closePopup() {
  document.querySelector(".overlay").style.display = "none";
  point = 2;
}
function addQusetion(question) {
  qusetionArea.innerHTML = question.question;
  if (question.code !== "") {
    codeArea.innerText = question.code;
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
checkBtn.addEventListener("click", function () {
  let btn = document.querySelector(".selected");
  if (btn) {
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
      document.querySelector(".score").innerHTML = score;
    } else {
      btn.classList.add("wrong");
      let AllAnswers = document.querySelectorAll(".btn-ans");
      AllAnswers.forEach((ans) => {
        if(ans.dataset.index == questions[i].correctAnswer){
          ans.classList.add('correct');
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
});
function selectAnswer(element) {
  checkBtn.dataset.answer = element.dataset.index;
}
function addAnswer() {
  let btnsAnswer = document.querySelectorAll(".btn-ans");
  btnsAnswer.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      btnsAnswer.forEach((btn) => {
        btn.classList.remove("selected");
      });
      e.target.classList.add("selected");
      selectAnswer(e.target);
    })
  );
}
function goNext() {
  i += 1;
  if (i < questions.length) {
    document.querySelector(".currentQuestion").innerHTML = i+1;
    let answersArea = document.querySelector(".answers-area");
    while (answersArea.hasChildNodes()) {
      answersArea.removeChild(answersArea.childNodes[0]);
    }
    addQusetion(questions[i]);
    addAnswer();
    checkBtn.style.display = "inline-block";
    document.querySelector(".btn-next").style.display = "none";
    clearInterval(timerInterval)
    seconds = 61
    timerInterval = setInterval(timer, 1000);
    
  } else {
    if(score > (questions.length * 5 / 2)){
      clearInterval(timerInterval)
    }else{
      let template=
      document.querySelector('.quiz-container').innerHTML=`
      <h2>Unfortunately, You have not passed the test..</h2>
      <p>Don't worry, You can try again later.</p>
      <a href='../../index.html' class="back-home"><i class="fa fa-angle-left fa-lg"></i> Back to Home</a>
      `
      clearInterval(timerInterval)
    }

  }
}
