const searchControl = ({selectorBtn, selectorForm, classActive, selectorClose}) => {

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
  
    btn.addEventListener('click', activateForm);
    close.addEventListener('click', deactivateForm);
  };
  
  
  export default searchControl;