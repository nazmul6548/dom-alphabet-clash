function hideElementById(paramsid) {
    const element = document.getElementById(paramsid);
    element.classList.add('hidden');
    
}

function showElementsById(paramsid) {
    const element = document.getElementById(paramsid);
    element.classList.remove('hidden');
}

function setbackgroundbyid(paramsid) {
    const element = document.getElementById(paramsid);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(paramsid) {
    const element =document.getElementById(paramsid);
    element.classList.remove('bg-orange-400');
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets= alphabetString.split('');
    // console.log(alphabets);


    const randomNumber =Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet=alphabets[index];
    console.log(index,alphabet);

    return alphabet;
}