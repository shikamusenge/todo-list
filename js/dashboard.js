const logout = () => {
  localStorage.setItem("user", "");
  location.href = "index.html";
};
let taskId;
const Table = document.querySelector("tbody");
let formData = document.querySelector("#task-form");
let Tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
formData.addEventListener("submit", (e) => {
  e.preventDefault();
  let tsk = formData.task.value;
  let dt = formData.Date.value;
  if (formData.className == "add") {
    const newTask = {
      Task: `${tsk}`,
      Date: `${dt}`,
    };
    Tasks.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
    alert("New Task Added successfully");
  } else {
    Tasks[taskId].Task = formData.task.value;
    Tasks[taskId].Date = formData.Date.value;
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
    formData.className = "add";
    formData.btn.value = "Add new Task";
  }
  display();
  formData.task.value = "";
  formData.Date.value = "";
});

/// display function
const display = () => {
  Table.innerHTML = "";
  Tasks.forEach((element, i) => {
    Table.innerHTML += `<tr class='${i}'> <td>${i + 1}</td> <td>${
      element.Task
    }</td> <td>${
      element.Date
    }</td><td><button class='edit'>Edit 🖍</button> <td><button class='del'>Delete &times</button> </td> </tr>`;
  });
};
display();

// Task modifiction events
Table.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.className == "del") {
    let val = Number(e.target.parentNode.parentNode.className);
    if (confirm(" Are you sure you want to delete this Task?")) {
      Tasks.splice(val, 1);
      localStorage.setItem("Tasks", JSON.stringify(Tasks));
      display();
    }
  }
  if (e.target.className == "edit") {
    let val = Number(e.target.parentNode.parentNode.className);
    formData.task.value = Tasks[val].Task;
    formData.Date.value = Tasks[val].Date;
    taskId = val;
    formData.className = "updateData";
    formData.btn.value = "Edite Task";
  }
});
