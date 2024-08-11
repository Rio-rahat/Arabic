// Arabic letters
const arabicLetters = ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];

// Function to create the Arabic letter divs
function createLetterDivs() {
    const container = document.querySelector('.container');

    arabicLetters.forEach(letter => {
        const letterDiv = document.createElement('div');
        letterDiv.classList.add('letter');
        letterDiv.textContent = letter;

        letterDiv.addEventListener('click', () => playLetterSound(letter));

        container.appendChild(letterDiv);
    });
}

// Function to load the Arabic letter audio files
function loadAudioFiles() {
    arabicLetters.forEach(letter => {
        const audioElement = document.createElement('audio');
        audioElement.src = `audio/${letter}.mp3`;
        audioElement.preload = 'auto';

        letterAudioMap[letter] = audioElement;
    });
}
// Function to play the Arabic letter pronunciation
// Dictionary to store audio elements for each letter
const letterAudioMap = {};

// Function to play the Arabic letter pronunciation
function playLetterSound(letter) {
    const audioElement = letterAudioMap[letter];

    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.play();
    }
}



// Initialize the website
createLetterDivs();
loadAudioFiles();
