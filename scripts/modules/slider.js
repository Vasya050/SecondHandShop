import Swiper from './swiper-bundle.esm.browser.min.js';

const slider = ({selectorSlider, selectorPagination: el, bulletClass, bulletActiveClass}) => {
  new Swiper(selectorSlider, {
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
};

export default slider;