import { openDrop } from './module/openDrop.js';
import { activateTab } from './module/activateTab.js';
import { updateContent, openMenuLevel1, openMenuLevel2, handleResize, setupMobileMenu } from './module/dropDownCatalog.js';
import { openMenu } from './module/openMenu.js';
import { testWebP } from './module/testWebP.js'
import { toggleModal } from './module/toggleModal.js'
import { newTabs } from './module/newTabs.js'
import { filtersBtnTabs } from './module/filtersBtnTabs.js'
import { boxProductLine } from './module/boxProductLine.js'
import { initFilterToggle } from './module/initFilterToggle.js';
import { setupFormValidation } from './module/setupFormValidation.js'
import { registration } from './module/registration.js'


testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
    console.log("выполнился webp")
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

if (document.querySelectorAll('.drop-down-btn')) {
  const btnsDrop = document.querySelectorAll('.drop-down-btn');
  btnsDrop.forEach(btn => {
    btn.addEventListener('click', () => {
      openDrop(btn, '.drop-down-item')
    })
  })
}

if (document.querySelector('#swiper-1') && document.querySelector('#swiper-1 > .swiper-wrapper') && document.querySelectorAll('#swiper-1 > .swiper-slide')) {
  const swiper1 = new Swiper("#swiper-1", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      570: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1090: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: ".main-sec5__button-next",
      nextEl: ".main-sec5__button-prev",
    },
  });
}

if (document.querySelector('#swiper-2') && document.querySelector('#swiper-2 > .swiper-wrapper') && document.querySelectorAll('#swiper-2 > .swiper-slide')) {
  const swiper2 = new Swiper("#swiper-2", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      570: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1090: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: ".main-sec4__button-next",
      nextEl: ".main-sec4__button-prev",
    },
  });
}

/*
if (document.querySelectorAll(".card3__swiper")){
  document.querySelectorAll('.card3__swiper').forEach((swiperContainer) => {
    new Swiper(swiperContainer, {
      slidesPerView: 1,
      //direction: 'horizontal',
      spaceBetween: 10,
      pagination: {
        el: '.card3__swiper-pagination',
        clickable: true,
      },
      allowTouchMove: false, // Отключить свайп
      simulateTouch: false,
      nested: true, // Важно для вложенных свайперов
    });
  })
}
*/
/*
function initCard3Swipers() {
  document.querySelectorAll('.card3__swiper').forEach((swiperContainer) => {
    if (!swiperContainer.classList.contains('swiper-initialized')) { 
      new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.card3__swiper-pagination',
          clickable: true,
        },
        allowTouchMove: false,
        simulateTouch: false,
        nested: true,
      });
      swiperContainer.classList.add('swiper-initialized'); // Помечаем, что инициализирован
    }
  });
}
*/

function initCard3Swipers() {
  document.querySelectorAll('.card3__swiper').forEach((swiperContainer) => {
    if (!swiperContainer.classList.contains('swiper-initialized')) {
      const swiper = new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.card3__swiper-pagination',
          clickable: true, // Отключаем клики по пагинации
        },
        allowTouchMove: false,
        simulateTouch: false,
        nested: true,
      });

      swiperContainer.classList.add('swiper-initialized');

      /*let lastX = 0;
      let moveAccumulator = 0; // Накопитель смещения
      const threshold = 100; // Минимальная дистанция в пикселях для переключения (увеличил)

      swiperContainer.addEventListener('mousemove', (e) => {
        let deltaX = e.clientX - lastX;
        moveAccumulator += deltaX; // Накопливаем изменение

        if (Math.abs(moveAccumulator) > threshold) { 
          if (moveAccumulator > 0) {
            swiper.slideNext(); // Двигаем вправо
          } else {
            swiper.slidePrev(); // Двигаем влево
          }
          moveAccumulator = 0; // Сбрасываем накопитель после перелистывания
        }

        lastX = e.clientX; // Обновляем позицию
      });*/
    }
  });
}

