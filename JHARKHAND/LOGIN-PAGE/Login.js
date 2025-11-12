// Password toggle logic
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    togglePassword.addEventListener('click', () => {
      const isPasswordVisible = passwordInput.type === 'text';
      passwordInput.type = isPasswordVisible ? 'password' : 'text';
      togglePassword.textContent = isPasswordVisible ? 'Show' : 'Hide';
    });

    // Simple form validation
    const form = document.getElementById('loginForm');
    const globalError = document.getElementById('globalError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', e => {
      e.preventDefault();
      emailError.textContent = '';
      passwordError.textContent = '';
      globalError.style.display = 'none';

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!email) {
        emailError.textContent = 'Email is required.';
        return;
      }
      if (!password) {
        passwordError.textContent = 'Password is required.';
        return;
      }

      // Example of fake login validation
      if (email !== 'user@example.com' || password !== '1234') {
        globalError.style.display = 'block';
      } else {
        alert('Login successful!');
        form.reset();
      }
    });