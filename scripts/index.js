import burgerMenu from "./modules/burgerMenu.js";
import searchControl from "./modules/searchControl.js";
import selectControl from "./modules/selectControl.js";
import slider from "./modules/slider.js";

burgerMenu({
  selectorBtn: '.navigation__btn',
  selectorMenu: '.navigation',
  classActive: 'navigation_active',
  selectorClose: '.navigation__link, .header__btn',
});


searchControl({
  selectorBtn: '.search__button',
  selectorForm: '.search',
  classActive: 'search_active',
  selectorClose: '.search__close',
  breakpoint: 760,
});

selectControl({
  selectorBtn: '.footer__subtitle',
  selectorSelect: '.footer__nav-item',
  classActive: 'footer__nav-item_active',
  breakpoint: 760,
})

slider({
  selectorSlider: '.hero__slider',
  selectorPagination: '.hero__slider-pagination',
  bulletClass: 'hero__slider-line',
  bulletActiveClass: 'hero__slider-line_active'
});