const observer = new MutationObserver(() => {
  initCard3Swipers(); // Переинициализация, если появились новые карточки
});

observer.observe(document.body, {
  childList: true,
  subtree: true, // Отслеживание вложенных элементов
});

// Инициализируем Swiper для уже существующих карточек
initCard3Swipers();


if (document.querySelector('#swiper-3') && document.querySelector('#swiper-3 > .swiper-wrapper') && document.querySelectorAll('#swiper-3 > .swiper-slide')) {
  const swiper3 = new Swiper("#swiper-3", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1380: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: ".main-sec3__button-next",
      nextEl: ".main-sec3__button-prev",
    },
  });
}

/*if (
  document.querySelector('#swiper-8') &&
  document.querySelector('#swiper-8 > .swiper-wrapper') &&
  document.querySelectorAll('#swiper-8 > .swiper-slide') &&
  document.querySelector('#swiper-4') &&
  document.querySelector('#swiper-4 > .swiper-wrapper') &&
  document.querySelectorAll('#swiper-4 > .swiper-slide')
) {
  const swiper4 = new Swiper("#swiper-4", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    reverseDirection: true,
    on: {
      init: function () {
        const firstSlide = this.slides[this.activeIndex];
        firstSlide.classList.add('swiper-slide-in');
      },
      slideChangeTransitionStart: function () {
        this.slides.forEach(slide => slide.classList.remove('swiper-slide-in'));
      },
      slideChangeTransitionEnd: function () {
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.classList.add('swiper-slide-in');
      }
    },
  });

  const swiper8 = new Swiper("#swiper-8", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    pagination: {
      el: ".main-sec1__swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false, // Продолжать автоплей после взаимодействия
    },
    on: {
      init: function () {
        const firstSlide = this.slides[this.activeIndex];
        firstSlide.classList.add('swiper-slide-in');
      },
      slideChangeTransitionStart: function () {
        this.slides.forEach(slide => slide.classList.remove('swiper-slide-in'));
      },
      slideChangeTransitionEnd: function () {
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.classList.add('swiper-slide-in');
      }
    },
  });

  swiper4.controller.control = swiper8;
  swiper8.controller.control = swiper4;
}*/



function initDesktopSwipers() {
  // Проверяем загружена ли библиотека Swiper
  if (typeof Swiper === 'undefined') {
    return;
  }

  // Проверяем наличие необходимых элементов
  const swiper4El = document.querySelector('#swiper-4');
  const swiper8El = document.querySelector('#swiper-8');
  const paginationEl = document.querySelector('.main-sec1__swiper-pagination');

  if (!swiper4El || !swiper8El || !paginationEl) {
    console.log('Required elements not found:', {
      swiper4: !!swiper4El,
      swiper8: !!swiper8El,
      pagination: !!paginationEl
    });
    return;
  }

  let swiper4 = null;
  let swiper8 = null;

  function initSwipers() {
    console.log('Init swipers, window width:', window.innerWidth);
    
    // Инициализируем только при ширине > 669px
    if (window.innerWidth > 669) {
      if (!swiper4) {
        console.log('Initializing swiper4');
        swiper4 = new Swiper("#swiper-4", {
          slidesPerView: 1,
          spaceBetween: 0,
          freeMode: false,
          reverseDirection: true,
          on: {
            init: function () {
              const firstSlide = this.slides[this.activeIndex];
              firstSlide.classList.add('swiper-slide-in');
              console.log('Swiper4 initialized');
            },
            slideChangeTransitionStart: function () {
              this.slides.forEach(slide => slide.classList.remove('swiper-slide-in'));
            },
            slideChangeTransitionEnd: function () {
              const activeSlide = this.slides[this.activeIndex];
              activeSlide.classList.add('swiper-slide-in');
            }
          },
        });
      }

      if (!swiper8) {
        console.log('Initializing swiper8');
        swiper8 = new Swiper("#swiper-8", {
          slidesPerView: 1,
          spaceBetween: 0,
          freeMode: false,
          pagination: {
            el: ".main-sec1__swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 7000,
            disableOnInteraction: false,
          },
          on: {
            init: function () {
              const firstSlide = this.slides[this.activeIndex];
              firstSlide.classList.add('swiper-slide-in');
              console.log('Swiper8 initialized');
            },
            slideChangeTransitionStart: function () {
              this.slides.forEach(slide => slide.classList.remove('swiper-slide-in'));
            },
            slideChangeTransitionEnd: function () {
              const activeSlide = this.slides[this.activeIndex];
              activeSlide.classList.add('swiper-slide-in');
            }
          },
        });
      }

      // Связываем слайдеры
      if (swiper4 && swiper8) {
        console.log('Linking swipers');
        swiper4.controller.control = swiper8;
        swiper8.controller.control = swiper4;
      }
    } else {
      console.log('Destroying swipers (mobile view)');
      // Уничтожаем слайдеры при ширине ≤ 669px
      if (swiper4) {
        swiper4.destroy();
        swiper4 = null;
      }
      if (swiper8) {
        swiper8.destroy();
        swiper8 = null;
      }
    }
  }

  // Добавляем debounce для resize
  let resizeTimeout;
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initSwipers, 100);
  }

  // Инициализация при загрузке
  initSwipers();

  // Обработчик изменения размера окна
  window.addEventListener('resize', handleResize);
}

