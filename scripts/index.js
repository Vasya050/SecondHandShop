import burgerMenu from "./modules/burgerMenu.js";
import searchControl from "./modules/searchControl.js";
import selectControl from "./modules/selectControl.js";
import slider from "./modules/slider.js";
import renderGoods from "./modules/renderGoods.js";
import interceptLink from "./modules/interceptLink.js";
import itemModal from "./modules/itemModal.js";
import addFavorite from "./modules/addFavorites.js";
import controlCart from "./modules/addCard.js";
import renderCart from "./modules/renderCart.js";


burgerMenu({
  selectorBtn: '.navigation__btn',
  selectorMenu: '.navigation',
  classActive: 'navigation_active',
  selectorClose: '.navigation__link, .header__btn',
});



selectControl({
  selectorBtn: '.footer__subtitle',
  selectorSelect: '.footer__nav-item',
  classActive: 'footer__nav-item_active',
  breakpoint: 760,
})

const checkSlider = slider({
  selectorParentSlider: '.hero',
  selectorSlider: '.hero__slider',
  selectorPagination: '.hero__slider-pagination',
  bulletClass: 'hero__slider-line',
  bulletActiveClass: 'hero__slider-line_active'
});


searchControl({
  selectorBtn: '.search__button',
  selectorForm: '.search',
  classActive: 'search_active',
  selectorClose: '.search__close',
  breakpoint: 760,
  callback: checkSlider
});

renderGoods(location.search, () => {
  document.body.style.opacity = '1';
});

interceptLink(checkSlider);

itemModal({
  selectorHandler: '.item__description-btn',
  selectorParent: '.goods__list',
  selectorModal: '.overlay_item',
  classActive: 'overlay_active',
  closeSelector: '.modal-item__btn-to-cart, .overlay__button-close',
});

itemModal({
  selectorHandler: '.header__btn_cart',
  selectorModal: '.overlay_cart',
  classActive: 'overlay_active',
  closeSelector: '.overlay__button-close',
  callback: renderCart,
});

addFavorite({
  linkFavoriteHandler: '.header__btn_favorite',
  targetSelector: '.item__favorite-btn',
  parentSelector: '.goods__list',
});

addFavorite({
  linkFavoriteHandler: '.header__btn_favorite',
  targetSelector: '.modal-item__btn-to-favorite',
  changeActiveClass: '.item__favorite-btn'
});


controlCart({
  selectorAdd: '.item__to-cart',
  selectorParent: '.goods__list',
  text: '{count} в корзине',
});

controlCart({
  selectorAdd: '.modal-item__btn-to-cart',
  text: '{count} в корзине',
  selectorText: {
    selector: '.item__to-cart',
    text: '{count} в корзине',
  }
})

controlCart({
  selectorAdd: '.props__btn_plus',
  selectorParent: '.modal-cart__list',
  selectorRemove: '.props__btn_minus',
  selectorText: {
    selector: '.item__to-cart',
    text: '{count} в корзине',
  },
  callback: renderCart,
});
