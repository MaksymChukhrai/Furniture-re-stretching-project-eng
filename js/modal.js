// modal.js
// Импорт библиотеки
import MicroModal from 'micromodal';

// Контент модального окна
const modalContent = `
  <div class="modal__content micromodal-slide" id="contactModal" aria-hidden="true">
    <div class="modal__header">
      <h2 class="modal__title" id="contactModal-title">
        Your Modal Title
      </h2>
      <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
    </div>
    <div class="modal__body">
      <p>
        Your modal content goes here.
      </p>
    </div>
  </div>
`;

// Вставка модального контента в body
document.body.insertAdjacentHTML('beforeend', modalContent);

// Инициализация Micromodal
MicroModal.init();
