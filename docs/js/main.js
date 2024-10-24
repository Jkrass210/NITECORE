import { openDrop } from './module/openDrop.js';
import { activateTab } from './module/activateTab.js';
import { updateActiveContent, setupCatalogButtons } from './module/dropDownCatalog.js';
import { openMenu } from './module/openMenu.js';

if (document.querySelectorAll('.drop-down-btn')) {
  const btnsDrop = document.querySelectorAll('.drop-down-btn');
  btnsDrop.forEach(btn => {
    btn.addEventListener('click', () => {
      openDrop(btn, '.drop-down-item')
    })
  })
}

if (document.querySelector('#swiper-1')) {
  const swiper1 = new Swiper("#swiper-1", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      570: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      980: {
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

if (document.querySelector('#swiper-2')) {
  const swiper2 = new Swiper("#swiper-2", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      570: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      980: {
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

if (document.querySelector('#swiper-3')) {
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

if (document.querySelector('#swiper-4')) {
  const swiper4 = new Swiper("#swiper-4", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    pagination: {
      el: ".main-sec1__swiper-pagination",
      clickable: true,
    },
  });
}

if (document.querySelector('#swiper-5') && document.querySelector('#swiper-6')) {
  const swiper6 = new Swiper("#swiper-6", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: false,
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
  updateActiveContent();
  setupCatalogButtons();
}

if (document.querySelector("#dropCatalog") && document.querySelector(`[data-window-id="dropCatalog"]`)) {
  openMenu("dropCatalog")
}

if (document.querySelector("#burgerMenu") && document.querySelector(`[data-window-id="burgerMenu"]`)) {
  openMenu("burgerMenu", true)
}

if (document.querySelector('#swiper-7')) {
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
