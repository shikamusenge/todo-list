<<<<<<< HEAD
import { loginForm, users } from "../app.js";
export const login = (e) => {
  e.preventDefault();

  const { username, password } = loginForm;

  const user = users.find(({ uname, password: pass }) => {
    return uname === username.value && pass === password.value;
  });
  if (user) alert("well login sucessful");
  else message.append("increct credetial please try again or signup");

  e.target.reset();
};
=======
const formData = document.querySelector("#form-data");
const Msg = document.querySelector(".Msg");
let usersData = JSON.parse(localStorage.getItem("usersData")) || [];
const myUsers = usersData.map((a) => a.userName);

let users = usersData.map((a) => a.userName + a.password);

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = formData.usn.value;
  let pass = formData.psw.value;
  let currentUserId;
  const use = user + pass;
  if (users.some((u) => u == use)) {
    myUsers.forEach((element, i) => {
      if (element == user) currentUserId = i;
    });
    location.href = "dashboard.html";
    localStorage.setItem("user", currentUserId);
  } else {
    Msg.innerHTML = "<h2>provide valid credentials</h2>";
  }
  formData.usn.value = "";
  formData.psw.value = "";
});
setTimeout(() => {
  Msg.innerHTML = "";
}, 5000);
>>>>>>> 8b78d45 (I have created Login form for users)
