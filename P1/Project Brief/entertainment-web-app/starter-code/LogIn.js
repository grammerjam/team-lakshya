// Select elements
const loginForm = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const logInButton = document.getElementById('button');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();
    if (validateForm()) {
        loginUser(emailInput.value, passwordInput.value);
    }
});

const validateForm = () => {
    let isValid = true;
    if (!emailInput.value) {
        displayError(emailInput, "Can't be empty");
        isValid = false;
    }

    if (!passwordInput.value) {
        displayError(passwordInput, "Can't be empty");
        isValid = false;
    }

    if (emailInput.value && !validateEmail(emailInput.value)) {
        displayError(emailInput, "Invalid email address");
        isValid = false;
    }

    return isValid;
}

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User logged in: ", user);
            // Redirect to home page
            window.location.href = "./index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error logging in: ", errorCode, errorMessage);
            handleLoginError(error);
        });
}

const displayError = (inputElement, message) => {
    const errorDisplay = document.createElement("div");
    errorDisplay.classList.add("error-message");
    errorDisplay.textContent = message;
    inputElement.parentNode.insertBefore(errorDisplay, inputElement); // Insert before the input element
    inputElement.classList.add("error");
}

const handleLoginError = (error) => {
    const errorDisplay = document.createElement("div");
    errorDisplay.classList.add("error-message");
    errorDisplay.textContent = error.message;
    loginForm.appendChild(errorDisplay);
}

const clearErrors = () => {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => {
        message.remove();
    });

    const errorInputs = document.querySelectorAll(".error");
    errorInputs.forEach((input) => {
        input.classList.remove("error");
    });
}

// Add error styling
const style = document.createElement("style");
style.innerHTML = `
    .error {
        border-color: red;
        margin-top: 1px;
    }

    .error-message {
        color: red;
        font-weight: 300;
        font-size: 13px;
        line-height: 1.5;
        width: auto;
        text-align: end;
        padding: inherit;
    }
`;

document.head.appendChild(style);
