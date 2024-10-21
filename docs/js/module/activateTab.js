export function activateTab(buttonId, btnClass, parentClass) {
  const parent = document.querySelector(`.${parentClass}`);
  if (!parent) return;
  const buttons = parent.querySelectorAll(`.${btnClass}`);
  const blocks = parent.querySelectorAll('[data-window-id]');

  // Убираем класс 'active' со всех кнопок и блоков
  buttons.forEach(button => button.classList.remove('active'));
  blocks.forEach(block => block.classList.remove('active'));

  // Находим нужные кнопку и блок по переданному id
  const activeButton = parent.querySelector(`#${buttonId}`);
  const activeBlock = parent.querySelector(`[data-window-id="${buttonId}"]`);

  // Добавляем класс 'active' нужной кнопке и блоку
  if (activeButton) activeButton.classList.add('active');
  if (activeBlock) activeBlock.classList.add('active');
}
