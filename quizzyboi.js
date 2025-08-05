document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const password = document.getElementById('password').value;
  const encrypted = btoa(password);

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.classList.add('clicked');

  setTimeout(() => {
    document.querySelector('.login-panel').classList.add('slide-left');
    document.querySelector('.overlay').classList.add('slide-up');
  }, 300);

  setTimeout(() => {
    window.location.href = 'quiz.html.html';

  }, 1600);
});
