 function saveUser() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      if (name && email) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        document.getElementById('msg').textContent = "Login info saved successfully!";
        showSavedUser();
      } else {
        document.getElementById('msg').textContent = "Please fill in both fields.";
      }
    }

    function showSavedUser() {
      const name = localStorage.getItem('userName');
      const email = localStorage.getItem('userEmail');

      if (name && email) {
        document.getElementById('savedUser').innerHTML = `👤 Name: <strong>${name}</strong><br>📧 Email: <strong>${email}</strong>`;
      } else {
        document.getElementById('savedUser').textContent = "No user saved yet.";
      }
    }

    window.onload = showSavedUser;