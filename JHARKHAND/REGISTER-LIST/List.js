function togglePassword(id, button) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
  button.textContent = input.type === "password" ? "👁" : "🙈";
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = false;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  document.getElementById("nameError").textContent =
    name.value.trim().length < 2 ? "Name must be at least 2 characters" : "";

  document.getElementById("emailError").textContent =
    !email.value.includes("@") ? "Enter a valid email" : "";

  document.getElementById("passwordError").textContent =
    password.value.length < 8 ? "Password must be at least 8 characters" : "";

  document.getElementById("confirmPasswordError").textContent =
    confirmPassword.value !== password.value ? "Passwords do not match" : "";

  if (
    name.value.trim().length < 2 ||
    !email.value.includes("@") ||
    password.value.length < 8 ||
    confirmPassword.value !== password.value
  ) {
    errors = true;
  }

  if (errors) {
    document.getElementById("mainError").style.display = "block";
  } else {
    document.getElementById("mainError").style.display = "none";
    alert("Account Created Successfully!");
  }
});
