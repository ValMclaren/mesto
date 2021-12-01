'use strict';

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

const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');
const editProfileBtn = document.querySelector('.profile__edit-btn');
const popupUser = document.querySelector('.popup__container');

const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_job');

const popupPhoto = document.querySelector('.popup-addphoto');
const popupPhotoCloseBtn = popupPhoto.querySelector('.popup-addphoto__close');
const addPhotoBtn = document.querySelector('.profile__add-btn');
const popupPhotoSaveBtn = document.querySelector('.popup-addphoto__save');

const namePlaceInput = document.querySelector('.popup-addphoto__field_type_name');
const linkPlaceInput = document.querySelector('.popup-addphoto__field_type_link');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__caption');

const gridPhoto = document.querySelector('.photo');
const templatePhoto = document.querySelector('.templatePhoto');
const cards = document.querySelector('.photo-grid__photos');
const image = document.querySelector('.photo__image');

const popupFull = document.querySelector('.popup-full');
const popupFullCloseBtn = document.querySelector('.popup-full__close');
const popupImg = document.querySelector('.popup-full__image');
const popupFig = document.querySelector('.popup-full__figcaption');


function openPopup() {
  popup.classList.add('popup_is-opened');
}

function closePopup() {
  popup.classList.remove('popup_is-opened');
}

function openPopupAdd() {
  popupPhoto.classList.add('popup-addphoto_is-opened');
}

function closePopupAdd() {
  popupPhoto.classList.remove('popup-addphoto_is-opened');
}

function openPopupFull() {
  popupFull.classList.add('popup-full_is-opened');
}

function closePopupFull() {
  popupFull.classList.remove('popup-full_is-opened');
}

function handleProfilePopup() {
  openPopup(popup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function profileEdit(evt) {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popup);
  evt.preventDefault();
}

function newCard(src, name) {
  const newCard = templatePhoto.content.cloneNode(true);
  const likeBtn = newCard.querySelector('.photo__like-button');
  const deleteBtn = newCard.querySelector('.photo__delete-button');
  const imageGrid = newCard.querySelector('.photo__image');

  imageGrid.src = src;
  imageGrid.alt = name;

  newCard.querySelector('.photo__title').textContent = name;
  imageGrid.addEventListener('click', handlePopupFull);
  deleteBtn.addEventListener('click', deleteCard);
  likeBtn.addEventListener('click', likeCard);

  return newCard;
}

function placeCard(card) {
  const itemCard = newCard(card.link, card.name);
  cards.prepend(itemCard);
}

initialCards.forEach(function (card) {
  placeCard(card);
})

function deleteCard(evt) {
  const cardDel = evt.target.closest('.photo');
  cardDel.remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('photo__like-button_active');
}

function handleAdd(evt) {
  evt.preventDefault();

  const cardUser = {name: namePlaceInput.value, link: linkPlaceInput.value};
  placeCard(cardUser);
  closePopupAdd();
  namePlaceInput.value = '';
  linkPlaceInput.value = '';

  return cardUser;
}

function handlePopupFull(evt) {
  popupImg.src = evt.target.src;
  popupImg.alt = evt.target.alt;
  popupFig.textContent = evt.target.alt;

  openPopupFull();
}



editProfileBtn.addEventListener('click', handleProfilePopup);
popupCloseBtn.addEventListener('click', closePopup);
popup.addEventListener('submit', profileEdit);
addPhotoBtn.addEventListener('click', openPopupAdd);
popupPhoto.addEventListener('submit', handleAdd);
popupPhotoCloseBtn.addEventListener('click', closePopupAdd);
popupFullCloseBtn.addEventListener('click', closePopupFull);
