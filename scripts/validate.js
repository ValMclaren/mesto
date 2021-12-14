const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (inputElement.validity.valid) {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  } else {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  }
}

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

const toggleButtonState = (formElement, buttonElement, inactiveButtonClass) => {
  const isFormValid = formElement.checkValidity();
  buttonElement.classList.toggle(inactiveButtonClass, !isFormValid)
  buttonElement.disabled = !isFormValid;
}

const setEventListeners = (formElement, {
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
}) => {
  formElement.addEventListener('submit', (evt) => evt.preventDefault());
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(formElement, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
          isValid(formElement, inputElement, inputErrorClass, errorClass);
          toggleButtonState(formElement, buttonElement, inactiveButtonClass);
      });
  })
}

const enableValidation = ({
  formSelector,
  ...rest
}) => {
  const getFormList = Array.from(document.querySelectorAll(formSelector));
  getFormList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });
      setEventListeners(formElement, rest);
  })
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: '.popup__save_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__error_visible'
});
