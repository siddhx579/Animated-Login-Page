// select the container and the register and login buttons from the DOM
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// add a click event listener to the register button
registerBtn.addEventListener('click', () => {
    // when the register button is clicked, add the "active" class to the container
    container.classList.add("active");
});

// add a click event listener to the login button
loginBtn.addEventListener('click', () => {
    // when the login button is clicked, remove the "active" class from the container
    container.classList.remove("active");
});