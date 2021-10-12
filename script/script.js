const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.edit_open_button');
const popupCloseBtn = popup.querySelector('.popup__close');
const popupSubmitBtn = popup.querySelector('.popup__save-changes');

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

let nameInput = document.getElementById("name_input");
let jobInput = document.getElementById("job_input");


function popupToggle() {
    popup.classList.toggle('popup_opened');
}

function setPopupInputValue() {
    nameInput.value = profileName.textContent.trim();
    jobInput.value = profileJob.textContent.trim();
}

function setProfileValues() {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    setProfileValues();
    popupToggle();
}


popupOpenBtn.addEventListener('click', function() {
    popupToggle();
    setPopupInputValue();
});

popupCloseBtn.addEventListener('click', function() {
    popupToggle();
});

popupSubmitBtn.addEventListener('click', formSubmitHandler);