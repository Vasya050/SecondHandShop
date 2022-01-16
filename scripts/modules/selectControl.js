const selectControl = ({selectorBtn, selectorSelect, classActive, breakpoint}) => {
    const buttons = document.querySelectorAll(selectorBtn);
    const selects = document.querySelectorAll(selectorSelect);
  
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.documentElement.clientWidth <= breakpoint) {
          const parentSelect = btn.closest(selectorSelect);
          parentSelect.classList.toggle(classActive);
  
          selects.forEach(select => {
            if (select !== parentSelect) {
              select.classList.remove(classActive);
            }
          })
        }
      })
    });
  };
  
  
  export default selectControl;
  