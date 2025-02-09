let buttonOpening = document.querySelector('.button-opening');
const heartsContainer = document.querySelector('.hearts-container');
const heartBig = document.querySelector('.heart-big');
const heartPText = document.querySelector('.heart-p-text');
const container = document.querySelector('.container');









function animBigHeart() {
    for (let i = 0; i < 400; i++) {
        heartBig.style.display = 'block'
        setTimeout(() => {

            heartBig.style.width = `${i}px`;
            heartBig.style.height = `${i}px`;
            buttonOpening.style.display = 'none';
            console.log(i)
        }, i * 2);

    }
    setTimeout(() => {
        heartBig.classList.add('heart-big-active');
        setTimeout(() => {
            heartBig.classList.remove('heart-big-active')
            heartPText.classList.add('heart-p-text-active');
        }, 5000)

    }, 1000)
    setTimeout(() => {
        heartBig.classList.remove('heart-big-active');
        heartPText.classList.remove('heart-p-text-active');
        // for (let i = 10; i > 0  ; i--) {
        //     setTimeout(() => {
        //         heartBig.style.opacity = `${1-0.1}`;

        //         console.log(i)
        //     }, i * 2);
          
        // }
        heartBig.style.display = 'none';
        container.classList.add('container-active');
    }, 7000)
   

    console.log('click')
}



// function sendMessage() {
//     const message = document.getElementById('message').value;
//     if (message.trim() === "") {
//         alert("Напиши что-нибудь милое!");
//     } else {
//         alert("Сообщение отправлено: " + message);

//     }
// }





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