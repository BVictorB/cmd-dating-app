const loadEditProfile = document.querySelector('#edit_profile');

if (loadEditProfile) {

    const editProfileButton = document.querySelector('.profile__button');
    const saveProfileButton = document.querySelector('.profile__save');
    const failedMessage = document.querySelector('.sign-up--failed');

    editProfileButton.addEventListener('click', () => {
        editProfileButton.classList.add('profile__button--hide');
        saveProfileButton.classList.add('profile__save--show');
        document.querySelector('.profile__edit__form').classList.add('profile__edit');
    });

    if (document.querySelector('.takenUsername').innerHTML) {
        failedMessage.classList.add('form-error-message');
    } else {
        failedMessage.classList.remove('form-error-message');
    }

}

    