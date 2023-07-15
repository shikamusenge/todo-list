import { tasks } from "../db/tasks.js";

export const displayTasks = () => {
  tasks.forEach((task) => {
    const Details = `${task.details} <br> Timeline : ${task.details}`;
    const myFooter = `Status ${task.status} <button class='edit-task'></button> <button class='del-task'>remove</button> <button class='mark-task'>Mark as closed</button>`;
    CreateTaskDivskDiv(task.title, Details, myFooter);
  });
};
