const quizData = [
    {
        question: "Commonly Used Data Types Do Not Include?",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        correct: "b",
    },
    {
        question: "The Condition In an If/Else statement is Inclosed in?",
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parentheses",
        d: "Square Brackets",
        correct: "c",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('questions')
const a_text = document.getElementById('a_answer')
const b_text = document.getElementById('b_answer')
const c_text = document.getElementById('c_answer')
const d_text = document.getElementById('d_answer')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_answer.innerText = currentQuizData.a
    b_answer.innerText = currentQuizData.b
    c_answer.innerText = currentQuizData.c
    d_answer.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})