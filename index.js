document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstname = document.getElementById('signup-firstname').value;
    const lastname = document.getElementById('signup-lastname').value;
    const gender = document.getElementById('signup-gender').value;
    const age = document.getElementById('signup-age').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!firstname || !lastname || !gender || !age || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Account created for ${firstname} ${lastname}!`);
    window.location.href = "index.html";
  });