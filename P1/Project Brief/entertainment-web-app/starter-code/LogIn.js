import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth();

const loginForm = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const logInButton = document.getElementById('button');

loginForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    loginUser(emailInput.value, passwordInput.value);
});

const loginUser = (emailInput, passwordInput) =>{
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
   .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in: " + user);
        // Redirect to home page
        window.location.href = "./index.html";
   })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error logging in: " + errorCode, errorMessage);
    handleLoginError(error);
    });
}

const handleLoginError = (error) => {
    const existingErrors = document.querySelectorAll(".error");
    existingErrors.forEach((error) => {
        error.remove();
    });

    const errorDisplay = document.createElement("p");
    errorDisplay.classList.add("error");
    errorDisplay.textContent = error.message;

    loginForm.appendChild(errorDisplay);

    emailInput.classList.add("error");
    passwordInput.classList.add("error");
}

const style = ducument.createElement("style");
style.innerHTML = `
    .error {
        color: red;
        border-color: red;
    }
`;

document.head.appendChild(style);

