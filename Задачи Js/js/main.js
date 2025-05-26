let arr = ['apple', 'orange','milk', 'bread', 'water'] ;
let container = document.querySelector('.container');
let ul = document.createElement('ul');






// функция: при нажатии на элемент добавляется инпут для редактирования элемента.
function func(){
    let input = document.createElement('input');//
    input.value = this.textContent;//
    this.textContent ='';//
    this.appendChild(input);//

    let finishEditing = () => {
        this.textContent = input.value;
        this.addEventListener('click', func)
    }
    input.addEventListener('blur', finishEditing)

    input.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
          finishEditing();
        }
      
    });
  this.removeEventListener('click', func);
  input.focus();

}

//функция для создания элемента списка

function createListItem(text) {
    let li = document.createElement('li');
    li.textContent = text;
    let itemText = li.textContent;
    li.innerHTML = `<span>${itemText}</span>`;
    let span = li.querySelector('span');
        
    span.addEventListener('click', func);

    let link = document.createElement('a');
    link.href = '';
    link.textContent = ' delete';
    li.appendChild(link);
    let link2 = document.createElement('a');
    link2.href = '';
    link2.textContent = ' [cross out]';
    li.appendChild(link2);

    link.addEventListener('click', function(e){
        e.preventDefault();
        li.remove();
    })
    link2.addEventListener('click', function(e) {
        e.preventDefault();
        span.classList.toggle('crossOut');
    })
    return li;
}

//из массива в список

arr.forEach(elem => {
    ul.appendChild(createListItem(elem));
      
});

container.appendChild(ul);

//инпут для добавления новых элементов

let input = document.createElement('input');
container.appendChild(input);
input.addEventListener('keypress', function(e) {
    if (e.key == 'Enter' && this.value.trim() !== '') {
        ul.appendChild(createListItem(this.value.trim()));
        this.value = '';
    }
});