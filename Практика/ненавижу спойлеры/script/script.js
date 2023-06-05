let items = document.querySelectorAll('.toggle');

for (let item of items) {
    let div = document.createElement('div');
    item.parentElement.appendChild(div);
    div.classList.add('active')
    div.classList.toggle('black')
    item.addEventListener('click', (event) => {
        event.preventDefault();
        item.parentElement.nextElementSibling.classList.toggle('active')
        div.classList.toggle('active')
    })
}