// Проверяем состояние документа
function checkDocumentReady() {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initDesktopSwipers();
  } else {
    document.addEventListener('DOMContentLoaded', initDesktopSwipers);
  }
}

// Запускаем проверку
checkDocumentReady();







function initSwiper5() {
  if (document.querySelector('#swiper-5') && document.querySelector('#swiper-5 > .swiper-wrapper') && document.querySelectorAll('#swiper-5 > .swiper-slide') && document.querySelector('#swiper-6') && document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')) {
    const swiper6 = new Swiper("#swiper-6", {
      spaceBetween: 10,
      slidesPerView: 2,
      freeMode: false,
      breakpoints: {
        365: {
          slidesPerView: 3,
        },
        450: {
          slidesPerView: 4,
        },
        520: {
          slidesPerView: 5,
        },
        1030: {
          slidesPerView: 4,
        },
        1435: {
          slidesPerView: 5,
        }
      }
      //watchOverflow: true,
      //watchSlidesProgress: true,
    });
    const swiper5 = new Swiper("#swiper-5", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".product-card-sec1__button-next",
        prevEl: ".product-card-sec1__button-prev",
      },
      thumbs: {
        swiper: swiper6,
      },
    })
  }
}

if (document.querySelector('.product-card-sec1__info')) {
  const parent = document.querySelector('.product-card-sec1__info')
  const buttons = parent.querySelectorAll('.btn6')
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      activateTab(btn.id, "btn6", "product-card-sec1__info")
    })
  })
}

if (document.querySelector('.drop-down-catalog')) {
  const boxCatalog = document.querySelector('.drop-down-catalog')
  if (window.innerWidth > 950) {
    openMenuLevel1({
      boxCatalog: boxCatalog,
      classBtns: 'a.drop-down-catalog__btn',
      classBox: '.drop-down-catalog__content-wrapp',
      targetSelector: '.drop-down-catalog__main-content'
    });
  } else if (window.innerWidth <= 950) {
    setupMobileMenu()
  }


  window.addEventListener('resize', handleResize);
  handleResize();
}

if (document.querySelector("#dropCatalog") && document.querySelector(`[data-window-id="dropCatalog"]`)) {
  openMenu("dropCatalog")
}

if (document.querySelector("#burgerMenu") && document.querySelector(`[data-window-id="burgerMenu"]`)) {
  openMenu("burgerMenu", true)
}

