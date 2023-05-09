// import { tasks } from "../db/tasks.js"; // ntabwo biri kwapdatinga data;
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

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
    const myFooter = `Status ${task.status} <button class='edit-task'>Edite</button> <button class='del-task' id = "${taskId}">remove</button> <button class='mark-task'>Mark as closed</button>`;
    CreateTaskDiv(task.title, Details, myFooter);
  });
};

// add task
const addNewTask = () => {
  const formData = document.querySelector(".add-task-form-data");
  const savedTasks = JSON.parse(localStorage.getItem("myTasks")) || [];
  formData.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskTitle = formData.tasksTile;
    let taskDiscription = formData.Description;
    let taskfrom = formData.start;
    let taskTo = formData.end;
    const newTask = {
      title: `${taskTitle.value}`,
      details: `${taskDiscription.value}`,
      timline: { start: `${taskfrom.value}`, end: `${taskfrom.value}` },
      status: "inprogress",
    };
    savedTasks.push(newTask);
    localStorage.setItem("myTasks", JSON.stringify(savedTasks));
    taskTitle.value = "";
    taskDiscription.value = "";
    taskfrom.value = "";
    taskTo.value = "";
    const msg = "<div class='msgContent'>Task added</div>";
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
