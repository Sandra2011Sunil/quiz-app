// Quiz questions — all about Computer Science
const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Logic", "Home Tool Markup Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["JavaScript", "Python", "CSS", "Java"],
    answer: 2
  },
  {
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Core Processing Unit"],
    answer: 1
  },
  {
    question: "Which data structure works on LIFO principle?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    answer: 2
  },
  {
    question: "What does RAM stand for?",
    options: ["Read Access Memory", "Random Access Memory", "Run Application Memory", "Real Access Module"],
    answer: 1
  },
  {
    question: "Which of these is NOT a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: 2
  },
  {
    question: "What symbol is used for single line comments in JavaScript?",
    options: ["#", "//", "--", "/*"],
    answer: 1
  },
  {
    question: "What does IoT stand for?",
    options: ["Internet of Technology", "Internet of Things", "Interface of Things", "Intranet of Tools"],
    answer: 1
  },
  {
    question: "Which company developed the Java programming language?",
    options: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
    answer: 2
  },
  {
    question: "What does AI stand for?",
    options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Automatic Interface"],
    answer: 1
  }
];

// Track current question and score
let currentQuestion = 0;
let score = 0;
let answered = false;

// Start the quiz
function startQuiz() {
  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('quizScreen').classList.remove('hidden');
  showQuestion();
}

// Show current question
function showQuestion() {
  answered = false;
  document.getElementById('nextBtn').classList.add('hidden');

  const q = questions[currentQuestion];

  // Update progress bar
  const progressPercent = (currentQuestion / questions.length) * 100;
  document.getElementById('progress').style.width = progressPercent + '%';

  // Update question number and score
  document.getElementById('questionNumber').textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById('scoreDisplay').textContent = `Score: ${score}`;

  // Show question text
  document.getElementById('questionText').textContent = q.question;

  // Show options
  const container = document.getElementById('optionsContainer');
  container.innerHTML = q.options.map((option, index) => `
    <button class="option" onclick="selectAnswer(${index})">${option}</button>
  `).join('');
}

// Handle answer selection
function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const options = document.querySelectorAll('.option');

  // Disable all options
  options.forEach(opt => opt.disabled = true);

  // Show correct and wrong
  options[q.answer].classList.add('correct');

  if (selectedIndex !== q.answer) {
    options[selectedIndex].classList.add('wrong');
  } else {
    score++;
  }

  // Show next button
  document.getElementById('nextBtn').classList.remove('hidden');
}

// Go to next question
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Show final result
function showResult() {
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.remove('hidden');

  const percentage = (score / questions.length) * 100;

  document.getElementById('finalScore').textContent =
    `${score} / ${questions.length}`;

  // Show different message based on score
  let emoji, message;
  if (percentage === 100) {
    emoji = '🏆';
    message = 'Perfect score! You are a CS genius!';
  } else if (percentage >= 80) {
    emoji = '🎉';
    message = 'Excellent! You know your CS concepts well!';
  } else if (percentage >= 60) {
    emoji = '👍';
    message = 'Good job! Keep learning and improving!';
  } else if (percentage >= 40) {
    emoji = '📚';
    message = 'Keep studying! You will get better!';
  } else {
    emoji = '💪';
    message = 'Don\'t give up! Practice makes perfect!';
  }

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultMessage').textContent = message;
}

// Restart quiz
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;

  document.getElementById('resultScreen').classList.add('hidden');
  document.getElementById('quizScreen').classList.remove('hidden');
  showQuestion();
}