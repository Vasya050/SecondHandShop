import serviceGoods from "../service/serviceGoods.js";
import {getStorage} from "../service/serviceStorage.js";

const img = document.querySelector('.modal-item__img')
const title = document.querySelector('.modal-item__title');
const advantageList = document.querySelector('.modal-item__advantage-list');
const article = document.querySelector('.modal-item__text_article');
const btnToCart = document.querySelector('.modal-item__btn-to-cart');
const btnToFavorite = document.querySelector('.modal-item__btn-to-favorite');

const renderModal = (data) => {
  img.src = data.image;
  img.alt = data.title;
  title.textContent = data.title;
  article.textContent = data.id;
  btnToCart.dataset.id = data.id;
  btnToFavorite.dataset.id = data.id;

  let htmlAdvantage = '';

  for (const key in data.description) {
    htmlAdvantage += `
      <li class="modal-item__advantage-item">${key}
        <span class="modal-item__text">${data.description[key]}</span>
      </li>
    `;
  }
  ;

  advantageList.innerHTML = htmlAdvantage;

  const allFavorite = getStorage('favorite');
  if (allFavorite.includes(data.id)) {
    btnToFavorite.classList.add('active');
  } else {
    btnToFavorite.classList.remove('active');
  }

  const addCart = getStorage('cart');
  const itemCart = addCart.find(item => item.id === data.id);

  btnToCart.textContent = itemCart ? `${itemCart.count} в корзине` : 'В корзину';


};

const itemModal = ({
                     selectorHandler,
                     selectorParent,
                     selectorModal,
                     classActive,
                     closeSelector,
                     callback,
                   }) => {
  const modal = document.querySelector(selectorModal);
  if (selectorParent) {
    const parent = document.querySelector(selectorParent);

    parent.addEventListener('click', async e => {
      const target = e.target.closest(selectorHandler);

      if (target) {
        await serviceGoods(renderModal, `/${target.dataset.id}`);
        if (callback) callback();
        modal.classList.add(classActive);
      }
    })

  } else {
    const targets = document.querySelectorAll(selectorHandler);
    targets.forEach(target => {
      target.addEventListener('click', () => {
        if (callback) callback();
        modal.classList.add(classActive);
      });
    })
  }

  modal.addEventListener('click', e => {
    const target = e.target;
    if (target === modal || target.closest(closeSelector)) {
      modal.classList.remove(classActive);
    }
  })
};

export default itemModal;