
document.getElementById('signupForm').addEventListener('submit', function (e) {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  if (!email || !password) {
    alert('Email and Password are required!');
    e.preventDefault();
  } else if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  }
});
