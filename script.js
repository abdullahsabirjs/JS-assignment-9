document.getElementById('showPassword').addEventListener('change', function () {
    var passwordInput = document.getElementById('password');
    passwordInput.type = this.checked ? 'text' : 'password';
});