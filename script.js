'use strict';

let playedPlayer = 1;
const playerOneBox = document.querySelector('.player--0');
const playerTwoBox = document.querySelector('.player--1');
const playerName = document.querySelectorAll('.name');
const button = document.querySelectorAll('.btn');
const currentScore = document.querySelectorAll('.current-score');
const score = document.querySelectorAll('.score');
let currentScoreNumber = 0,
  scoreNumberOne = 0,
  scoreNumberTwo = 0;
const diceImage = document.querySelector('.dice');
diceImage.classList.add('hideDice');

const movePlayerSign = function (activePlayer, inactivePlayer) {
  inactivePlayer.classList.remove('player--active');
  activePlayer.classList.add('player--active');
};
let gameStart = true;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    if (i == 0) {
      gameStart = true;
      playedPlayer = 1;
      (scoreNumberOne = 0), (scoreNumberTwo = 0);
      diceImage.classList.add('hideDice');
      for (let i = 0; i < currentScore.length; i++) {
        currentScore[i].textContent = '0';
      }
      for (let i = 0; i < score.length; i++) {
        score[i].textContent = '0';
      }
      for (let i = 0; i < playerName.length; i++) {
        playerName[i].textContent = `PLAYER ${i + 1}`;
      }
    } else if (i == 1) {
      let randomNumber = Math.trunc(Math.random() * 6) + 1;

      if (gameStart == true) {
        if (playedPlayer == 1 && gameStart == true) {
          if (randomNumber == 1) {
            playedPlayer = 2;
            movePlayerSign(playerTwoBox, playerOneBox);
            currentScoreNumber = 0;
            diceImage.setAttribute('src', 'dice-1.png');
          } else if (randomNumber == 2) {
            currentScoreNumber += 2;
            diceImage.setAttribute('src', 'dice-2.png');
          } else if (randomNumber == 3) {
            currentScoreNumber += 3;
            diceImage.setAttribute('src', 'dice-3.png');
          } else if (randomNumber == 4) {
            currentScoreNumber += 4;
            diceImage.setAttribute('src', 'dice-4.png');
          } else if (randomNumber == 5) {
            currentScoreNumber += 5;
            diceImage.setAttribute('src', 'dice-5.png');
          } else if (randomNumber == 6) {
            currentScoreNumber += 6;
            diceImage.setAttribute('src', 'dice-6.png');
          }
          currentScore[0].textContent = currentScoreNumber;
        } else if (playedPlayer == 2 && gameStart == true) {
          if (randomNumber == 1) {
            playedPlayer = 1;
            movePlayerSign(playerOneBox, playerTwoBox);
            currentScoreNumber = 0;
            diceImage.setAttribute('src', 'dice-1.png');
          } else {
            if (randomNumber == 2) {
              currentScoreNumber += 2;
              diceImage.setAttribute('src', 'dice-2.png');
            } else if (randomNumber == 3) {
              currentScoreNumber += 3;
              diceImage.setAttribute('src', 'dice-3.png');
            } else if (randomNumber == 4) {
              currentScoreNumber += 4;
              diceImage.setAttribute('src', 'dice-4.png');
            } else if (randomNumber == 5) {
              currentScoreNumber += 5;
              diceImage.setAttribute('src', 'dice-5.png');
            } else if (randomNumber == 6) {
              currentScoreNumber += 6;
              diceImage.setAttribute('src', 'dice-6.png');
            }
          }
          currentScore[1].textContent = currentScoreNumber;
        }
        diceImage.classList.remove('hideDice');
      } else if (gameStart == false) {
        currentScore[0].textContent = '0';
        score[0].textContent = '0';
      }
    } else if (i == 2) {
      if (gameStart == false) {
        currentScore[0].textContent = '0';
        score[0].textContent = '0';
      } else {
        if (
          (scoreNumberOne + currentScoreNumber >= 100 && playedPlayer == 1) ||
          (scoreNumberTwo + currentScoreNumber >= 100 && playedPlayer == 2)
        ) {
          gameStart = false;
          diceImage.classList.add('hideDice');
          for (let i = 0; i < 2; i++) {
            score[i].textContent = '0';
            currentScore[i].textContent = '0';
          }

          if (scoreNumberOne + currentScoreNumber >= 100) {
            playerName[0].textContent = '🎊THE WINNER🎊';
          } else if (scoreNumberTwo + currentScoreNumber >= 100) {
            playerName[1].textContent = '🎊THE WINNER🎊';
          }
        } else {
          if (playedPlayer == 1) {
            scoreNumberOne += currentScoreNumber;
            score[0].textContent = scoreNumberOne;
            playedPlayer = 2;
            movePlayerSign(playerTwoBox, playerOneBox);
            currentScore[0].textContent = '0';
          } else if (playedPlayer == 2) {
            scoreNumberTwo += currentScoreNumber;
            score[1].textContent = scoreNumberTwo;
            playedPlayer = 1;
            movePlayerSign(playerOneBox, playerTwoBox);
            currentScore[1].textContent = '0';
          }
        }
        currentScoreNumber = 0;
      }
    }
  });
}
