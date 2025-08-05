
document.getElementById('loginForm').addEventListener('submit', function (e) {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  if (!email || !password) {
    alert('Email and Password are required!');
    e.preventDefault();
  } else if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  }
});