if (document.querySelector('#swiper-7') && document.querySelector('#swiper-7 > .swiper-wrapper') && document.querySelectorAll('#swiper-7 > .swiper-slide')) {
  let swiper7;

  function initSwiper() {
    swiper7 = new Swiper('#swiper-7', {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  function destroySwiper() {
    if (swiper7) {
      swiper7.destroy(true, true);
      swiper7 = null;
    }
  }

  function handleResize() {
    if (window.innerWidth < 1030 && !swiper7) {
      initSwiper();
    } else if (window.innerWidth >= 1030 && swiper7) {
      destroySwiper();
    }
  }
  handleResize();
  window.addEventListener('resize', handleResize);
}

if (!document.querySelector('.new_block') && document.querySelector('#swiper-6') /*&& document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')*/) {
  initSwiper5()
} else if (document.querySelector('.new_block') && document.querySelector('#swiper-6') /*&& document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')*/) {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.product-card-sec1__equipment-list-1') &&
      document.querySelector('#swiper-6') &&
      document.querySelector('.new_block')) {
      initializeSwiperSwitcher({
        buttonListSelector: '.product-card-sec1__equipment-list-1',
        swiperContainerId: 'swiper-6',
        newBlockSelector: '.new_block',
      });
    }
  });
}

function initializeSwiperSwitcher({
  buttonListSelector,
  swiperContainerId,
  newBlockSelector,
}) {
  const buttonList = document.querySelector(buttonListSelector);
  const swiperContainer = document.getElementById(swiperContainerId);
  const newBlock = document.querySelector(newBlockSelector);

  const updateSwiper = (index) => {
    console.log('Индекс для обновления Swiper:', index);
    const allSwipers = newBlock.querySelectorAll('.swiper-wrapper-6');
    console.log('Все списки ul:', allSwipers);
    const selectedSwiper = allSwipers[index];

    if (selectedSwiper) {
      swiperContainer.innerHTML = '';
      const clonedSwiper = selectedSwiper.cloneNode(true);
      swiperContainer.appendChild(clonedSwiper);
      initSwiper5()
      console.log(`Список с индексом ${index} вставлен.`);
    } else {
      console.error(`Список с индексом ${index} не найден.`);
    }
  };

  buttonList.addEventListener('click', (event) => {
    console.log('Клик по кнопке');
    const button = event.target.closest('.product-card-sec1__btn-fasteners');
    if (!button) return;
    refreshFsLightbox();
    const li = button.closest('li');
    const index = Array.from(buttonList.children).indexOf(li);
    console.log('Индекс выбранного элемента:', index);

    buttonList.querySelectorAll('li').forEach((item) =>
      item.classList.remove('selected')
    );
    li.classList.add('selected');
    updateSwiper(index);
  });

  const selectedIndex = Array.from(buttonList.children).findIndex((li) =>
    li.classList.contains('selected')
  );
  if (selectedIndex !== -1) {
    console.log('При загрузке найден элемент с индексом:', selectedIndex);
    updateSwiper(selectedIndex);
  } else {
    console.warn('Нет элемента с классом selected при загрузке.');
  }
}

if (document.getElementById('theme-toggle')) {
  const toggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  toggle.checked = htmlElement.classList.contains('light');

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      htmlElement.className = 'light';
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.className = 'dark';
      localStorage.setItem('theme', 'dark');
    }
  });
}

if (document.querySelector('box-cheap__btn') && document.querySelector('.modal_del_card')) {
  toggleModal('a.btn5', '.modal_del_card', '.modal_del_close', '.modal_del');
}

if (document.querySelector('.box-cheap__btn') && document.querySelector('.box-cheap-modal')) {
  toggleModal('.box-cheap__btn', '.box-cheap-modal', '.modal_del_close', '.modal-product-order__window');
}

if (document.querySelector('a.btn-track-order') && document.querySelector('.modal_del_head_top')) {
  toggleModal('a.btn-track-order', '.modal_del_head_top', '.modal_del_close', '.modal_del_head');
}


