const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__edit-button');
const popupCloseBtn = popup.querySelector('.popup__close');
const popupSubmitBtn = popup.querySelector('.popup__save-changes');

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

let nameInput = document.getElementById("name_input");
let jobInput = document.getElementById("job_input");


function popupOpen() {
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
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
    popupClose();
}


popupOpenBtn.addEventListener('click', function() {
    popupOpen();
    setPopupInputValue();
});

popupCloseBtn.addEventListener('click', function() {
    popupClose();
});

popup.addEventListener('submit', formSubmitHandler);