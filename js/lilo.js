const noBtn = document.getElementById('no');
const yes1Btn = document.getElementById('yes1');
const yes2Btn = document.getElementById('yes2');
const overlay = document.getElementById('overlay');
const responseMessage = document.getElementById('responseMessage');

function showMessage(message) {
    responseMessage.innerHTML = message;
    overlay.style.display = 'block';
    responseMessage.style.display = 'block';

    setTimeout(() => {
        overlay.style.display = 'none';
        responseMessage.style.display = 'none';
    }, 3000);
}

function moveButtonRandomly() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noBtn.offsetWidth - 40;
    const maxY = containerRect.height - noBtn.offsetHeight - 40;
    const minX = 20;
    const minY = 20;

    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

    noBtn.style.transform = 'scale(0.8)';
    setTimeout(() => {
        noBtn.style.transform = 'scale(1)';
    }, 200);
}

noBtn.addEventListener('mouseenter', moveButtonRandomly);
noBtn.addEventListener('click', moveButtonRandomly);

yes1Btn.addEventListener('click', () => {
    showMessage('¡Sabía que dirías que sí! 💙🌻<br><br>¡Será una cita perfecta!');
});

yes2Btn.addEventListener('click', () => {
    showMessage('¡Qué ternura! 😊🌺<br><br>¡Me emociona mucho ir contigo!');
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    responseMessage.style.display = 'none';
});
