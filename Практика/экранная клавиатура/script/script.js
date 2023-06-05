let key = document.querySelectorAll('.j');
let caps = document.querySelector('#caps');
let space = document.querySelector('#space');
let input = document.querySelector('#input')

for (let elem of key) {
	elem.addEventListener('click', () => {
		inp.value += elem.textContent;
	})
	caps.addEventListener('click', () => {
		elem.textContent = elem.textContent.toUpperCase();
	})
	caps.addEventListener('dblclick', () => {
		elem.textContent = elem.textContent.toLowerCase();
	})
}
space.addEventListener('click', () => {
	inp.value += ' ';
})