if (document.querySelector('.product-card-sec1__box-left') && document.querySelector('.product-card-sec1__hidden-swiper-mobil')) {
  document.addEventListener('DOMContentLoaded', () => {
    const boxLeftWrapp = document.querySelector('.product-card-sec1__box-left-wrapp');
    const hiddenSwiperMobile = document.querySelector('.product-card-sec1__hidden-swiper-mobil');
    const originalParent = boxLeftWrapp.parentElement;

    const handleResize1 = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1030) {
        if (!hiddenSwiperMobile.contains(boxLeftWrapp)) {
          hiddenSwiperMobile.appendChild(boxLeftWrapp);
        }
      } else {
        if (!originalParent.contains(boxLeftWrapp)) {
          originalParent.appendChild(boxLeftWrapp);
        }
      }
    };
    window.addEventListener('resize', handleResize1);
    handleResize1();
  });
}


if (document.querySelectorAll(".product-card-sec1__item-tab .btn6") && document.querySelectorAll(".product-card-sec1__box-content")) {
  document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".product-card-sec1__item-tab .btn6");
    const contentBlocks = document.querySelectorAll(".product-card-sec1__box-content");

    const activeButton = Array.from(tabButtons).find(button => button.classList.contains("active"));
    if (!activeButton && tabButtons.length > 0) {
      tabButtons[0].classList.add("active");
    }

    const activeContent = Array.from(contentBlocks).find(block => block.classList.contains("active"));
    if (!activeContent && contentBlocks.length > 0) {
      contentBlocks[0].classList.add("active");
    }
  });
}

