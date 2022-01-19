import {getStorage} from "../service/serviceStorage.js";
import serviceGoods from "../service/serviceGoods.js";


const renderList = (cart) => {
  const cartList = document.querySelector('.modal-cart__list');
  const cartTotal = document.querySelector('.modal-cart__total-price');

  cartList.textContent = '';
  const data = getStorage('cart');

  let totalPrice = 0;

  cart.map(({id, title, price, discountPrice, image}) => {
    const li = document.createElement('li');
    li.classList.add('modal-cart__item');

    const truePrice = discountPrice || price;

    const obj = data.find(item => item.id === id);

    li.insertAdjacentHTML('beforeend', `
    <img src="${image}"
      alt="${title}" class="modal-cart__img" width="100" height="105">
    <div class="modal-cart__wrapper">
      <h3 class="modal-cart__sub-title">${title}</h3>
      <ul class="modal-cart__props props">
        <li class="props__item">
          <h4 class="props__title">Артикул:</h4>
          <p class="props__description">${id}</p>
        </li>
        <li class="props__item">
          <h4 class="props__title">Количество:</h4>
          <div class="props__description">
            <button class="props__btn props__btn_minus" type="button" data-id="${id}">-</button>
            <output class="props__count" name="count">${obj.count}</output>
            <button class="props__btn props__btn_plus" type="button" data-id="${id}">+</button>
          </div>
        </li>
        <li class="props__item">
          <h4 class="props__title">Цена, шт</h4>
          <p class="props__description">${truePrice} ₽</p>
        </li>
        <li class="props__item">
          <h4 class="props__title">Стоимость:</h4>
          <p class="props__description">${truePrice * obj.count} ₽</p>
        </li>
      </ul>

      
    </div>
    `);

    cartList.append(li);
    totalPrice += truePrice * obj.count;

  })

  cartTotal.textContent = totalPrice;
}

const renderCart = () => {
  const data = getStorage('cart');
  const list = data.map(item => item.id);
  if (list.length) {
    serviceGoods(renderList, `?list=${list}`)
  } else {
    renderList([]);
  }
};


export default renderCart;