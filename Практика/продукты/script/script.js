let namae = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');

function createCell(tr, value, name) {
    let td = document.createElement('td');
    td.textContent = value;
    td.classList.add(name);
    return tr.appendChild(td);
}
function recountTotal() {
    let costs = table.querySelectorAll('.cost');
    let res = 0;

    if (costs) {
        for (let i = 0; i < costs.length; i++) {
                res += (+costs[i].textContent);
        }
    }
    total.textContent = res;
}
function allowEdit(td) {
    td.addEventListener('dblclick', () => {
        let text = td.textContent;
        td.textContent = '';

        let input = document.createElement('input');
        input.value = text;
        input.focus();
        td.appendChild(input)

        input.addEventListener('keypress', (event) => {
            if (event.key == 'Enter') {
                td.textContent = input.value;

            if (td.classList.contains('price')) {
                let cost = td.parentElement.querySelector('.cost');
                let a = td.textContent;
                let resu = (+a) * amount.value;
                cost.textContent = resu;
                recountTotal();
            } if (td.classList.contains('amount')) {
                let cost = td.parentElement.querySelector('.cost')
                let b = td.textContent;
                let resu = price.value * (+b);
                cost.textContent = resu
                recountTotal();
            }
            }
        })
    })
}

add.addEventListener('click', () => {
    let tr = document.createElement('tr');
    
    allowEdit(createCell(tr, namae.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));
    createCell(tr, price.value * amount.value, 'cost');
    createCell(tr, 'удалить', 'remove').addEventListener('click', () => {
        tr.remove();
        recountTotal();
    })
    table.appendChild(tr);
    recountTotal();
})