function toggleForm() {
  var toggleBtn = document.getElementById('toggleBtn');
  var loginForm = document.getElementById('loginForm');
  var registerForm = document.getElementById('registerForm');

  if (toggleBtn.innerText === 'Đăng ký') {
      toggleBtn.innerText = 'Đăng nhập';
      loginForm.classList.remove('show');
      registerForm.classList.add('show');
  } else {
      toggleBtn.innerText = 'Đăng ký';
      registerForm.classList.remove('show');
      loginForm.classList.add('show');
  }
}
