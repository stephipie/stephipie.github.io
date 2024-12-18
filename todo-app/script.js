const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let listItem = [];

todoForm.addEventListener("submit", function submitForm(event) {
    event.preventDefault();
    // const taskText = input.value.trim();
    var taskName = todoInput.value;
    taskName.trim();
    // const listItem = document.createElement("li");
    // Early - Return
    if (taskName === '') {
        alert("Bitte füge eine neue Aufgabe hinzu");
        return false;
    };
    // Task added to list
    // addNewTask(taskName);
    // console.log("Formular übertragen");
    // Clear taskName
    // taskName = "";
    // Select all Input items within the form-element
    // var allInputs = todoForm.querySelectorAll("input");
    // All Input added from user will be cleared 
    // .forEach(singleInput => singleInput.value = "");
    const newTask = {
        id: Date.now(),
        textInput: taskName,
        status: false
    };
    listItem.push(newTask);
    // console.log(listItem);
    taskName = '';
    showTodos();
});

function showTodos() {
    todoList.innerHTML = '';
    // const taskText = taskForm;
    // Id for our task
    // var date = Date.now();
    // Define Object
    // const task = {
    //     status: false, 
    //     textInput: taskText,
    //     id: date
    // };
    // Add Object to Array
    // listItem.push(task);

    // Add new task to task-list
    listItem.forEach((task) => {
        const taskListItem = document.createElement("li");
        
        const checkBox = document.createElement("input");
        checkBox.type = 'checkbox';
        // checkBox.setAttribute('type','checkbox');
        checkBox.setAttribute('aria-label', 'Aufgabe erledigen');
        // showTodos();
        saveTodos();
        
        const span = document.createElement("span");
        // span.innerText = task.id + ' ' + task.textInput;
        span.innerText = task.textInput;
        
        const button = document.createElement("button");
        button.innerText = "Löschen";
        button.setAttribute('aria-label', 'Aufgabe löschen');
        // Function of delete-button
        button.addEventListener('click', () => {
            const actualListItem = button.parentElement;
            todoList.removeChild(actualListItem);
            listItem.pop(task.id);
            showTodos();
            saveTodos();
        });
        
        taskListItem.appendChild(checkBox);
        taskListItem.appendChild(span);
        taskListItem.appendChild(button);
        todoList.appendChild(taskListItem);
        // listItem.pop(task.id);
    });
    saveTodos();
};

// Create function to save todo´s
function saveTodos() {
    if (listItem.length === 0) {
        return;
    };
    const localStorageTodos = JSON.stringify(listItem);
    // console.log(localStorageTodos)
    localStorage.setItem("todos", localStorageTodos);
    // console.log(localStorage.getItem("todos"))
};
// saveTodos()
// Create load function 
function loadTodos() {
    const existingTodos = localStorage.getItem("todos");
    if (!existingTodos) {
        listItem = [];
    }
    // console.log(typeof (existingTodos));
    const parse = JSON.parse(existingTodos);
    listItem = parse;
    // console.log(listItem)
    // console.log(loadedTodosFromLocalStorage)
};
loadTodos();
showTodos();

