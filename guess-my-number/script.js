// Game variables
let secretNumber;
let score;
let highscore = 0;
let gameActive = true;

// DOM elements
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.btn-check');
const againBtn = document.querySelector('.btn-again');
const bodyEl = document.body;


const initGame = () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  gameActive = true;
  
  
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  scoreEl.textContent = score;
  guessInput.value = '';
  
  
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  
  
  guessInput.disabled = false;
  checkBtn.disabled = false;
};


const displayMessage = (message) => {
  messageEl.textContent = message;
};


const checkGuess = () => {
  if (!gameActive) return;
  
  const guess = Number(guessInput.value);
  
 
  if (!guess || guess < 1 || guess > 20) {
    displayMessage('⛔ Enter a number between 1 and 20!');
    return;
  }
  
 
  if (guess === secretNumber) {
    
    displayMessage('🎉 Correct Number!');
    numberEl.textContent = secretNumber;
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    gameActive = false;
    
    
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
    
  
    guessInput.disabled = true;
    checkBtn.disabled = true;
  } else {
   
    if (score > 1) {
      displayMessage(guess > secretNumber 
        ? '📈 Too high!' 
        : '📉 Too low!');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreEl.textContent = '0';
      gameActive = false;
      
      
      numberEl.textContent = secretNumber;
      
     
      guessInput.disabled = true;
      checkBtn.disabled = true;
    }
  }
};


checkBtn.addEventListener('click', checkGuess);
againBtn.addEventListener('click', initGame);


guessInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && gameActive) {
    checkGuess();
  }
});

initGame();