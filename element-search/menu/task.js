const link = document.querySelector('.menu_main');

link.addEventListener('click', e => {
  const linkTarget = e.target
  if (!linkTarget.classList.contains('menu__link')) return
  const menuItem = linkTarget.closest('.menu__item')
  if (!menuItem.querySelector('.menu_sub')) return
  e.preventDefault();
  let menuActive = menuItem.querySelector('.menu_active')
  if (menuActive) {
    menuActive.classList.remove('menu_active');
    return
  } 
  menuActive = link.querySelector('.menu_active')
  if (menuActive) menuActive.classList.remove('menu_active');
  menuItem.querySelector('.menu_sub').classList.add('menu_active')
})