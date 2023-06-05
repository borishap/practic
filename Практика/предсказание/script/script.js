let timer = document.querySelector('#timer');
let start = document.querySelector('#start');
let stopper = document.querySelector('#stop');
let text = document.querySelector('#text');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let timerId;
let arr = ['Живи кайфуй балдей', 'Будет тяжело', 'Будьте осторожны, остерегайтесь пьяных водителей']
start.addEventListener('click', () => {
    start.classList.remove('active');
    stopper.classList.add('active');
    timerId = setInterval(() => {
        timer.textContent = getRandomInt(1, 3);
    }, 100)
})
stopper.addEventListener('click', () => {
    stopper.classList.remove('active');
    clearInterval(timerId);
    if (timer.textContent == 1) {
        text.textContent = arr[0];
        text.classList.add('g')
    } if (timer.textContent == 2) {
        text.textContent = arr[1];
        text.classList.add('r')
    } if (timer.textContent == 3) {
        text.textContent = arr[2];
        text.classList.add('r')
    }
})