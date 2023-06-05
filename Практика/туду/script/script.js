let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        let li = document.createElement('li');
        

        let task = document.createElement('span');
        task.classList.add('task')
        task.textContent = input.value;
        task.addEventListener('dblclick', () => {
            let change = document.createElement('input');
            change.value = task.textContent;
            task.textContent = '';
            change.addEventListener('keypress', (event) => {
                if (event.key == 'Enter') {
                    task.textContent = change.value;
                    change.remove();
                }
            })
            task.appendChild(change);
        })
        li.appendChild(task);

        let remove = document.createElement('span');
        remove.classList.add('remove')
        remove.textContent = 'удалить';
        remove.addEventListener('click', () => {
            remove.parentElement.remove();
        })
        li.appendChild(remove);

        let mark = document.createElement('span');
        mark.classList.add('mark')
        mark.textContent = 'сделано';
        mark.addEventListener('click', () => {
            mark.parentElement.classList.add('done')
        })
        li.appendChild(mark)
        
        list.appendChild(li)

        input.value = '';
    }
})