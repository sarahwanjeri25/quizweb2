const questions = [
    {
      question: 'What is the rarest blood type?',
      answers: [
        { text: 'AB-Negative', correct: true },
        { text: 'O', correct: false }
      ]
    },
    {question: 'How long does it take for light to reach the Earth after leaving the surface of the sun?',
    answers: [
      { text: 'instantly', correct: false },
      { text: '35 seconds', correct: false },
      { text: 'average of 8 minutes and 20 seconds', correct: true },
      {text: ' 2 minutes',correct : false}
    ]

    },
    {
      question: 'What sport does Cristiano Ronaldo play?',
      answers: [
        { text: 'Football', correct: true },
        { text: 'Tennis', correct: false },
        { text: 'Skateboarding', correct: false },
        { text: 'Racing', correct: false }
      ]
    },
    {
    question: 'Which of the following is not one of the  three smallest bones in the human body',
      answers: [
        { text: 'Stirrup', correct: false },
        { text: 'Tympanum', correct: true },
        { text: 'Hammer', correct: false },
        { text: 'Anvil', correct: false }
      ]
    },
    {
      question: "“Keep Calm and Carry On” is the slogan of which nation?",
      answers: [
        { text: 'Britain', correct: true },
        { text: 'Switzerland', correct: false },
        { text: 'Japan', correct: false },
        { text: 'Germany', correct: false }
      ]
    },
    {
        question: "what is the ratio of a circle's circumference to its diameter more commonly known as?",
        answers: [
          { text: 'Archimede', correct: false },
          { text: 'Polynomial', correct: false },
          { text: 'Pi', correct: true },
          { text: 'Radion', correct: false }
        ]
      },
    {
      question: '"Fe" is the chemical symbol for which element?',
      answers: [
        { text: 'Iron', correct: true },
        { text: 'Oxygene', correct: false },
        { text: 'Potassium', correct: false },
        { text: 'Gold', correct: false }
      ]
    },
    {
        question:"Who was the last president of the Soviet Union",
        answers:[
            {text:'Konstantin Cherneko', correct:false},
            {text:'Vladimir Putin', correct:false},
            {text:'Nikita Khrushchev', correct:false},
            {text:'Mikhail Gorbachev', correct:true},

        ]
    }

  ]



const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let RandomQuestions, currentQuestion

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestion++
  setNextQuestion()
})

//starting quiz
function startGame() {
  startButton.classList.add('hide')
  RandomQuestions = questions.sort(() => Math.random() - .5)
  currentQuestion = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

//move to next question
function setNextQuestion() {
  resetState()
  showQuestion(RandomQuestions[currentQuestion])
}


//displaying the question
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (RandomQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}



