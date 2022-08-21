// Buyer menu
document.addEventListener("click", documentActions);

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
  menuBlocks.forEach(menuBlock => {
    const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
    menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
  });
}

function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.closest('[data-parent]')) {
    const subMenuId = targetElement.dataset.parent;
    const block = document.querySelector(`[data-submenu="${subMenuId}"]`);
    const activeButton = document.querySelector('.active-button');
    const activeBlock = document.querySelector('.active-block');

    if (activeButton && activeButton !== targetElement) {
      activeButton.classList.remove('active-button');
      activeBlock.classList.remove('active-block');
      document.documentElement.classList.remove('sub-menu-open')
    }
    document.documentElement.classList.toggle('sub-menu-open')
    targetElement.classList.toggle('active-button');
    block.classList.toggle('active-block');
    e.preventDefault();
  }
  if (targetElement.closest('.menu-top-header__link_catalog')) {
    //const catalogLink = targetElement.closest('.menu-top-header__link_catalog');
    document.documentElement.classList.add('catalog-open');
    e.preventDefault();
  }
  if (targetElement.closest('.menu-catalog__back')) {
    document.documentElement.classList.remove('catalog-open');
    document.querySelector('.active-button') ? document.querySelector('.active-button').classList.remove('active-button') : null;
    document.querySelector('.active-block') ? document.querySelector('.active-block').classList.remove('active-block') : null;
    e.preventDefault();
  }
  if (targetElement.closest('.sub-menu-catalog__back')) {
    document.documentElement.classList.remove('sub-menu-open')
    document.querySelector('.active-button') ? document.querySelector('.active-button').classList.remove('active-button') : null;
    document.querySelector('.active-block') ? document.querySelector('.active-block').classList.remove('active-block') : null;
    e.preventDefault();
  }
}