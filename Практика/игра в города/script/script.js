let inp = document.querySelector('#inp');
let message = document.querySelector('#message');
let game = document.querySelector('#game');
let fail = document.querySelector('.fail');
let players = document.querySelectorAll('.player')

let arr = [];

function check(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(value)) {
            if (arr[i - 1] )
            fail.classList.add('active');
            game.classList.add('gameover')
        }
    }
}

inp.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        for (let player of players) {
            player.classList.toggle('turn')
        }
        message.innerHTML += '<p>' + inp.value + '</p>';
        check(arr, inp.value);
        arr.push(inp.value);
        inp.value = '';
    }
})