if (document.getElementById('btnScroll')) {
  document.addEventListener('DOMContentLoaded', () => {
    const btnScroll = document.getElementById('btnScroll');

    const toggleScrollButton = () => {
      if (window.scrollY > document.documentElement.scrollHeight / 4) {
        btnScroll.classList.add('active');
      } else {
        btnScroll.classList.remove('active');
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    btnScroll.addEventListener('click', scrollToTop);

    window.addEventListener('scroll', toggleScrollButton);
  });
}

if (document.querySelector('.box-double-catalog')) {
  newTabs();
}

/*document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  let headerHeight = header.offsetHeight;
  let lastScrollY = 0;

  const updateMainPadding = (addPadding) => {
    if (main) {
      main.style.paddingTop = addPadding ? `${headerHeight}px` : '';
    }
  };

  const handleScroll = () => {
    if (window.scrollY > headerHeight) {
      header.classList.add('fixed');
      updateMainPadding(true);
    } else {
      header.classList.remove('fixed');
      updateMainPadding(false);
    }
    lastScrollY = window.scrollY;
    requestAnimationFrame(handleScroll);
  };

  requestAnimationFrame(handleScroll);

  window.addEventListener('resize', () => {
    headerHeight = header.offsetHeight;
    if (header.classList.contains('fixed')) {
      updateMainPadding(true);
    }
  });
});*/

/*document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');

  const updateMainPaddingOnResize = () => {
    if (header && main) {
      const headerHeight = header.offsetHeight;
      main.style.paddingTop = `${headerHeight}px`;
    }
  };

  updateMainPaddingOnResize();

  window.addEventListener('resize', updateMainPaddingOnResize);
});*/

if (document.querySelectorAll(".filters-btn-tabs")) {
  filtersBtnTabs();
};


setTimeout(refreshFsLightbox, 2000);

if (document.querySelector('.product-card-sec1__box-right') && document.querySelector('.box-product-line')) {
  boxProductLine();
};

if (document.querySelector('#swiper-20') && document.querySelector('#swiper-21')) {
  const swiper21 = new Swiper("#swiper-21", {
    spaceBetween: 5, // Расстояние между слайдами превью
    slidesPerView: 4, // Количество превью на экране
    freeMode: true, // Свободная прокрутка
    watchSlidesProgress: true, // Следит за активным слайдом
    breakpoints: {
      1030: {
        spaceBetween: 10,
        slidesPerView: 5,
      },
    },
  });

  const swiper20 = new Swiper("#swiper-20", {
    spaceBetween: 4, // Отступ между слайдами
    breakpoints: {
      1030: {
        spaceBetween: 10,
      },
    },
    thumbs: {
      swiper: swiper21, // Привязываем превью-слайдер
    },
  });
}

/*if(document.querySelectorAll("#productViewer")){
  $(document).ready(function () {
    const frames = 36; // Количество изображений
    const imagePath = "../img/360/{frame}.jpg"; // Путь к изображениям

    const viewer = $("#productViewer");

    // Проверка, чтобы не инициализировать повторно
    if (!viewer.hasClass("initialized")) {
      viewer.addClass("initialized");

      viewer.spritespin({
        source: Array.from({ length: frames }, (_, i) => imagePath.replace("{frame}", i + 1)),
        width: 500,
        height: 400,
        sense: -1, // Инвертирует направление вращения
        responsive: true,
        animate: true, // Отключаем автоматическую анимацию
        loop: true,
      });

      // По желанию, можно добавить класс "active" сразу
      viewer.addClass("active");
    }
  });
}*/

if (document.querySelector('#openFilter')) {
  initFilterToggle('openFilter', 'data-filter-for');
}

if (document.querySelector('#openFilter1')) {
  initFilterToggle('openFilter1', 'data-filter-for-1');
}

if (document.querySelectorAll('.box-form-1__form')) {
  document.querySelectorAll(".box-form-1__form").forEach(form => {
    setupFormValidation(form, ".box-form-1__submit");
  });
}

if (document.querySelector('.partners-sec2__swiper')) {
  const swiperEl = document.querySelector('.partners-sec2__swiper');
  const swiperWrapper = swiperEl.querySelector('.swiper-wrapper');
  const slides = swiperWrapper.querySelectorAll('.swiper-slide');

  const partnersSwiper = new Swiper('.partners-sec2__swiper', {
    slidesPerView: 1,
    spaceBetween: 7,
    //centeredSlides: true,
    //initialSlide: 3,
    speed: 1000,
    freeMode: {
      enabled: true,  // свободное перемещение (без привязки к слайдам)
      momentum: true, // инерция при прокрутке
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      waitForTransition: true,
    },
    breakpoints: {
      580: { slidesPerView: 2, spaceBetween: 10 },
      850: { slidesPerView: 4, spaceBetween: 15 },
      1030: { slidesPerView: 5, spaceBetween: 27 },
    },
    navigation: {
      nextEl: '.partners-sec2__btn-prev',
      prevEl: '.partners-sec2__btn-next',
    },
    on: {
      reachEnd: () => {
        // При достижении конца добавляем копии первых слайдов
        slides.forEach((slide) => {
          const clone = slide.cloneNode(true);
          swiperWrapper.appendChild(clone);
        });
        partnersSwiper.update(); // обновляем Swiper
      },
    },
  });
  swiperEl.addEventListener('mouseenter', () => partnersSwiper.autoplay.stop());
  swiperEl.addEventListener('mouseleave', () => partnersSwiper.autoplay.start());
}

function initMobileSwiper() {
  const swiperEl = document.querySelector('.mobile-swiper-hero');
  if (!swiperEl) return; // если элемента нет - выходим

  let mobileSwiper = null;

  function initSwiper() {
    if (window.innerWidth <= 669 && !mobileSwiper) {
      mobileSwiper = new Swiper('.mobile-swiper-hero', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: '.mobile-swiper-hero__swiper-pagination',
          clickable: true,
        },
        loop: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
      });
    } else if (window.innerWidth > 669 && mobileSwiper) {
      mobileSwiper.destroy();
      mobileSwiper = null;
    }
  }

  // Инициализация сразу (не ждем DOMContentLoaded)
  initSwiper();

  // Обработчик изменения размера окна
  window.addEventListener('resize', initSwiper);
}

// Запускаем инициализацию когда DOM готов
document.addEventListener('DOMContentLoaded', initMobileSwiper);

// Также запускаем сразу (на случай если DOM уже загружен)
if (document.readyState === 'complete') {
  initMobileSwiper();
} else {
  document.addEventListener('DOMContentLoaded', initMobileSwiper);
}

if (document.querySelector('.registration')) {
  registration()
}