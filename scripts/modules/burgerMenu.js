const burgerMenu = ({ classActive, selectorBtn, selectorMenu, selectorClose }) => {

  const btn = document.querySelector(selectorBtn);
  const menu = document.querySelector(selectorMenu);

  btn.addEventListener('click', () => {
    menu.classList.toggle(classActive);
  });
  menu.addEventListener('click', event => {
    if (event.target.closest(selectorClose)) {
      menu.classList.remove(classActive);
    }
  })
};


export default burgerMenu;
