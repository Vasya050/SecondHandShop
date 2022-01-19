import renderGoods from "./renderGoods.js";


const searchControl = ({selectorBtn, selectorForm, classActive, selectorClose, breakpoint, callback}) => {

  const btn = document.querySelector(selectorBtn);
  const form = document.querySelector(selectorForm);
  const close = document.querySelector(selectorClose);

  const activateForm = () => {
    form.classList.add(classActive);
    btn.removeEventListener('click', activateForm);
    btn.type = 'submit';
  };

  const deactivateForm = () => {
    form.classList.remove(classActive);
    btn.addEventListener('click', activateForm);
    btn.type = 'button';
  };
  if (document.documentElement.clientWidth > breakpoint) {
    btn.addEventListener('click', activateForm);
    close.addEventListener('click', deactivateForm);
  } else {
    btn.type = 'submit';
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const searchURL = `?search=${e.target.search.value}`;
    history.pushState(searchURL.substring(1),searchURL.substring(1), searchURL);
    renderGoods(searchURL);
    callback();
  });
};


export default searchControl;