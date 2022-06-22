//Defining variables

const tasksContainer = document.getElementById("tasks-container");
const submit = document.getElementById("submit-btn");
inputBox = document.getElementById("task-add");
//Color Changing Variables
const allTasksPress = document.getElementById("allTasks");
const schoolPress = document.getElementById("school");
const personalPress = document.getElementById("personal");
let allTasksPressBtnStatus = "not-active";
let schoolPressBtnStatus = "not-active";
let personalPressBtnStatus = "not-active";
// Creates the submit function

submit.onclick = () =>{
    addTask()
    addTaskElement();
}

// Gets value of task search field

addTask = () => {
    newTask = document.getElementById("task-add").value;
    document.getElementById('task-add').value = ''
    console.log(newTask);
}

// Allows user to submit new task via enter keypress

inputBox.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
        document.getElementById("submit-btn").click();
    }
})

// Adds task element

addTaskElement = () => {
    let newTaskEntry = document.createElement("h3")
    let newDeleteBtn = document.createElement("button")
    newDeleteBtn.innerHTML = "Hi"
    newTaskEntry.innerText = newTask;
    tasksContainer.appendChild(newTaskEntry);
}

// Changes Active button background Color


allTasksPress.onclick = () =>{
    allTasksPressBtnStatus = "active";
    console.log("allTasksPress Clicked")
    document.getElementById("allTasks").style.backgroundColor = '#3d6688';
    checkBtnStatus()
}


schoolPress.onclick = () =>{
    schoolPressBtnStatus = "active";
    console.log("schoolPress Clicked")
    document.getElementById("school").style.backgroundColor = '#3d6688';
    checkBtnStatus()
}



personalPress.onclick = () =>{
    personalPressBtnStatus = "active";
    console.log("personalPress Clicked")
    document.getElementById("personal").style.backgroundColor = '#3d6688';
    checkBtnStatus()
}

checkBtnStatus = () =>{ // creates function to check status value and change color

if(personalPressBtnStatus === "active") {
    console.log("allTasks and School Background Color reset");
    document.getElementById("allTasks").style.backgroundColor = '#ffffff';
    document.getElementById("school").style.backgroundColor = '#ffffff';
    personalPressBtnStatus = "not-active"; //rests status
}

else if(schoolPressBtnStatus === "active"){
    console.log("allTasks and Personal Background Color reset");
    document.getElementById("allTasks").style.backgroundColor = '#ffffff';
    document.getElementById("personal").style.backgroundColor = '#ffffff';
    schoolPressBtnStatus = "not-active"; //rests status
}

else if(allTasksPressBtnStatus === "active"){
    console.log("School and Personal Background Color reset");
    document.getElementById("school").style.backgroundColor = '#ffffff';
    document.getElementById("personal").style.backgroundColor = '#ffffff';
    allTasksPressBtnStatus = "not-active"; //rests status
}
}









