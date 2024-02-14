
function handleKeyBoardButtonPress(event) {
    const playerPressed = event.key; 
    if (playerPressed === 'Escape') {
        gameover()
    }
    

    const currentAlphabetElement = document.getElementById('randomLetter');
    const currentAlphabet =currentAlphabetElement.innerText;
    const lowercaseAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,lowercaseAlphabet);

    if (playerPressed === lowercaseAlphabet) {
        console.log("you get a point");
        const currenscore =getTextElementValueId('current-score');
        console.log(currenscore);
        const newScore = currenscore + 1;
        setTextElementValueById('current-score',newScore)
        // 
        // console.log("you have pressed corectly" ,lowercaseAlphabet);
        // const currentScoreElement = document.getElementById('current-score')
        // const currentElement = currentScoreElement.innerText;
        // const currentScore = parseInt(currentElement)
        // const newScore = currenscore + 1;
        
        
        
        // currentScoreElement.innerText=newScore;
        // // console.log(newScore);

        // removeBackgroundColorById(lowercaseAlphabet);
        // continueGame();
    }else{
        console.log("you lose a point ,next time best try");
        const currentLife = getTextElementValueId('current-life');
        const updateLife =currentLife - 1;
        setTextElementValueById('current-life',updateLife);

        if (updateLife === 0) {
            gameover();
        }
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);


        // const newlLife = currentLife -1;

        // currentLifeElement.innerText = newlLife;

        // if (newlLife === 0) {
        //     gameover();
        // }

    }

}
document.addEventListener('keyup',handleKeyBoardButtonPress)
function continueGame() {
    const alphabet = getRandomAlphabet()
    // console.log(alphabet);

    const presentLetter = document.getElementById('randomLetter');
    presentLetter.innerText=alphabet;

    setbackgroundbyid(alphabet)
}
function play() {
    hideElementById('home-screen')
    showElementsById('play-screen')
    hideElementsById('final-Score')
// 

setTextElementValueById('current-life',5)
setTextElementValueById('current-score',0)

    continueGame();
}
function gameover() {
    hideElementById('play-screen')
    showElementsById('final-Score');
    const lastscore = getTextElementValueId('current-score');
    console.log(lastscore);
    setTextElementValueById('last-score',lastscore)
}
const currentAlphabet =getElementTextbyId('current-alphabet');
// console.log(currentAlphabet);
removeBackgroundColorById(currentAlphabet);
