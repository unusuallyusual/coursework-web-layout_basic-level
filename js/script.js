
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#search').addEventListener('click', function () {
    $(".search-form__input").show()
    $(".search-form__button").show()
    $(".search-button").hide()
    if ($(window).width() > 640 && $(window).width() < 769) {
      $(".search-form__button-close").show()
      $(".header__container picture").hide()
      $("#burger").hide()
    }
    else {
      if ($(window).width() < 641) {
        $(".search-form__button-close").show()
        document.querySelector('.header__search-form').classList.toggle('active')
        document.querySelector('.header__logo').classList.toggle('active')
        document.querySelector('.burger').classList.toggle('active')
      }
    }
  })
  $('#burger').on('click', function() {
    if (!$(this).hasClass('is-active')) { // если класса нет
      $(this).addClass('is-active') // добавляем класс
      document.querySelector('#burger-menu').classList.toggle('is-active')
    } else { // если есть
      $(this).removeClass('is-active'); // убираем класс
      document.querySelector('#burger-menu').classList.remove('is-active')
    }
  })

  document.querySelector('.search-form__button-close').addEventListener('click', function () {
    $(".search-form__input").hide()
    $(".search-form__button").hide()
    $(".search-button").show()
    $(".search-form__button-close").hide()
    $(".header__container picture").show()
    $("#burger").show()
    document.querySelector('.header__search-form.active').classList.remove('active')
    document.querySelector('.header__logo.active').classList.remove('active')
    document.querySelector('.burger.active').classList.remove('active')
  })
  document.querySelector('.developments__btn').addEventListener('click', function () {
    document.querySelector('.developments__item:last-child').classList.toggle('is-active')
    document.querySelector('.developments__item:nth-last-child(-n+2)').classList.toggle('is-active')
    document.querySelector('.developments__item:nth-last-child(-n+3)').classList.toggle('is-active')
    document.querySelector('.developments__btn').classList.toggle('is-active')
    document.querySelector('.developments__list').classList.toggle('is-active')
  })
  document.querySelector('.gallery-slide_modal-1').addEventListener('click', function () {
    document.querySelector('.gallery__modal-list').classList.toggle('is-active')
    document.querySelector('.gallery-slide_modal-1').classList.toggle('is-active')
  })
})

jQuery(function ($) {
  $(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".header__search-form"); // тут указываем класс элемента
    if ($(window).width() > 1400) { }
    else {
      if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".search-form__input").hide()
        $(".search-form__button").hide()
        $(".search-form__button-close").hide()
        $(".search-button").show()
        $(".header__container picture").show()
        $("#burger").show()
        document.querySelector('.header__search-form.active').classList.remove('active')
        document.querySelector('.header__logo.active').classList.remove('active')
        document.querySelector('.burger.active').classList.remove('active')
      }
    }
  });
});


const params = {
  btnClassName: "nav__item-btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}
setMenuListener();


/*MAIN_BANNER*/
const swiper = new Swiper('.main-banner-slider__container', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

/*SELECT*/
const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  position: 'bottom',
});
let ariaLabel = element.getAttribute('aria-label');
element.closest('.choices').setAttribute('aria-label', ariaLabel)

/*CATALOG*/
document.addEventListener('DOMContentLoaded', function () {  /*обработчик событий.*/
  document.querySelectorAll('.catalog__tab').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__info-block').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__info-block-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__info-block-active')

      document.querySelectorAll('.catalog__tabs-item').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__tabs-item-active')
      })
      document.querySelector(`[data-click="${path}"]`).classList.add('catalog__tabs-item-active')
    })

  })
})
document.addEventListener('DOMContentLoaded', function () {  /*обработчик событий.*/
  document.querySelectorAll('.chronology__tab').forEach(function (tabsBttn) {
    tabsBttn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__artist-information-block').forEach(function (tabbContent) {
        tabbContent.classList.remove('catalog__artist-information-block-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__artist-information-block-active')

      document.querySelectorAll('.chronology__tabs-item_artist').forEach(function (tabbContent) {
        tabbContent.classList.remove('chronology__tabs-item_artist-active')
      })
      event.target.parentElement.classList.add('chronology__tabs-item_artist-active')
    })
  })
})


