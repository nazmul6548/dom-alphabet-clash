const audio = new Audio()
const isGamePlay = false

function handleKeyBoardButtonPress(event) {
  if (isGamePlay === false)return
  const playerPressed = event.key;
  if (playerPressed === "Escape") {
    gameover();
  }

  const currentAlphabetElement = document.getElementById("randomLetter");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (playerPressed === expectedAlphabet) {
    console.log("you get a point");
    audio.src ="./audio/mixkit-classic-click-1117.wav";
    audio.play();

    const currenscore = getTextElementValueId("current-score");

    const newScore = currenscore + 1;
    setTextElementValueById("current-score", newScore);
    const news = currenscore + 1;
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you lose a point ,next time best try");
    const currentLife = getTextElementValueId("current-life");
    const updateLife = currentLife - 1;
    setTextElementValueById("current-life", updateLife);
    audio.src ="./audio/mixkit-arcade-game-jump-coin-216.wav";
    audio.play();

    if (updateLife === 0) {
      gameover();
    }
  }
}
document.addEventListener("keyup", handleKeyBoardButtonPress);
function continueGame() {
  const alphabet = getRandomAlphabet();

  const presentLetter = document.getElementById("randomLetter");
  presentLetter.innerText = alphabet;

  setbackgroundColorbyid(alphabet);
}
function play() {
  
  hideElementById("home-screen");
  hideElementById("final-Score");
  showElementsById("play-ground");
  //
  isGamePlay = true;

  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}
function gameover() {
  hideElementById("play-ground");
  showElementsById("final-Score");
  const lastscore = getTextElementValueId("current-score");
  console.log(lastscore);
  setTextElementValueById("last-score", lastscore);

  const currentAlphabet = getElementTextbyId("randomLetter");

  removeBackgroundColorById(currentAlphabet);
}
