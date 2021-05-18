// Globals

// Available Levels
const levels = {
    easy: 10,
    medium: 5,
    hard: 3
  };
  
  // To change level
  const currentLevel = levels.easy;

  
  let time = currentLevel;
  let score = 0;
  let isPlaying;
  
  // DOM Elements
  const wordInput = document.querySelector('#word-input');
  const currentWord = document.querySelector('#current-word');
  const scoreDisplay = document.querySelector('#score');
  const timeDisplay = document.querySelector('#time');
  const message = document.querySelector('#message');
  const seconds = document.querySelector('#seconds');
  const highscoreDisplay = document.querySelector('#highscore');
  
  const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  const init = () => {
    //show the word
    showWord(words);
    // console.log('init');
    setInterval(countDown, 1000);
    setInterval(checkStatus, 50);
    wordInput.addEventListener('input', startMatch);
  }

  const showWord = (words) => {
    const randomIndex = Math.floor(Math.random() * 30);
    currentWord.innerHTML = words[randomIndex];
  }

  const countDown = () => {
      if(time > 0) {
        time -= 1;
      } else if(time === 0) {
          isPlaying = false;
        //   console.log('Game Over!');
      }
      timeDisplay.innerHTML = time;
  }

  const checkStatus = () => {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        highscoreDisplay.innerHTML = score;
        scoreDisplay.innerHTML = '0';
        score = 0;
    }
  }

  const startMatch = () => {
      if(matchWords()) {
        isPlaying = true;
        time = 11;
        showWord(words);
        wordInput.value = '';
        score++;
      }

      scoreDisplay.innerHTML = score;
  }

  const matchWords = () => {
      if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'message';
        return true;
      } else {
        message.innerHTML = '';
        return false;
      }
  }

  window.addEventListener('load', init);