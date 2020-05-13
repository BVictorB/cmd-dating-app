document.querySelector('.sign-up-button').addEventListener('click', function () {
    document.querySelector('.sign-up-card').classList.add('sign-up-card--show');
    document.querySelector('.login-card').classList.add('login-card--hide');
})

document.querySelector('.sign-up-card-close').addEventListener('click', function () {
    document.querySelector('.sign-up-card').classList.remove('sign-up-card--show');
    document.querySelector('.login-card').classList.remove('login-card--hide');
})

const loadValidateForm = document.querySelector('.login-page');

if (loadValidateForm) {

    const validateForm = function (e) {
        if (e.target) {
            var target = e.target;
        } else {
            var target = e;
        }


        var loginEmail = document.querySelector('#login_email');
        var loginPassword = document.querySelector('#login_password');

        var signupUser = document.querySelector('#sign-up_user');
        var signupEmail = document.querySelector('#sign-up_email');
        var signupPassword = document.querySelector('#sign-up_password');
        var signupPasswordRepeat = document.querySelector('#sign-up_password_repeat');

        var emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var userValidator = /^[a-zA-Z0-9_.-]*$/;

        if (target.id == 'login_email') {
            if (loginEmail.value.length == 0) {
                if (!loginEmail.classList.contains('error')) {
                    loginEmail.classList.add('error');
                    loginEmail.classList.remove('no-error');
                    loginEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    loginEmail.nextElementSibling.innerHTML = 'Please fill in your e-mail adress.';
                } else {
                    loginEmail.classList.remove('no-error');
                    loginEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    loginEmail.nextElementSibling.innerHTML = 'Please fill in your e-mail adress.';
                }
            } else if (!loginEmail.value.match(emailValidator)) {
                loginEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                loginEmail.nextElementSibling.innerHTML = 'Please fill in a valid e-mail adress.';
                loginEmail.classList.add('error');
                loginEmail.classList.remove('no-error');
            } else {
                loginEmail.classList.remove('no-error');
                loginEmail.classList.remove('error');
                loginEmail.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }

        if (target.id == 'login_password') {
            if (loginPassword.value.length == 0) {
                if (!loginPassword.classList.contains('error')) {
                    loginPassword.classList.add('error');
                    loginPassword.classList.remove('no-error');
                    loginPassword.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    loginPassword.nextElementSibling.innerHTML = 'Please fill in your password.';
                }
            } else {
                loginPassword.classList.remove('error');
                loginPassword.classList.remove('no-error');
                loginPassword.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }

        if (target.id == 'sign-up_user') {
            if (signupUser.value.length == 0) {
                if (!signupUser.classList.contains('error')) {
                    signupUser.classList.add('error');
                    signupUser.classList.remove('no-error');
                    signupUser.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupUser.nextElementSibling.innerHTML = 'Please choose a username.';
                } else {
                    signupUser.classList.remove('no-error');
                    signupUser.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupUser.nextElementSibling.innerHTML = 'Please choose a username.';
                }
            } else if (!signupUser.value.match(userValidator)) {
                signupUser.nextElementSibling.classList.replace('no-error-message', 'error-message');
                signupUser.nextElementSibling.innerHTML = 'A username may only contain letters, numbers and dashes.';
                signupUser.classList.add('error');
                signupUser.classList.remove('no-error');
            } else {
                signupUser.classList.remove('no-error');
                signupUser.classList.remove('error');
                signupUser.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }

        if (target.id == 'sign-up_email') {
            if (signupEmail.value.length == 0) {
                if (!signupEmail.classList.contains('error')) {
                    signupEmail.classList.add('error');
                    signupEmail.classList.remove('no-error');
                    signupEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupEmail.nextElementSibling.innerHTML = 'Please fill in your e-mail adress.';
                } else {
                    signupEmail.classList.remove('no-error');
                    signupEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupEmail.nextElementSibling.innerHTML = 'Please fill in your e-mail adress.';
                }
            } else if (!signupEmail.value.match(emailValidator)) {
                signupEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                signupEmail.nextElementSibling.innerHTML = 'Please fill in a valid e-mail adress.';
                signupEmail.classList.add('error');
                signupEmail.classList.remove('no-error');
            } else {
                signupEmail.classList.remove('no-error');
                signupEmail.classList.remove('error');
                signupEmail.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }

        if (target.id == 'sign-up_password') {
            if (signupPassword.value.length == 0) {
                if (!signupPassword.classList.contains('error')) {
                    signupPassword.classList.add('error');
                    signupPassword.classList.remove('no-error');
                    signupPassword.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupPassword.nextElementSibling.innerHTML = 'Please fill in a password.';
                }
            } else {
                signupPassword.classList.remove('error');
                signupPassword.classList.remove('no-error');
                signupPassword.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }

        if (target.id == 'sign-up_password_repeat') {
            if (signupPasswordRepeat.value.length == 0) {
                if (!signupPasswordRepeat.classList.contains('error')) {
                    signupPasswordRepeat.classList.add('error');
                    signupPasswordRepeat.classList.remove('no-error');
                    signupPasswordRepeat.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupPasswordRepeat.nextElementSibling.innerHTML = 'Please repeat your password.';
                } else {
                    signupPasswordRepeat.classList.remove('no-error');
                    signupPasswordRepeat.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupPasswordRepeat.nextElementSibling.innerHTML = 'Please repeat your password.';
                }
            } else if (signupPasswordRepeat.value != signupPassword.value) {
                signupPasswordRepeat.nextElementSibling.classList.replace('no-error-message', 'error-message');
                signupPasswordRepeat.nextElementSibling.innerHTML = 'The passwords do not match.';
                signupPasswordRepeat.classList.add('error');
                signupPasswordRepeat.classList.remove('no-error');
            } else {
                signupPasswordRepeat.classList.remove('no-error');
                signupPasswordRepeat.classList.remove('error');
                signupPasswordRepeat.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }


    }

    var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    inputs.forEach(function (input) {
        input.addEventListener('blur', validateForm);
    });
}