$(function () {
  $(".accordion").accordion({
    header: ".chronology__time-block",
    collapsible: true,
    active: false,
    heightStyle: "content"
  })
})
$(".accordion-1st").accordion({
  header: ".chronology__time-block",
  collapsible: true,
  heightStyle: "content"
});

$(document).ready(function () {
  $("html").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

/*TOOLTIP*/

if ($(window).width() < 1024) {
  tippy('.js-projects-tooltip', {
    theme: 'purple',
    arrow: false,
    trigger: 'click',
  });
} else {
  tippy('.js-projects-tooltip', {
    theme: 'purple',
    arrow: true,
  })
};

/*FORM*/
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
});

/*MAP*/
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.75953507948835, 37.63155839440909],
    zoom: 14
  });

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/my-placemark.svg',
    iconImageSize: [20, 20]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
}


let gallerySlider = new Swiper(".gallery-swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery .gallery-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
    },
    981: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо
   // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
   watchSlidesProgress: true,
   slideVisibleClass: 'slide-visible',

   on: {
     init: function () {
       this.slides.forEach(slide => {
         if (!slide.classList.contains('slide-visible')) {
           slide.tabIndex = '-1';
         } else {
           slide.tabIndex = '';
         }
       });
     },
     slideChange: function () {
       this.slides.forEach(slide => {
         if (!slide.classList.contains('slide-visible')) {
           slide.tabIndex = '-1';
         } else {
           slide.tabIndex = '';
         }
       });
     }
   }
});

const developmentsSwiper = new Swiper(".developments__swiper", {
  pagination: {
    el: ".developments-pagination",
    clickable: true,
    type: 'bullets',
  },
});

var editionsSlider = null;
var mediaQuerySize = 650;

function editionsSliderInit() {
  if (!editionsSlider) {
    editionsSlider = new Swiper(".editions-swiper", {
      slidesPerView: 2,
      slidesPerGroup: 2,
      speed: 1000,
      spaceBetween: 26,
      pagination: {
        el: ".editions .editions-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".editions-next",
        prevEl: ".editions-prev"
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 41,
        },
        981: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 41,
        },

        1400: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 44,
        }
      },
      a11y: false,
      keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

      // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
      watchSlidesProgress: true,
      slideVisibleClass: 'slide-visible2',

      on: {
        init2: function () {
          this.slides.forEach(slide => {
            if (!slide.classList.contains('slide-visible2')) {
              slide.tabIndex = '-1';
            } else {
              slide.tabIndex = '';
            }
          });
        },
        slideChange2: function () {
          this.slides.forEach(slide => {
            if (!slide.classList.contains('slide-visible2')) {
              slide.tabIndex = '-1';
            } else {
              slide.tabIndex = '';
            }
          });
        }
      }
    });
  }
}

function editionsSliderDestroy() {
  if (editionsSlider) {
    editionsSlider.destroy();
    editionsSlider = null;
  }
}

$(window).on('load resize', function () {
  var windowWidth = $(this).innerWidth();

  if (windowWidth <= mediaQuerySize) {
    editionsSliderDestroy()
  } else {
    editionsSliderInit()
  }
});

let projectsSlider = new Swiper(".projects-swiper", {
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 10000
  },
  navigation: {
    nextEl: ".projects__partners-next",
    prevEl: ".projects__partners-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },

  a11y: false,
  keyboard: true
});

(() => {
  const checkBtn = document.querySelector('.js-check-heading');

  checkBtn.addEventListener('click', function () {
    document.querySelector('.checkbox__heading.js-check-heading').classList.toggle('active')
    document.querySelector('.checkbox__list').classList.toggle('active')
  });
})();


