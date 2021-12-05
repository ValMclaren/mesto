'use strict';

const popupUserClose = document.querySelector('.popup-user__close');
const editProfileBtn = document.querySelector('.profile__edit-btn');
const popupUser = document.querySelector('.popup-user');

const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_job');

const popupPhoto = document.querySelector('.popup-addphoto');
const popupPhotoCloseBtn = popupPhoto.querySelector('.popup-addphoto__close');
const addPhotoBtn = document.querySelector('.profile__add-btn');

const namePlaceInput = document.querySelector('.popup-addphoto__field_type_name');
const linkPlaceInput = document.querySelector('.popup-addphoto__field_type_link');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__caption');

const templatePhoto = document.querySelector('.templatePhoto');
const cards = document.querySelector('.photo-grid__photos');
const image = document.querySelector('.photo__image');

const popupFull = document.querySelector('.popup-full');
const popupFullCloseBtn = document.querySelector('.popup-full__close');
const popupImg = document.querySelector('.popup__image-full');
const popupFig = document.querySelector('.popup__figcaption');


function openPopup(popup) {
  popup.classList.add('popup_is-opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

function handleProfilePopup() {
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

function createCard(src, name) {
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
  const itemCard = createCard(card.link, card.name);
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
  const cardUser = { name: namePlaceInput.value, link: linkPlaceInput.value };
  placeCard(cardUser);
  closePopup(popupPhoto);
  namePlaceInput.value = '';
  linkPlaceInput.value = '';
}

function handlePopupFull(evt) {
  popupImg.src = evt.target.src;
  popupImg.alt = evt.target.alt;
  popupFig.textContent = evt.target.alt;
  openPopup(popupFull);
}



editProfileBtn.addEventListener('click', handleProfilePopup);
popupUser.addEventListener('submit', submitProfileForm);
popupUserClose.addEventListener('click', () => closePopup(popupUser));
addPhotoBtn.addEventListener('click', () => openPopup(popupPhoto));
popupPhoto.addEventListener('submit', handleAdd);
popupPhotoCloseBtn.addEventListener('click', () => closePopup(popupPhoto));
popupFullCloseBtn.addEventListener('click', () => closePopup(popupFull));
