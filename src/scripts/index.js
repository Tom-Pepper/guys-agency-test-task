// Переменные
const cartPopup = document.querySelector('.popup__cart-popup');
const toCardButton = document.querySelector('.card__info-to-cart-button');
const footerButton = document.querySelector('.footer__button');

const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
};

// Ф-ия закрытия поп-апа по клику на оверлей
const closePopupLayerClick = (event) => {
  const currentModalWindow = event.currentTarget;
  if (event.target === currentModalWindow) {
    closePopup(currentModalWindow);
  }
}

// Листнер клика по оверлею
cartPopup.addEventListener('click', closePopupLayerClick);

// Обработчик клика по кнопке
toCardButton.addEventListener('click', () => {
  cartPopup.classList.add('popup_is-opened');
  setTimeout(() => {
    cartPopup.classList.remove('popup_is-opened');
  }, 3000);
});

// Превентдефолт для формы в футере
footerButton.addEventListener('submit', (e) => {
  e.preventDefault();
})
