let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');
let info = calendar.querySelector('.info')

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',]
draw(body,year, month)

function draw(body, year, month) {
    let arr = range(getLastDay(year, month));

    let firstWeekDay = getFirstWeekDay(year, month);
    let lastWeekDay = getLastWeekDay(year,month); 
    let chunk_res = chunk(normalize(arr, firstWeekDay, 6- lastWeekDay), 7);
    createTable(body, chunk_res)
    info.textContent = months[month] + ' ' + year;
}

function createTable(parent, arr) {
    parent.textContent = '';
    let cells = [];
    for (let sub of arr) {
        let tr = document.createElement('tr');

        for (let day of sub) {
            let td = document.createElement('td');
            td.textContent = day;
            tr.appendChild(td);

            cells.push(td)
        }

        parent.appendChild(tr)
    }

    return cells
}

function normalize(arr, left,right) {
    for (let i = 0; i < left; i++) {
        arr.unshift('')
    }
    for (let i = 0; i < right; i++) {
        arr.push('')
    }
    return arr
    
}

function getFirstWeekDay(year, month) {
    let date = new Date(year, month, 0);
    let num = date.getDay();

    if (num == 0) {
        return 6;
    } else {
        return num - 1
    }
}

function getLastWeekDay(year, month) {
    let date = new Date(year, month + 1, 0);
    let num = date.getDay();

    if (num == 0) {
        return 6;
    } else {
        return num - 1
    }
}
function getLastDay(year, month) {
    let lastdate = new Date(year, month + 1, 0);
    return lastdate.getDate();
}

function range(count) {
    let arr = [];

    for (let i = 1; i <= count; i++) {
        arr.push(i);
    }
    return arr;
}

function chunk(arr, n) {
    let result = [];
    let count = Math.ceil(arr.length / n);

    for (let i = 0; i < count; i++) {
        let elems = arr.splice(0, n)
        result.push(elems)
    }
    return result
}
function getNextYear(year, month) {
    if (month == 11) {
        return year += 1
    }
    return year
}
function getPrevYear(year, month) {
    if (month == 0) {
        return year -= 1
    }
    return year
}
function getNextMonth(month) {
    if (month == 11) {
        return month = 0
    }
    return month += 1
}
function getPrevMonth(month) {
    if (month == 0) {
        return month = 11
    }
    return month -= 1
}
prev.addEventListener('click', (event) => {
    event.preventDefault();
    body.textContent = '';
    draw(body, getPrevYear(year, month), getPrevMonth(month))
    year = getPrevYear(year, month)
    month = getPrevMonth(month)
    
})
next.addEventListener('click', (event) => {
    event.preventDefault();
    body.textContent = '';
    draw(body, getNextYear(year, month), getNextMonth(month))
    year = getNextYear(year, month)
    month = getNextMonth(month)
})