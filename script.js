function play() {
    hideElementById('home-screen')
    showElementsById('play-screen')
    continueGame();
}

function continueGame() {
    const alphabet = getRandomAlphabet()
    console.log(alphabet);

    const presentLetter = document.getElementById('randomLetter');
    presentLetter.innerText=alphabet;

    setbackgroundbyid(alphabet)
}