const questionTextElement = document.getElementById("questionText");
const answersContainer = document.querySelector(".answers");
const resultElement = document.getElementById("result");

const questions = [
  
    {
      question: "Cine a fost primul președinte al Statelor Unite ale Americii?",
      options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
      correctIndex: 0
    },
    {
      question: "În ce an a avut loc Revoluția Industrială?",
      options: ["1756", "1804", "1872", "1769"],
      correctIndex: 2
    },
    {
      question: "Cine a scris lucrarea \"Originea speciilor prin selecție naturală\"?",
      options: ["Isaac Newton", "Galileo Galilei", "Charles Darwin", "Albert Einstein"],
      correctIndex: 2
    },
    {
      question: "Care a fost perioada cunoscută sub numele de \"Războaiele Napoleonice\"?",
      options: ["Secolul al XVII-lea", "Secolul al XIX-lea", "Secolul al XVIII-lea", "Secolul al XX-lea"],
      correctIndex: 1
    },
    {
      question: "Ce eveniment a marcat căderea Zidului Berlinului în 1989?",
      options: ["Primul Război Mondial", "Revoluția Americană", "Al Doilea Război Mondial", "Războiul Rece"],
      correctIndex: 3
    },
    {
      question: "Când a avut loc Războiul de Independență al României?",
      options: ["1866", "1812", "1877", "1918"],
      correctIndex: 2
    },
    {
      question: "Cine a fost liderul Mișcării pentru Drepturile Civile din SUA?",
      options: ["Malcolm X", "Jesse Jackson", "Martin Luther King Jr.", "Barack Obama"],
      correctIndex: 2
    },
    {
      question: "Unde a avut loc Revoluția Franceză?",
      options: ["Londra", "Berlin", "Roma", "Paris"],
      correctIndex: 3
    },
    {
      question: "Când a avut loc Revoluția Industrială?",
      options: ["1756", "1804", "1872", "1769"],
      correctIndex: 2
    },
    {
      question: "Cine a scris lucrarea \"Originea speciilor prin selecție naturală\"?",
      options: ["Isaac Newton", "Galileo Galilei", "Charles Darwin", "Albert Einstein"],
      correctIndex: 2
    }
  ];
  
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTextElement.textContent = currentQuestion.question;

  answersContainer.innerHTML = ""; // Curăță opțiunile de răspuns anterioare

  for (let i = 0; i < currentQuestion.options.length; i++) {
    const optionButton = document.createElement("button");
    optionButton.classList.add("answerButton");
    optionButton.textContent = currentQuestion.options[i];
    optionButton.addEventListener("click", () => checkAnswer(i));
    answersContainer.appendChild(optionButton);
  }
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  for (let i = 0; i < answersContainer.children.length; i++) {
    answersContainer.children[i].disabled = true;
    if (i === currentQuestion.correctIndex) {
      answersContainer.children[i].style.backgroundColor = "#66bb6a"; // Culoarea verde pentru răspunsul corect
    } else if (i === selectedIndex) {
      answersContainer.children[i].style.backgroundColor = "#ef5350"; // Culoarea roșie pentru răspunsul greșit
    }
  }

  if (selectedIndex === currentQuestion.correctIndex) {
    resultElement.textContent = "Răspuns corect!";
    correctAnswers++;
  } else {
    resultElement.textContent = "Răspuns greșit!";
    wrongAnswers++;
  }

  for (let i = 0; i < answersContainer.children.length; i++) {
    answersContainer.children[i].disabled = true;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      resultElement.textContent = "";
      displayQuestion();
    } else {
      showFinalResults();
    }
  }, 1500); // Așteaptă 1.5 secunde înainte de a trece la următoarea întrebare sau la scorul final
}

function showFinalResults() {
  questionTextElement.textContent = "Jocul s-a încheiat.";
  answersContainer.style.display = "none";
  resultElement.style.display = "none";
  
  const finalScoreElement = document.getElementById("finalScore");
  finalScoreElement.style.display = "block";

  const correctCountElement = document.createElement("p");
  correctCountElement.textContent = `Răspunsuri corecte: ${correctAnswers}`;
  finalScoreElement.appendChild(correctCountElement);

  const wrongCountElement = document.createElement("p");
  wrongCountElement.textContent = `Răspunsuri greșite: ${wrongAnswers}`;
  finalScoreElement.appendChild(wrongCountElement);
}

displayQuestion();
