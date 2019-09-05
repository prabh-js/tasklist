const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListners();

function loadEventListners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', deleteTasks);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {

if (taskInput.value === '') {
    alert('Add a task');
}
const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode(taskInput.value));

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"/>';
li.appendChild(link);

taskList.appendChild(li);

taskInput.value = '';

e.preventDefault();

}

function deleteTasks(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?'))
        e.target.parentElement.parentElement.remove();
    }
}

function clearTasks(e) {

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e) {

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    })
}