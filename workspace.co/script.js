const tasksContainer = document.getElementById("tasks-container");
const submit = document.getElementById("submit-btn");
inputBox = document.getElementById("task-add");
submit.onclick = () =>{
    addTask()
    addTaskElement();
}


addTask = () => {
    newTask = document.getElementById("task-add").value;
    document.getElementById('task-add').value = ''
    console.log(newTask);
}

inputBox.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
        document.getElementById("submit-btn").click();
    }
})

addTaskElement = () => {
    let newTaskEntry = document.createElement("h3")
    hi.innerText = newTask;
    tasksContainer.appendChild(newTaskEntry);
}



