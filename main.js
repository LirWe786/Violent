let buttonOpening = document.querySelector('.button-opening');
const heartsContainer = document.querySelector('.hearts-container');
const heartBig = document.querySelector('.heart-big');
const heartPText = document.querySelector('.heart-p-text');
const container = document.querySelector('.container');









function animBigHeart() {
    heartBig.classList.add('unHiden');
    buttonOpening.style.display = 'none';
    setTimeout(() => {
        heartBig.classList.add('heart-big-active');
    }, 3000)
    heartPText.classList.add('unHiden');
    setTimeout(() => {
        heartBig.classList.remove('unHiden');
        heartBig.classList.add('hiden');
        heartPText.classList.remove('unHiden');
        heartPText.classList.add('hiden');
        setTimeout(() => {
            container.classList.add('container-active');
            }, 2000)
    }, 7000)
    

    console.log('click')
}

// анимация сердечек

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Рандомный размер сердечка
    const size = Math.random() * 30 + 10; // от 10px до 40px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Рандомная позиция по горизонтали
    heart.style.left = Math.random() * 100 + 'vw';

    // Рандомная скорость падения
    const duration = Math.random() * 3 + 2; // от 2s до 5s
    heart.style.animationDuration = `${duration}s`;

    // Удаление сердечка после завершения анимации
    heart.addEventListener('animationend', () => {
        heart.remove();
    });

    heartsContainer.appendChild(heart);
    setInterval(() => {
        heart.remove();
    }, 100 * duration * 700);
}

// Создаем новые сердечки каждые 300ms
setInterval(createHeart, 300);



//eventListeners

buttonOpening.addEventListener('click', () => {
    animBigHeart()
})
buttonOpening.addEventListener('mouseover ', () => {
    buttonOpening.classList.remove('button-opening-active');
    console.log('get')
});
buttonOpening.addEventListener('mouseout', () => {
    buttonOpening.classList.add('button-opening-active');
    console.log('getOut')
});