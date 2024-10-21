// Функция для проверки и копирования активного блока в .drop-down-catalog__main-content
export function updateActiveContent() {
  const catalog = document.querySelector('.drop-down-catalog');
  const mainContent = catalog.querySelector('.drop-down-catalog__main-content');
  mainContent.innerHTML = ''; // Очищаем содержимое

  const activeBlock = catalog.querySelector('.drop-down-catalog__content-wrapp.active');
  if (activeBlock) {
    // Клонируем активный блок и вставляем в mainContent
    const clonedBlock = activeBlock.cloneNode(true);
    mainContent.appendChild(clonedBlock);
  }
}

// Функция для установки обработчиков кликов на кнопки
export function setupCatalogButtons() {
  const catalog = document.querySelector('.drop-down-catalog');
  const buttons = catalog.querySelectorAll('.drop-down-catalog__btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Убираем все активные классы и очищаем mainContent
      catalog.querySelectorAll('.drop-down-catalog__item.hovered').forEach((item) => {
        item.classList.remove('hovered');
      });

      catalog.querySelectorAll('.drop-down-catalog__content-wrapp.active').forEach((block) => {
        block.classList.remove('active');
      });

      const mainContent = catalog.querySelector('.drop-down-catalog__main-content');
      mainContent.innerHTML = ''; // Очищаем mainContent

      // Добавляем классы hovered и active для текущего элемента
      const parentItem = button.closest('.drop-down-catalog__item');
      const contentBlock = parentItem.querySelector('.drop-down-catalog__content-wrapp');

      parentItem.classList.add('hovered');
      contentBlock.classList.add('active');

      // Запускаем функцию для обновления mainContent
      updateActiveContent();
    });
  });
}
