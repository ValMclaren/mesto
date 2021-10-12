let popup = document.querySelector('.popup');
let popupCloseBtn = popup.querySelector('.popup__close');
let editProfileBtn = document.querySelector('.profile__edit-btn');

let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_job');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__caption');
let form = document.querySelector('.popup__form');

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_is-opened');
}

function closePopup() {
  popup.classList.remove('popup_is-opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value
  closePopup();
}

editProfileBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popup.addEventListener('submit', formSubmitHandler);

