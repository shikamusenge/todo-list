const formData = document.querySelector("#form-data");
let usersData = JSON.parse(localStorage.getItem("usersData")) || [];
const myUsers = usersData.map((a) => a.userName);
let users = usersData.map((a) => a.userName + a.passWord);
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
    alert("provide valid credentials");
  }
  formData.usn.value = "";
  formData.psw.value = "";
});
