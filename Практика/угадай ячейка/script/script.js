let td = document.querySelectorAll('td');
let count = document.querySelector('#counter');
let table = document.querySelector('#table');
let start = document.querySelector('#btn');

let k = 1;
for (let elem of td) {
	elem.textContent = k;
	k++;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

start.addEventListener('click', () => {
	let set = new Set();
	while (set.size < 10) {
		set.add(getRandomInt(1, 100));
	}
	let time = 60;
	let timerId = setInterval(() => {
		--time;
		count.textContent = time;
		if (time == 0) {
			clearInterval(timerId);
			table.disabled = true;
			alert('Вы проиграли!')
		}
	}, 1000)
	for (let elem of td) {
			for (let i = 0; i <= 9; i++) {
				if (set.has((+elem.textContent))) {
					elem.addEventListener('click', () => {
						elem.classList.add('g');
                        // alert('вы угадали!!!')
					})
				} else {
					elem.addEventListener('click', () => {
						elem.classList.add('r')
					})
				}
			}
	}
})
