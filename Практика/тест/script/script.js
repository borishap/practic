let test = document.querySelector('#test');
let button = document.querySelector('#button');
let questions = [
    {
        text: 'из чего пьют чай?',
        right: 2,
        variants: [
            'ведро',
            'стакан',
            'чашка'
        ]
    },
    {
        text: 'кто гэй?',
        right: 0,
        variants: [
            'я',
            'я',
            'костя'
        ]
    },
    {
        text: 'кирпич, ананас, коленвал?',
        right: 0,
        variants: [
            'кирпич',
            'ананас',
            'коленвал'
        ]
    }
]
for (let question of questions) {
    let div = document.createElement('div');
    div.innerHTML = '<p>' + question.text + '</p>'
    test.appendChild(div)
}
for (let i = 0; i < test.childElementCount; i++) {
    for (let j = 0; j < test.childElementCount; j++) {
        let label = document.createElement('label');
        test.children[i].appendChild(label)
        let input = document.createElement('input')
        input.setAttribute('type', 'radio');
        input.setAttribute('name', i + 1);
        label.appendChild(input)
        label.innerHTML += questions[i].variants[j]
    }
}
let divs = test.querySelectorAll('div')
for (let div of divs) {
    let inputs = div.querySelectorAll('label input')
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name == questions[i].right + 1) {
            inputs[i].setAttribute('data-right', '')
        }
    }
}
button.addEventListener('click', () => {
    let inputs = test.querySelectorAll('input')
    for (let input of inputs) {
        console.log(input)
        if (input.checked && input.hasAttribute('data-right')) {
            input.parentElement.classList.add('g')
        } else if (input.checked) {
            input.parentElement.classList.add('r')
        }
    }
})