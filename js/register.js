import { registerForm, users } from "../app.js";

export const register = (e) => {
  e.preventDefault();

  const { Lname, Fname, password, Uname, email, s_password } = registerForm;

  const user = {
    id: crypto.randomUUID(),
    uname: Uname.value,
    password: password.value,
    email: email.value,
    Fname: Fname.value,
    Lname: Lname.value,
    s_password: s_password.value,
  };
  if (user.password !== user.s_password)
    return alert("password entered must match");

  const foundUser = users.find(({ uname, email }) => {
    return user.uname === uname || user.email === email;
  });

  if (foundUser) return alert("user with those credential exists!!");

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("account created successfully");
};
