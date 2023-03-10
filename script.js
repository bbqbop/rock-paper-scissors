const rPs = ['rock','paper','scissor']
let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0;

// DIV buttons
const buttons = document.querySelectorAll('button');
  const rock = document.querySelector('#rock');
  rock.addEventListener('click', () => playRound(0))
  const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => playRound(1))
  const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => playRound(2))
  
// DIV container
const container = document.querySelector('.container')
const result = document.querySelector('.resultContainer');
const counter = document.querySelector('#counter');

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
}
function playRound(userChoice){
    let computerChoice = getComputerChoice()
    if (userChoice === computerChoice){ 
        result.innerHTML = `<div class='result'>DRAW!</div><div class='resultText'>${capitalize(rPs[userChoice])} vs ${capitalize(rPs[computerChoice])}</div>`;
        drawCounter += 1;
    } else if (
        userChoice == 0 && computerChoice == 2 || 
        userChoice == 1 && computerChoice == 0 ||
        userChoice == 2 && computerChoice == 1 ){
        result.innerHTML = `<div class='result'>WIN!</div><div class='resultText'><span id='win'>${capitalize(rPs[userChoice])}</span> vs ${capitalize(rPs[computerChoice])}</div>`;
        winCounter += 1;
   } else { 
        result.innerHTML = `<div class='result'>LOSE!</div><div class='resultText'>${capitalize(rPs[computerChoice])} vs <span id='win'>${capitalize(rPs[userChoice])}</span></div>`;
        loseCounter += 1;
    }
    if (winCounter === 5 || loseCounter === 5){
        gameOver()
        
    }
    counter.textContent = `WINS: ${winCounter} | LOSES: ${loseCounter} | DRAWS: ${drawCounter}`;

}
function gameOver (){
    buttons.forEach(button => button.remove())
    result.classList.add('gameover');
    if (winCounter > loseCounter
        ? result.textContent = `YOU WON` 
        : result.textContent = `YOU LOSE`);
    const restartBtn = document.createElement('button', id='restart');
    restartBtn.textContent = 'PLAY AGAIN';
    container.appendChild(restartBtn);  
    restartBtn.addEventListener('click', function(){location.reload()})
    ;
}






