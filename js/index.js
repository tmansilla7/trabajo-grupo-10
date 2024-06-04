const loginForm = document.querySelector("#login-form");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // evito el comportamiento por defecto

    const name = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;

    if (!name || !password) {
        alert("Por favor, completa ambos campos.");
    } else {
        localStorage.setItem("name", name); //aca guardo la variable en local storage 
        loginForm.submit(); 
    }
});