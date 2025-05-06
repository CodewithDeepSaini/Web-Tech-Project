function showModal(type) {
    document.getElementById(`${type}-modal`).style.display = 'flex';
  }

  // Close modal function
  function closeModal(type) {
    document.getElementById(`${type}-modal`).style.display = 'none';
  }

  // Simple sign in function
  function signIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ name: email.split('@')[0] }));
      document.getElementById('welcome-message').textContent = `Welcome back! Enjoy our books.`;
      closeModal('signin');
    } else {
      alert('Please enter both email and password');
    }
  }

  // Simple sign up function
  function signUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    if (name && email && password) {
      localStorage.setItem('user', JSON.stringify({ name }));
      document.getElementById('welcome-message').textContent = `Welcome, ${name}! Enjoy our magical book collection.`;
      closeModal('signup');
    } else {
      alert('Please fill all fields');
    }
  }

  // Check if user is logged in on page load
  window.onload = function() {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const userData = JSON.parse(user);
        if (userData.name) {
          document.getElementById('welcome-message').textContent = 
            `Welcome, ${userData.name}! Enjoy our magical book collection.`;
          document.getElementById('auth-buttons').innerHTML = 
            `<button onclick="signOut()">Sign Out</button>`;
        }
      } catch (e) {
        console.log("Couldn't parse user data");
      }
    }
  }

  // Simple sign out function
  function signOut() {
    localStorage.removeItem('user');
    document.getElementById('welcome-message').textContent = 
      'Welcome to our magical book collection!';
    document.getElementById('auth-buttons').innerHTML = `
      <button onclick="showModal('signin')">Sign In</button>
      <button onclick="showModal('signup')">Sign Up</button>`;
  }