const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "London"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Creative Style Syntax"],
    answer: "Cascading Style Sheet"
  },
  {
    question: "Which HTML tag is used to define an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>"
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Jeff Bezos", "Bill Gates", "Elon Musk"],
    answer: "Bill Gates"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}: ${q.question}`;
  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = option;
    div.addEventListener("click", () => selectAnswer(div, option));
    optionsEl.appendChild(div);
  });
}

function selectAnswer(selectedDiv, selectedOption) {
  const correct = quizData[currentQuestion].answer;
  const options = document.querySelectorAll(".option");
  options.forEach(opt => opt.style.pointerEvents = "none");

  if (selectedOption === correct) {
    selectedDiv.style.backgroundColor = "#2ecc71";
    score++;
  } else {
    selectedDiv.style.backgroundColor = "#e74c3c";
    options.forEach(opt => {
      if (opt.textContent === correct) {
        opt.style.backgroundColor = "#2ecc71";
      }
    });
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.innerHTML = `✅ You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>!<br><br><button class="btn" onclick="restartQuiz()">Restart Quiz</button>`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  questionEl.style.display = "block";
  optionsEl.style.display = "block";
  nextBtn.style.display = "block";
  resultEl.innerHTML = "";
  loadQuestion();
}

loadQuestion();
