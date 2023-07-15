export const CreateTaskDiv = (title, body) => {
  const uiDiv = document.querySelector(".Tsid-right");
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
  taskDivFooter.innerHTML = title;
  taskDiv.appendChild(taskDivTitle);
  taskDiv.appendChild(taskDivBody);
  taskDiv.appendChild(taskDivFooter);
  uiDiv.appendChild(taskDiv);
};
