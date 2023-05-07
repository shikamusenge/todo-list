// ////////////////////////  LOGIN SUING LOCAL STORAGE //////////////

import { login } from "./js/login.js";
import { register } from "./js/register.js";

export let users = JSON.parse(localStorage.getItem("users")) || [];

export const loginForm = document.querySelector("#loginForm");
export const registerForm = document.querySelector("#registerForm");

loginForm?.addEventListener("submit", login);
registerForm?.addEventListener("submit", register);
