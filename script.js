
// function handlekeybordkeyupEvent(event) {
//     const playerPressed = event.key;
//     console.log(playerPressed);

//     const currentAlphabetElements = document.getElementById('randomLetter');
//     const currentAlphabet = currentAlphabetElements.innerText;
//     const tolowerCase = currentAlphabet.toLowerCase();
//     // console.log(tolowerCase);
//     if (playerPressed === tolowerCase) {
//         console.log("you got point");
//         continueGame();
//     }else{
//         console.log("please press the right key");
//     }
    
// }
function handleKeyBoardButtonPress(event) {
    const playerPressed = event.key; 
    

    const currentAlphabetElement = document.getElementById('randomLetter');
    const currentAlphabet =currentAlphabetElement.innerText;
    const lowercaseAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,lowercaseAlphabet);

    if (playerPressed === lowercaseAlphabet) {
        console.log("you get a point");
        // console.log("you have pressed corectly" ,lowercaseAlphabet);
        const currentScoreElement = document.getElementById('current-score')
        const currentElement = currentScoreElement.innerText;
        const currentScore = parseInt(currentElement)
        
        
        const newScore = currentScore + 1;
        
        // console.log(newScore);

        currentScoreElement.innerText=newScore;

        removeBackgroundColorById(lowercaseAlphabet);
        continueGame();
    }else{
        console.log("you lose a point ,next time best try");
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);


        const newlLife = currentLife -1;

        currentLifeElement.innerText = newlLife;

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
    continueGame();
}

