import {getStorage, setStorage} from "../service/serviceStorage.js";

const addCart = (elem, text, selectorText) => {
  let obj = {};
  const cart = getStorage('cart');
  const findItem = cart.find(item => item.id === elem.dataset.id);

  if (findItem) {
    obj = findItem;
    obj.count += 1;
  } else {
    obj.count = 1;
    obj.id = elem.dataset.id;
    cart.push(obj);
  }

  if (text) {
    elem.textContent = text.replace('{count}', obj.count);
  }

  setStorage('cart', cart);

  if (selectorText) {
    document.querySelectorAll(`${selectorText.selector}[data-id="${findItem.id}"]`).forEach(elem => {
      elem.textContent = selectorText.text.replace('{count}', obj.count);
    })
  }
};

const removeCart = (elem, selectorText) => {
  const cart = getStorage('cart');
  const findItem = cart.find(item => item.id === elem.dataset.id);

  if (findItem.count > 1) {
    findItem.count -= 1;

    setStorage('cart', cart);

    if (selectorText) {
      document.querySelectorAll(`${selectorText.selector}[data-id="${findItem.id}"]`).forEach(elem => {
        elem.textContent = selectorText.text.replace('{count}', findItem.count);
      })
    }
  } else {
    const newCart = cart.filter(item => item.id !== elem.dataset.id);
    setStorage('cart', newCart);

    if (selectorText) {
      document.querySelectorAll(`${selectorText.selector}[data-id="${findItem.id}"]`).forEach(elem => {
        elem.textContent = 'В корзину';
      })
    }
  }
};

const controlCart = ({selectorAdd, selectorRemove, selectorParent, text, selectorText, callback}) => {

  if (selectorParent) {
    const parent = document.querySelector(selectorParent);

    parent.addEventListener('click', e => {
      const addTarget = e.target.closest(selectorAdd);
      if (addTarget) {
        addCart(addTarget, text, selectorText);
        if (callback) callback();
      }

      const removeTarget = e.target.closest(selectorRemove);
      if (removeTarget) {
        removeCart(removeTarget, selectorText);
        if (callback) callback();
      }

    })
  } else {
    const btn = document.querySelector(selectorAdd);
    btn.addEventListener('click', () => {
      addCart(btn, text, selectorText);
      if (callback) callback();
    });
  }
};


export default controlCart;