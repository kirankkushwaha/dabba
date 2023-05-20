// Assuming you have a login form with id "loginForm" in your HTML
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve the email and password values from the form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create an object with the login data
  const loginData = {
    email: email,
    password: password
  };

  // Make an AJAX request to the login endpoint on the server
  fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    if (data.message === 'Login successful') {
      // Redirect to the home page or perform any other actions
      window.location.href = 'home.html';
    } else {
      // Display an error message or perform any other actions
      console.error(data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
