const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("togglePassword");
    const bar = document.getElementById("bar");
    const lengthRule = document.getElementById("length");
    const numberRule = document.getElementById("number");
    const symbolRule = document.getElementById("symbol");
    const submitBtn = document.getElementById("submitBtn");

    // Toggle password visibility
    togglePasswordBtn.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      togglePasswordBtn.querySelector("img").src = type === "password" 
        ? "https://img.icons8.com/ios-filled/50/000000/visible.png" 
        : "https://img.icons8.com/ios-filled/50/000000/invisible.png";
    });

    passwordInput.addEventListener("input", () => {
      const password = passwordInput.value;
      let score = 0;

      // Check length
      if (password.length >= 8) {
        lengthRule.className = "met";
        score++;
      } else {
        lengthRule.className = "not-met";
      }

      // Check for number
      if (/\d/.test(password)) {
        numberRule.className = "met";
        score++;
      } else {
        numberRule.className = "not-met";
      }

      // Check for symbol
      if (/[^A-Za-z0-9]/.test(password)) {
        symbolRule.className = "met";
        score++;
      } else {
        symbolRule.className = "not-met";
      }

      // Update progress bar
      let width = (score / 3) * 100;
      bar.style.width = width + "%";

      if (score === 1) {
        bar.style.backgroundColor = "red";
      } else if (score === 2) {
        bar.style.backgroundColor = "orange";
      } else if (score === 3) {
        bar.style.backgroundColor = "green";
      }

      // Enable button only if all rules are met
      submitBtn.disabled = score < 3;
    });
