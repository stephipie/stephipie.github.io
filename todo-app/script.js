const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let listItem = [];

todoForm.addEventListener("submit", function submitForm(event){
    event.preventDefault();
    var taskName = todoInput.value;
    taskName.trim();
    // const listItem = document.createElement("li");
    // Early - Return
    if (taskName === '') {
        alert("Bitte füge eine neue Aufgabe hinzu");
        return false;
    };
    // Task added to list
    addNewTask(taskName);
    console.log("Formular übertragen");
    // Clear taskName
    taskName = "";
    // Select all Input items within the form-element
    var allInputs = todoForm.querySelectorAll("input");
    // All Input added from user will be cleared 
    allInputs.forEach(singleInput => singleInput.value = "");
});

function addNewTask(taskForm) {
    // todoList.innerHTML = '';
    const taskText = taskForm;
    // Id for our task
    var date = Date.now();
    // Define Object
    const task = {
        status: false, 
        textInput: taskText,
        id: date
    };
    // Add Object to Array
    listItem.push(task);

    // Add new task to task-list
    listItem.forEach((task) => {
        const checkBox = document.createElement("input");
        checkBox.setAttribute('type','checkbox');
        checkBox.setAttribute('aria-label','Aufgabe erledigen');

        const span = document.createElement("span");
        span.innerText = task.id + ' ' + task.textInput;
        
        const button = document.createElement("button");
        button.innerText = "Löschen";
        button.setAttribute('aria-label','Aufgabe löschen');
        
        const taskListItem = document.createElement("li");
        taskListItem.appendChild(checkBox);
        taskListItem.appendChild(span);
        taskListItem.appendChild(button);

        todoList.appendChild(taskListItem);

        // Function of delete-button
        button.addEventListener('click', () => {
            const actualListItem = button.parentElement;
            todoList.removeChild(actualListItem);
        });

    listItem.pop(task.id);
    });
};
