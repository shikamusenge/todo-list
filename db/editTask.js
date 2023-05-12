export const updateTask = (tskid) => {
  let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
  const formDiv = document.querySelector(".formDiv");
  const formData = document.querySelector(".add-task-form-data");
  let taskTitle = formData.tasksTile;
  let taskDiscription = formData.Description;
  let taskfrom = formData.start;
  let taskTo = formData.end;
  taskTitle.value = tasks[tskid].title;
  taskDiscription.value = tasks[tskid].details;
  taskfrom.value = tasks[tskid].timline.start;
  taskTo.value = tasks[tskid].timline.end;
  formDiv.style.display = "block";
  formData.id = "updateTask";
  document.querySelector(".tasksDivision").innerHTML = "";
};
