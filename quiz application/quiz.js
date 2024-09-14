const quiz = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: 0
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
      correctAnswer: 1
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
      correctAnswer: 0
    },
    {
      question: "What is the atomic number of hydrogen?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  const scoreThreshold = 3; // The threshold to win
  
  const questionElement = document.getElementById("question");
  const resultElement = document.getElementById("result");
  const resultGifElement = document.getElementById("result-gif");
  
  function loadQuestion() {
    if (currentQuestionIndex < quiz.length) {
      const currentQuestion = quiz[currentQuestionIndex];
      questionElement.innerHTML = currentQuestion.question;
      document.querySelectorAll("button").forEach((button, index) => {
        button.innerHTML = currentQuestion.options[index];
      });
    } else {
      endQuiz();
    }
  }
  
  function answerQuestion(selectedOption) {
    if (quiz[currentQuestionIndex].correctAnswer === selectedOption) {
      score++;
    }
    currentQuestionIndex++;
    loadQuestion();
  }
  
  function endQuiz() {
    questionElement.style.display = "none";
    document.querySelectorAll("button").forEach(button => {
      button.style.display = "none";
    });
  
    resultElement.style.display = "block";
    resultGifElement.style.display = "block";
  
    if (score >= scoreThreshold) {
      resultElement.innerHTML = `Congratulations! You scored ${score} and won!`;
      resultGifElement.src = "internin-job.gif"; // Winning GIF
    } else {
      resultElement.innerHTML = `You scored ${score}. Try again!`;
      resultGifElement.src = "oh-no-om-nom.gif"; // Losing GIF
    }
  }
  
  loadQuestion();
  