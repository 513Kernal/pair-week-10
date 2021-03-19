let problem = {}
let score = 0
let problemNum = 1


document.addEventListener("DOMContentLoaded",()=>{
  startNewProblemSet()
  addListenerToAnswers()
  reset()
})

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
  }

  function startNewProblemSet(){
      generateAndDisplayProblem()
  }

  function generateAndDisplayProblem(){
      let left = getRandomNumber(10)
      let right = getRandomNumber(10)
      let answer = left * right
      problem = {
          left: left,
          right: right,
          answer:answer
        }
      const pContainer = document.getElementById('problem')
      const expression = `${problem.left} * ${problem.right}`
      pContainer.querySelector('div.expression').innerText = expression
      
      //generate the answers
      let answers = [problem.answer]

      //let's be fancy and get the number of answers based on how many spots we have
      const liAnswerArray = document.querySelectorAll('section#answers ul li')
      for (let i = 0; i<liAnswerArray.length -1 ;i ++){
        answers.push(getRandomNumber(82))
      }
      //sort answers
      answers = shuffleArray(answers)

      //show answers
      for(let i = 0; i < liAnswerArray.length;i++){
        liAnswerArray[i].innerText = answers[i]
      }
  }


  function addListenerToAnswers(){
    const pushButtonArr = document.querySelectorAll('section#answers ul li')
    pushButtonArr.forEach(pushButton => {pushButton.addEventListener('click',(event)=>checkIfCorrect(event.target.innerText))})
  }


  function checkIfCorrect(selectedAnswer){
    if (selectedAnswer == problem.answer){
      updateScore()
    }
    updateProblemNum()
    generateAndDisplayProblem()
  }


  function updateScore(){
    let currentScore = document.querySelector('#problem p span.currentScore')
    currentScore.innerText = parseInt(currentScore.innerText)+1
  }


  function updateProblemNum(){
    let currentProblem = document.querySelector('#problem p span.currentProblem')
    currentProblem.innerText = parseInt(currentProblem.innerText)+1
    if(currentProblem.innerText == 11){
      endTest()
    }
  }



  function reset(){
    let resetBTN = document.getElementById('btnStartOver')
    resetBTN.addEventListener('click',resetValues)

  }

  function resetValues(){
    location.reload()
  }

  function endTest(){
    document.getElementById('answers').style.display = 'none'
    const hide = document.querySelector('.show-hide')
    hide.innerText = ''
    const expressionHide = document.querySelector('#problem div')
    expressionHide.innerText = ''
  }