/* ###login / register display ###*/
const loginForm = document.querySelector("#formLogin");
const registerForm = document.querySelector("#formRegister");
const loginLink = document.querySelector("#login__link");
const registerLink = document.querySelector("#register__link");

loginLink.addEventListener("click", (event) => {
    event.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block"
})

registerLink.addEventListener("click", (event) => {
    event.preventDefault();
    loginForm.style.display = "block";
    registerForm.style.display = "none"
})