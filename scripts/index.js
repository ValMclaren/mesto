
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupArray = Array.from(document.querySelectorAll('.popup'));
const popupUserClose = document.querySelector('.popup-user__close');
const editProfileBtn = document.querySelector('.profile__edit-btn');
const popupUser = document.querySelector('.popup-user');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const popupPhoto = document.querySelector('.popup-addphoto');
const popupPhotoCloseBtn = popupPhoto.querySelector('.popup-addphoto__close');
const addPhotoBtn = document.querySelector('.profile__add-btn');
const createBtn = document.querySelector('.popup-addphoto__save');

const namePlaceInput = document.querySelector('.popup-addphoto__input_type_name');
const linkPlaceInput = document.querySelector('.popup-addphoto__input_type_link');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__caption');

const templatePhoto = document.querySelector('.templatePhoto');
const cards = document.querySelector('.photo-grid__photos');
const image = document.querySelector('.photo__image');

const popupFull = document.querySelector('.popup-full');
const popupFullCloseBtn = document.querySelector('.popup-full__close');
const popupImg = document.querySelector('.popup__image-full');
const popupFig = document.querySelector('.popup__figcaption');

const popupOverlay = document.querySelectorAll('.popup__overlay');

const photos = document.querySelector('.photo-grid__photos');

const enableValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

const formProfile = new FormValidator(enableValidation, popupUser);
const formNewPlace = new FormValidator(enableValidation, popupPhoto);
formProfile.enableValidation();
formNewPlace.enableValidation();

function render() {
  const itemCard = initialCards.map((item) => {
    const card = new Card('.templatePhoto', item.name, item.link, item.alt);

    return card.getView()
  });

  photos.append(...itemCard);

}
render();

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupByEscape);
}

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup)
  }
}

function openEditProfilePopup() {
  openPopup(popupUser);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function submitProfileForm(evt) {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupUser);
  evt.preventDefault();
}

function submitAddCardForm(evt) {
  evt.preventDefault();
  const inputPlace = namePlaceInput.value;
  const inputLink = linkPlaceInput.value;
  const cardItem = new Card('.templatePhoto', inputPlace, inputLink, evt.alt);
  const card = cardItem.getView();
  photos.prepend(card);
  namePlaceInput.value = '';
  linkPlaceInput.value = '';
  closePopup(popupPhoto);
}

editProfileBtn.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupUser);
});

addPhotoBtn.addEventListener('click', () => {
  namePlaceInput.value = '';
  linkPlaceInput.value = '';
  createBtn.classList.add('popup__button_disabled');
  createBtn.disabled = true;
  openPopup(popupPhoto);
});


editProfileBtn.addEventListener('click', openEditProfilePopup);
popupUser.addEventListener('submit', submitProfileForm);
popupUserClose.addEventListener('click', () => closePopup(popupUser));
addPhotoBtn.addEventListener('click', () => openPopup(popupPhoto));
popupPhoto.addEventListener('submit', submitAddCardForm);
popupPhotoCloseBtn.addEventListener('click', () => closePopup(popupPhoto));
popupFullCloseBtn.addEventListener('click', () => closePopup(popupFull));


