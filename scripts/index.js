let modalWindow = document.querySelector('.popup');
let modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
let editProfileBtn = document.querySelector('.profile__edit-btn');

function toggleModalWindow() {
  modalWindow.classList.toggle('popup_is-opened');
}

editProfileBtn.addEventListener('click', toggleModalWindow);
modalWindowCloseBtn.addEventListener('click', toggleModalWindow);


let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_job');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__caption');
let saveBtn = document.querySelector('.popup__save');
let form = document.querySelector('.popup__form');


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value
  saveBtn.addEventListener('click', toggleModalWindow)
}

formElement.addEventListener('submit', formSubmitHandler);

function formProfile () {
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
}

editProfileBtn.addEventListener('click', formProfile);
