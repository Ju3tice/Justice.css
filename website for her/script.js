function showMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function animateHeart() {
    const heart = document.getElementById('heart');
    heart.classList.add('animate-heart');
    setTimeout(() => {
        heart.classList.remove('animate-heart');
    }, 1000);
}

function shakeElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('shake');
    setTimeout(() => {
        element.classList.remove('shake');
    }, 500);
}

function bounceElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bounce');
    setTimeout(() => {
        element.classList.remove('bounce');
    }, 1000);
}

function changeColor() {
    const messageBox = document.getElementById('message-box');
    const randomColor = getRandomColor();
    messageBox.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Play background music
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.play();