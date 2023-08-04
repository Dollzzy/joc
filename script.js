const questionTextElement = document.getElementById("questionText");
const answersContainer = document.querySelector(".answers");
const resultElement = document.getElementById("result");
const questions = [
    {
      question: "Cine a fost primul împărat al Romei?",
      options: ["Augustus", "Julius Caesar", "Nero", "Caligula"],
      correctIndex: 0
    },
    {
      question: "Care a fost numele dinastiei conduse de regina Cleopatra?",
      options: ["Ptolemeii", "Borgia", "Hanover", "Medici"],
      correctIndex: 0
    },
    {
      question: "În ce an a avut loc Marea Schismă a Bisericii?",
      options: ["1054", "1215", "1377", "1439"],
      correctIndex: 0
    },
    {
      question: "Cine a fost Leonardo da Vinci?",
      options: ["Un pictor italian", "Un matematician grec", "Un filosof german", "Un arhitect spaniol"],
      correctIndex: 0
    },
    {
      question: "Când a avut loc Revoluția Franceză?",
      options: ["1789", "1812", "1830", "1848"],
      correctIndex: 0
    },
    {
      question: "Care bătălie a marcat sfârșitul războiului din Vietnam?",
      options: ["Bătălia de la Hanoi", "Bătălia de la Saigon", "Bătălia de la Dien Bien Phu", "Bătălia de la Hue"],
      correctIndex: 2
    },
    {
      question: "Ce conducător celebru a condus expansiunea Imperiului Mongol?",
      options: ["Genghis Khan", "Attila", "Napoleon", "Alexander cel Mare"],
      correctIndex: 0
    },
    {
      question: "Cine a scris piesa de teatru \"Hamlet\"?",
      options: ["William Shakespeare", "Christopher Marlowe", "Molière", "Oscar Wilde"],
      correctIndex: 0
    },
    {
      question: "Care a fost primul președinte al Statelor Unite ale Americii?",
      options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
      correctIndex: 0
    },
    {
      question: "În ce an a avut loc Războiul de Independență al României?",
      options: ["1859", "1877", "1918", "1947"],
      correctIndex: 1
    },
    {
      question: "Care este cel mai lung fluviu din lume?",
      options: ["Nilul", "Amazonul", "Mississippi", "Gange"],
      correctIndex: 1
    },
    {
      question: "Care oraș este considerat \"Veneția Nordului\"?",
      options: ["Amsterdam", "Bruges", "Copenhaga", "Stockholm"],
      correctIndex: 0
    },
    {
      question: "Ce țară se află pe cea mai mare parte a Peninsulei Iberice?",
      options: ["Spania", "Portugalia", "Italia", "Grecia"],
      correctIndex: 0
    },
    {
      question: "Care sunt cele patru țări care formează Regatul Unit?",
      options: ["Anglia, Scoția, Irlanda, Țara Galilor", "Anglia, Scoția, Irlanda de Nord, Țara Galilor", "Anglia, Scoția, Irlanda, Munster", "Anglia, Scoția, Munster, Țara Galilor"],
      correctIndex: 1
    },
    {
      question: "Unde se află Muntele Everest?",
      options: ["Nepal", "China", "India", "Pakistan"],
      correctIndex: 0
    },
    {
      question: "Care este cel mai mare lac din lume după suprafață?",
      options: ["Marea Caspică", "Marea Superior", "Marea Baikal", "Marea Victoria"],
      correctIndex: 0
    },
    {
      question: "Care ocean se află la est de Africa?",
      options: ["Oceanul Indian", "Oceanul Pacific", "Oceanul Atlantic", "Oceanul Arctic"],
      correctIndex: 0
    },
    {
      question: "Ce țară este cunoscută ca \"Țara Soarelui-Răsare\"?",
      options: ["China", "Japonia", "India", "Thailanda"],
      correctIndex: 1
    },
    {
      question: "Care este capitala Canadei?",
      options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
      correctIndex: 3
    },
    {
      question: "În ce țară se află Machu Picchu?",
      options: ["Bolivia", "Peru", "Ecuador", "Chile"],
      correctIndex: 1
    },
    {
      question: "Cine este fondatorul Microsoft?",
      options: ["Bill Gates", "Steve Jobs", "Jeff Bezos", "Mark Zuckerberg"],
      correctIndex: 0
    },
    {
      question: "Ce limbaj de programare este folosit pentru dezvoltarea paginilor web?",
      options: ["HTML", "Python", "Java", "C++"],
      correctIndex: 0
    },
    {
      question: "Ce înseamnă acronimul \"URL\" în contextul web?",
      options: ["Uniform Resource Locator", "Universal Responsive Layout", "User Registration Link", "Ultimate Resource Library"],
      correctIndex: 0
    },
    {
      question: "Ce companie a lansat primul telefon iPhone?",
      options: ["Samsung", "Apple", "Google", "Sony"],
      correctIndex: 1
    },
    {
      question: "Care este cel mai folosit motor de căutare pe internet?",
      options: ["Bing", "Yahoo", "DuckDuckGo", "Google"],
      correctIndex: 3
    },
    {
      question: "Ce este \"cloud computing\"?",
      options: ["Procesul de modelare a fenomenelor meteorologice", "Stocarea și accesarea datelor prin internet", "Rețeaua globală de servere de internet", "Tehnologia de recunoaștere vocală"],
      correctIndex: 1
    },
    {
      question: "Ce înseamnă acronimul \"HTML\"?",
      options: ["Hypertext Markup Language", "High Tech Machine Learning", "Hyperloop Transport Mechanism Logic", "Hierarchical Text Manipulation Logic"],
      correctIndex: 0
    },
    {
      question: "Care este cel mai popular rețea de socializare la nivel mondial?",
      options: ["Instagram", "Twitter", "Facebook", "Snapchat"],
      correctIndex: 2
    },
    {
      question: "Ce este un \"emoji\"?",
      options: ["Un limbaj de programare", "Un joc video", "Un tip de virus informatic", "Un simbol grafic folosit în mesaje"],
      correctIndex: 3
    },
    {
      question: "Ce limbaj de programare este folosit pentru dezvoltarea aplicațiilor mobile în mediu Android?",
      options: ["Swift", "Java", "C#", "Ruby"],
      correctIndex: 1
    },
    {
      question: "Cine a fost domnitorul Țării Românești în timpul luptei de la Rovine?",
      options: ["Vlad Țepeș", "Mircea cel Bătrân", "Matei Basarab", "Mihai Viteazul"],
      correctIndex: 1
    },
    {
      question: "Cine a scris romanul \"Enigma Otiliei\"?",
      options: ["Ion Creangă", "Mihai Eminescu", "Ion Luca Caragiale", "George Călinescu"],
      correctIndex: 3
    },
    {
      question: "Care râu străbate orașul Cluj-Napoca?",
      options: ["Mureș", "Someș", "Prut", "Olt"],
      correctIndex: 1
    },
    {
      question: "Unde se află Castelul Peleș?",
      options: ["Brașov", "Sinaia", "București", "Cluj-Napoca"],
      correctIndex: 1
    },
    {
      question: "Care este moneda oficială a României?",
      options: ["Leul", "Euro", "Dolarul", "Lira"],
      correctIndex: 0
    },
    {
      question: "Ce eveniment a avut loc în decembrie 1989 în România?",
      options: ["Anexarea Basarabiei", "Revolutia din decembrie", "Independența României", "Unirea Transilvaniei cu România"],
      correctIndex: 1
    },
    {
      question: "Cine a fost poetul național al României?",
      options: ["George Coșbuc", "Mihai Eminescu", "Tudor Arghezi", "Ion Minulescu"],
      correctIndex: 1
    },
    {
      question: "Care este cel mai înalt vârf montan din România?",
      options: ["Moldoveanu", "Parângu Mare", "Omu", "Retezat"],
      correctIndex: 0
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
    question: "Ce companie a fost fondată de Mark Zuckerberg?",
    options: ["Amazon", "Apple", "Facebook", "Google"],
    correctIndex: 2
  },
  {
    question: "Cine a fost primul rege al României?",
    options: ["Carol I", "Ferdinand I", "Mihai I", "Alexandru Ioan Cuza"],
    correctIndex: 0
  },
  {
    question: "Care este capitala Italiei?",
    options: ["Madrid", "Paris", "Roma", "Lisabona"],
    correctIndex: 2
  },
  {
    question: "Cine a scris \"Romeo și Julieta\"?",
    options: ["William Shakespeare", "Friedrich Nietzsche", "Leo Tolstoy", "Jane Austen"],
    correctIndex: 0
  },
  {
    question: "Ce este Hadrian's Wall?",
    options: ["Un muzeu din Londra", "Un râu din Italia", "O cetate în Grecia", "Un zid roman în Marea Britanie"],
    correctIndex: 3
  },
  {
    question: "Cine a scris \"Odiseea\"?",
    options: ["Homer", "Plato", "Socrates", "Aristotle"],
    correctIndex: 0
  },
  {
    question: "În ce an a fost lansat primul website în lume?",
    options: ["1991", "1993", "1995", "1997"],
    correctIndex: 1
  },
  {
    question: "Care este capitala Japoniei?",
    options: ["Tokyo", "Kyoto", "Osaka", "Seoul"],
    correctIndex: 0
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
