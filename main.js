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
        letterDiv.addEventListener('contextmenu', (e) => e.preventDefault()); // Prevents context menu on long press

        container.appendChild(letterDiv);
    });

    // Add dynamic tilt effect
    container.addEventListener('mousemove', (e) => {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        const centerX = container.offsetLeft + width / 2;
        const centerY = container.offsetTop + height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (-1) * (mouseY / height) * 15;
        const rotateY = (mouseX / width) * 15;

        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
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
const letterAudioMap = {};

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
