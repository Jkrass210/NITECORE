if (document.querySelector('#swiper-1')){
  const swiper1 = new Swiper("#swiper-1", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      725: {
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

if (document.querySelector('#swiper-2')){
  const swiper2 = new Swiper("#swiper-2", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      725: {
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