import { updateTask } from "../db/editTask.js";

// import { tasks } from "../db/tasks.js"; // ntabwo biri kwapdatinga data;
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
let tskid;
const taskViewBtn = document.querySelector(".task-list");
taskViewBtn.addEventListener("click", () => displayTasks());
const taskAddBtn = document.querySelector(".add-task");
const Form = document.querySelector(".formDiv");
// display add task form
taskAddBtn.addEventListener("click", () => {
  Form.style.display = "block";
  const uiDv = document.querySelector(".tasksDivision");
  uiDv.innerHTML = "";
});
// creating element
const CreateTaskDiv = (title, body, footer) => {
  const uiDiv = document.querySelector(".tasksDivision");
  const taskDiv = document.createElement("div");
  const taskDivTitle = document.createElement("div");
  const taskDivBody = document.createElement("div");
  const taskDivFooter = document.createElement("div");
  taskDiv.className = "taskDiv";
  taskDivTitle.className = "taskDivTitle";
  taskDivBody.className = "taskDivBody";
  taskDivFooter.className = "taskDivFooter";
  taskDivTitle.innerHTML = title;
  taskDivBody.innerHTML = body;
  taskDivFooter.innerHTML = footer;
  taskDiv.appendChild(taskDivTitle);
  taskDiv.appendChild(taskDivBody);
  taskDiv.appendChild(taskDivFooter);
  uiDiv.appendChild(taskDiv);
  //   console.log(taskDiv);
};
const displayTasks = () => {
  Form.style.display = "none";
  document.querySelector(".tasksDivision").innerHTML = "";
  tasks.forEach((task, taskId) => {
    const Details = `${task.details} <br> Timeline : ${task.timline.start} to ${task.timline.end}`;
    const myFooter = `Status ${task.status} <button class='edit-task' id = "${taskId}">Edite</button> <button class='del-task' id = "${taskId}">remove</button> <button class='mark-task' id = "${taskId}">Mark as closed</button>`;
    CreateTaskDiv(task.title, Details, myFooter);
  });
};

// add task
const addNewTask = () => {
  const formData = document.querySelector(".add-task-form-data");
  const savedTasks = JSON.parse(localStorage.getItem("myTasks")) || [];
  formData.addEventListener("submit", (e) => {
    e.preventDefault();
    let msg;
    let formTask = document.querySelector(".add-task-form-data").id;
    let taskTitle = formData.tasksTile;
    let taskDiscription = formData.Description;
    let taskfrom = formData.start;
    let taskTo = formData.end;
    if (formTask != "updateTask") {
      const newTask = {
        title: `${taskTitle.value}`,
        details: `${taskDiscription.value}`,
        timline: { start: `${taskfrom.value}`, end: `${taskfrom.value}` },
        status: "inprogress",
      };
      msg = "<div class='msgContent'>Task added</div>";
      savedTasks.push(newTask);
    } else {
      tasks[tskid].title = taskTitle.value;
      tasks[tskid].details = taskDiscription.value;
      tasks[tskid].timline.start = taskfrom.value;
      tasks[tskid].timline.end = taskTo.value;
      msg = "<div class='msgContent'>Task Updated</div>";
      formData.id = "add";
      document.querySelector(".tit").innerText = "Add New Task";
    }
    localStorage.setItem("myTasks", JSON.stringify(savedTasks));
    taskTitle.value = "";
    taskDiscription.value = "";
    taskfrom.value = "";
    taskTo.value = "";
    document.querySelector(".Msg-success").innerHTML = msg;
    crearMsg();
    tasks = savedTasks;
  });
};
addNewTask();

const crearMsg = () => {
  setTimeout(() => {
    document.querySelector(".Msg-success").innerHTML = "";
  }, 5000);
};

// // Edite task
try {
  document.querySelector(".tasksDivision").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.className == "edit-task") {
      tskid = e.target.id;
      document.querySelector(".tit").innerText = "Update Task";
      updateTask(e.target.id);
    }
  });
} catch (error) {
  console.log(error);
}
