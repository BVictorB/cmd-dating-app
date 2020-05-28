const loadValidateForm = document.querySelector('.p-login');

if (loadValidateForm) {

    const signupCard = document.querySelector('.sign-up__card');
    const loginCard = document.querySelector('.login__card');
    const failedMessage = document.querySelector('.sign-up--failed');

    signupCard.classList.replace('sign-up__card--no-js', 'sign-up__card--has-js');

    if (document.querySelector('.takenUsername').innerHTML) {
        signupCard.classList.add('sign-up__card--show');
        loginCard.classList.add('login__card--hide');
        failedMessage.classList.add('form-error-message');
        if (signupCard.classList.contains('sign-up__card--has-js')) {
            signupCard.classList.remove('sign-up__card--has-js');
        }
    } else {
        failedMessage.classList.remove('form-error-message');
    }

    document.querySelector('.sign-up-button').addEventListener('click', () => {
        signupCard.classList.add('sign-up__card--show');
        loginCard.classList.add('login__card--hide');
        if (signupCard.classList.contains('sign-up__card--has-js')) {
            signupCard.classList.remove('sign-up__card--has-js');
        }
    });

    document.querySelector('.sign-up__card__close').addEventListener('click', () => {
        signupCard.classList.remove('sign-up__card--show');
        loginCard.classList.remove('login__card--hide');
    });

    const validateForm = (e) => {
        if (e.target) {
            var target = e.target;
        } else {
            // eslint-disable-next-line no-redeclare
            var target = e;
        }


        var loginEmail = document.querySelector('#loginEmail');
        var loginPassword = document.querySelector('#loginPassword');

        var signupUser = document.querySelector('#signupUser');
        var signupEmail = document.querySelector('#signupEmail');
        var signupPassword = document.querySelector('#signupPassword');
        var signupPasswordRepeat = document.querySelector('#signupPasswordRepeat');

        var emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var userValidator = /^[a-zA-Z0-9_.-]*$/;

        if (target.id == 'loginEmail') {
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

        if (target.id == 'loginPassword') {
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

        if (target.id == 'signupUser') {
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

        if (target.id == 'signupEmail') {
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

        if (target.id == 'signupPassword') {
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

        if (target.id == 'signupPasswordRepeat') {
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


    };

    var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    inputs.forEach((input) => {
        input.addEventListener('blur', validateForm);
    });

    document.querySelector('#sign-up_form').addEventListener('submit', (event) => {
        event.preventDefault();

        var errors = false;

        var submitInputs = document.querySelector('#sign-up_form');

        submitInputs.querySelectorAll(':scope > input').forEach((input) => {
            validateForm(input);

            if (input.classList.contains('no-error') || input.classList.contains('error') || parseInt(window.formTotal) === 0) {
                errors = true;
            }
        });

        if (errors === true) {
            document.querySelector('#form-error-message').classList.replace('no-error-message', 'form-error-message');
        } else {
            document.querySelector('#form-error-message').classList.replace('form-error-message', 'no-error-message');
            document.querySelector('#sign-up_form').submit();
        }
    });
}