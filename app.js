document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('taskInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function removeTask(button) {
    var taskItem = button.parentElement;
    taskItem.remove();
}
