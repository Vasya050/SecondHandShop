import serviceGoods from "../service/serviceGoods.js";
import {getStorage} from "../service/serviceStorage.js";

const createCard = ({id, title, image, price, discountPrice}) => {
  const allFavorite = getStorage('favorite');
  const allCart = getStorage('cart');
  const itemCart = allCart.find(item => item.id === id);

  const li = document.createElement('li');
  li.classList.add('goods__item')
  li.insertAdjacentHTML('beforeend', `
    <article class="item">
      <img src="${image}" alt="${title}" class="item__img">

      <button class="${allFavorite.includes(id) ?
                    'item__favorite-btn active' :
                    'item__favorite-btn'}" data-id="${id}">
        <svg width="28" height="24">
          <use xlink:href="#heart" />
        </svg>
      </button>

      <div class="item__control-wrapper">
        <h3 class="item__title">${title}</h3>

        <button class="item__to-cart to-cart"
          data-id="${id}">${itemCart ? `${itemCart.count} в корзине` : 'В корзину'}</button>

        <p class="item__price">
          ${discountPrice ? `${discountPrice} ₽
          <span class="item__old-price">${price} ₽</span>` : `${price} ₽`}
        </p>
        
        <button class="item__description-btn" data-id="${id}">
          <span class="item__description-text">Подробнее</span>
        </button>
      </div>
    </article>
  `);

  return li
}

const renderCards = (parent) => {
  return (data) => {
    parent.append(...data.map(createCard));
  }
}

const renderGoods = (query, callback) => {
  const list = document.querySelector('.goods__list');
  list.textContent = '';

  serviceGoods(renderCards(list), query, callback)
};

export default renderGoods;