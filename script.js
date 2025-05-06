function showModal(type) {
    if (type === 'signin') {
      document.getElementById('signin-modal').style.display = 'block';
    }
  }
  
  function closeModal() {
    document.getElementById('signin-modal').style.display = 'none';
  }
  
  function signInUser() {
    const name = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (name !== "" && password !== "") {
      // You can add further password validation here
      // For now, just simulate success
      document.getElementById('welcome-message').textContent =
        `Welcome, ${name}, to our magical book collection!`;
      closeModal();
    } else {
      alert("Please fill out both fields.");
    }
  }
  
  // Optional: Close modal on outside click
  window.onclick = function(event) {
    const modal = document.getElementById('signin-modal');
    if (event.target === modal) {
      closeModal();
    }
  };
  