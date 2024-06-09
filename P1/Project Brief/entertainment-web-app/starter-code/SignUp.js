// Select elements
const signUpForm = document.querySelector('form');
const emailInput = signUpForm.querySelector('input[type="email"]');
const passwordInput = signUpForm.querySelector('input[type="password"]');
const repeatPasswordInput = signUpForm.querySelector('input[name="repeat-password"]');
const signUpButton = document.getElementById('button');

// Initialize Firebase Auth
const auth = getAuth();

// Event listener for form submission
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearErrors();
  if (validateForm()) {
    signUpUser(emailInput.value, passwordInput.value);
  }
});

// Validate form fields
function validateForm() {
  let isValid = true;
  if (!emailInput.value) {
    displayError(emailInput, "Can't be empty");
    isValid = false;
  }

  if (!passwordInput.value) {
    displayError(passwordInput, "Can't be empty");
    isValid = false;
  }

  if (!repeatPasswordInput.value) {
    displayError(repeatPasswordInput, "Can't be empty");
    isValid = false;
  }

  if (passwordInput.value !== repeatPasswordInput.value) {
    displayError(repeatPasswordInput, "Passwords do not match");
    isValid = false;
  }

  if (emailInput.value && !validateEmail(emailInput.value)) {
    displayError(emailInput, "Invalid email address");
    isValid = false;
  }

  return isValid;
}

// Validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Sign up user function
function signUpUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up: ", user);
      // Redirect to home page
      window.location.href = "./index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing up: ", errorCode, errorMessage);
      handleSignUpError(error);
    });
}

// Display error message
function displayError(inputElement, message) {
  const errorDisplay = document.createElement("div");
  errorDisplay.classList.add("error-message");
  errorDisplay.textContent = message;
  inputElement.parentNode.insertBefore(errorDisplay, inputElement);
  inputElement.classList.add("error");
}

// Handle sign-up error
function handleSignUpError(error) {
  const errorDisplay = document.createElement("div");
  errorDisplay.classList.add("error-message");
  errorDisplay.textContent = error.message;
  signUpForm.appendChild(errorDisplay);
}

// Clear previous errors
function clearErrors() {
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
