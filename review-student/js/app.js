let problem = {}

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
  }

  document.addEventListener("DOMContentLoaded",()=>{
      startNewProblemSet()
  })

