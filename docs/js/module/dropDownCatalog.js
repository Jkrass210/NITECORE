let isMobileView = window.innerWidth < 950;

export function updateContent(sourceSelector, targetSelector, activeClass, context = document) {
  const source = document.querySelector(sourceSelector);
  const target = context.querySelector(targetSelector);
  if (!source || !target) {
    console.error('Источник или целевой блок не найдены.', { source, target });
    return;
  }
  const activeBlock = document.querySelector(`${sourceSelector}.${activeClass}`);
  if (!activeBlock) {
    console.warn(`Активный блок с классом "${activeClass}" не найден.`);
    return;
  }

  target.innerHTML = '';

  const clonedBlock = activeBlock.cloneNode(true);
  target.appendChild(clonedBlock);
}

export function setupMenuButtons({
  catalogSelector,
  buttonSelector,
  contentWrapperSelector,
  targetSelector,
  activeClass,
  hoveredClass,
  isNested = false,
}) {
  const catalog = document.querySelector(catalogSelector);

  const buttons = catalog.querySelectorAll(buttonSelector);

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      catalog.querySelectorAll(`.${activeClass}`).forEach((el) => el.classList.remove(activeClass));
      catalog.querySelectorAll(`.${hoveredClass}`).forEach((el) => el.classList.remove(hoveredClass));

      const parentItem = button.closest(isNested ? 'div' : 'li');

      if (parentItem) {
        parentItem.classList.add(hoveredClass);
      }

      const contentWrapper = parentItem?.querySelector(contentWrapperSelector);
      if (contentWrapper) {
        contentWrapper.classList.add(activeClass);
      }

      if (isNested) {
        catalog.querySelectorAll(".hovered-2").forEach((el) => el.classList.remove("hovered-2"));
      }
      const context = isNested ? document.querySelector('.drop-down-catalog__main-content') : document;
      updateContent(contentWrapperSelector, targetSelector, activeClass, context);
      if (!isNested) {
        setupMenuButtons({
          catalogSelector: targetSelector,
          buttonSelector: '.drop-down-catalog__btn-2',
          contentWrapperSelector: '.drop-down-catalog__content-wrapp-2',
          targetSelector: '.drop-down-catalog__content-level-2',
          activeClass: 'active',
          hoveredClass: 'hovered',
          isNested: true,
        });
      }
    });
  });
}

export function setupMobileMenu() {
  const catalog = document.querySelector(".drop-down-catalog");
  const buttons = catalog.querySelectorAll('.drop-down-catalog__btn');
  const buttons2 = catalog.querySelectorAll('.drop-down-catalog__content-level-1 .drop-down-catalog__btn-2');
  document.querySelectorAll('.hovered-2').forEach((el) => el.classList.remove('hovered-2'));
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      openBox(".drop-down-catalog", 'li', button, '.drop-down-catalog__content-wrapp')
    });
  });
  buttons2.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      openBox(".drop-down-catalog__content-level-1", 'div', button, '.drop-down-catalog__content-wrapp-2');
    });
  });

  function openBox(contaunerClass, parentEl, button, activeBlockClass){
    const parentDiv = button.closest(parentEl);
    if (!parentDiv) return;

    document
      .querySelectorAll(`${contaunerClass} .hovered`)
      .forEach((el) => el.classList.remove('hovered'));
    document
      .querySelectorAll(`${contaunerClass} .active`)
      .forEach((el) => el.classList.remove('active'));

    parentDiv.classList.add('hovered');

    const contentWrapper = parentDiv.querySelector(activeBlockClass);
    if (contentWrapper) {
      contentWrapper.classList.add('active');
    }
  }
}

export function handleResize() {
  const currentIsMobileView = window.innerWidth < 950;

  if (currentIsMobileView !== isMobileView) {
    isMobileView = currentIsMobileView;

    if (isMobileView) {
      setupMobileMenu();
    } else {
      setupMenuButtons({
        catalogSelector: '.drop-down-catalog',
        buttonSelector: '.drop-down-catalog__btn',
        contentWrapperSelector: '.drop-down-catalog__content-wrapp',
        targetSelector: '.drop-down-catalog__main-content',
        activeClass: 'active',
        hoveredClass: 'hovered',
        isNested: false,
      });
    }
  }
}







