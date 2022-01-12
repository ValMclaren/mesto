class Card {
  constructor(selector, name, link) {
    this._selector = selector;
    this._name = name;
    this._link = link;
  }
  _getItem() {
    return document
      .querySelector(this._selector)
      .content
      .querySelector('.photo')
      .cloneNode(true);
  }

  _deleteCard = () => {
    this._element.remove();
  }

  _likeCard = () => {
    this._element.querySelector('.photo__like-button').classList.toggle('photo__like-button_active')
  }

  _openImagePopup = () => {
    const popupImg = document.querySelector('.popup-full');
    popupImg.classList.add('popup_is-opened');
    popupImg.querySelector('.popup__figcaption').textContent = this._name;
    popupImg.querySelector('.popup__image-full').src = this._link;
    document.addEventListener('keydown', this._closePopupByEscape);
  }

  _closeImagePopup = () => {
    const popupImg = document.querySelector('.popup-full');
    popupImg.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._closePopupByEscape);

  }

  _closePopupByEscape = (evt) => {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_is-opened');
      this._closeImagePopup();
    }
  }

  getView() {
    this._element = this._getItem();
    this._element.querySelector('.photo__title').textContent = this._name;
    this._element.querySelector('.photo__image').src = this._link;

    this._element.querySelector('.photo__delete-button').addEventListener('click', this._deleteCard);
    this._element.querySelector('.photo__like-button').addEventListener('click', this._likeCard);
    this._element.querySelector('.photo__image').addEventListener('click', this._openImagePopup);

    return this._element
  }
}

export default Card;
