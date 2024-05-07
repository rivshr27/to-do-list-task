document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = document.getElementById('taskDescription');
    const addTaskButton = document.getElementById('addTask');
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    addTaskButton.addEventListener('click', function() {
        const taskName = taskInput.value.trim();
        const taskDesc = taskDescription.value.trim(); 

        if (taskName !== '') {
            const li = document.createElement('li');
            const taskText = taskName + (taskDesc ? ` - ${taskDesc}` : '');
            const taskTextNode = document.createTextNode(taskText);
            li.appendChild(taskTextNode);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'deleteButton';
            deleteButton.addEventListener('click', function() {
                li.remove();
            });

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.className = 'completedButton';
            completeButton.addEventListener('click', function() {
                li.classList.toggle('completed');
                if (li.parentNode === completedList) {
                    pendingList.appendChild(li);
                } else {
                    completedList.appendChild(li);
                }
            });

            li.appendChild(deleteButton);
            li.appendChild(completeButton);
            pendingList.appendChild(li); 

            taskInput.value = '';
            taskDescription.value = '';
        } else {
            alert('Please enter a task name.');
        }
    });
});
