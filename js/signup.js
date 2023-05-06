const formData = document.querySelector("#form-data-signup");
let usersData = JSON.parse(localStorage.getItem("usersData")) || [];
let id = usersData.length + 1;
const users = usersData.map((a) => a.userName);
const pop = document.querySelector(".popup");
formData.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = formData.usn.value;
  let pass1 = formData.psw1.value;
  let pass = formData.psw.value;
  const popMsg = document.createElement("h3");
  if (user == "" || pass == "") {
    popMsg.innerHTML = "Fill All Fields";
    pop.appendChild(popMsg);
  } else if (pass1 != pass) {
    popMsg.innerHTML = "Password is Not matching";
    pop.appendChild(popMsg);
  } else if (pass.length < 8) {
    popMsg.innerHTML = "Password Must contain atleast 8 charachters in long";
    pop.appendChild(popMsg);
  } else if (users.some((a) => a == user)) {
    popMsg.innerHTML = `User '${user}' is Already exist`;
    pop.appendChild(popMsg);
  } else {
    const newUser = {
      Id: `${id}`,
      userName: `${user}`,
      passWord: `${pass}`,
    };
    usersData.push(newUser);
    localStorage.setItem("usersData", JSON.stringify(usersData));
    console.log(localStorage.getItem("usersData"));
    id += 1;
    alert("account created successfully");
    location.href = "index.html";
  }
});

setTimeout(() => {
  pop.innerHTML = "";
}, 500);
