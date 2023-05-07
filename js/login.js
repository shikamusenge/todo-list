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
