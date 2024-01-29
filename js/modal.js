// modal.js

(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    submitBtn: document.querySelector("[data-modal-submit]"),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", handleBackdropClick);
  document.addEventListener("keydown", handleKeyPress);

  if (refs.submitBtn) {
    refs.submitBtn.addEventListener("click", handleSubmit);
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function handleBackdropClick(event) {
    if (event.target === refs.modal) {
      toggleModal();
    }
  }

  function handleKeyPress(event) {
    if (event.code === "Escape") {
      toggleModal();
    }
  }


  function handleSubmit(event) {
    // event.preventDefault(); // Отменяем отправку формы по умолчанию

    // Выполняем валидацию формы
    // const isValid = validation.validate();

    // if (isValid) {
      // Если форма прошла валидацию, выполняем логику отправки данных
      // и закрываем модальное окно
      // Добавьте вашу логику отправки данных здесь

      toggleModal();
    
  }
})();
