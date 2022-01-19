import Swiper from './swiper-bundle.esm.browser.min.js';

const slider = ({selectorSlider, selectorPagination: el, bulletClass, bulletActiveClass, selectorParentSlider}) => {

  const swiper = new Swiper(selectorSlider, {
    init: false,
    autoplay: true,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 60,
    },
    pagination: {
      el,
      type: 'bullets',
      bulletClass,
      bulletActiveClass,
      clickable: true
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    }
  });

  const checkSlider = () => {
    const regexp = /\?(search|category|list)=/;
    const href = location.href;
    if (regexp.test(href)) {
      swiper.disable();
      document.querySelector(selectorParentSlider)?.remove();
    } else {
      swiper.init();
    }

  };

  checkSlider();

  return checkSlider;
};

export default slider;