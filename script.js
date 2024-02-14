
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
        console.log("you have pressed corectly" ,lowercaseAlphabet);
        removeBackgroundColorById(lowercaseAlphabet);
        continueGame();
    }else{
        console.log("you lose a point ,next time best try");
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

