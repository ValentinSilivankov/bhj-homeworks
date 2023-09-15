const link = document.querySelector('.menu_main');

link.addEventListener('click', e => {
  const o = e.target
  if (!o.classList.contains('menu__link')) return
  const op = o.closest('.menu__item')
  if (!op.querySelector('.menu_sub')) return
  e.preventDefault();
  let oa = op.querySelector('.menu_active')
  if (oa) {
    oa.classList.remove('menu_active');
    return
  } 
  oa = link.querySelector('.menu_active')
  if (oa) oa.classList.remove('menu_active');
  op.querySelector('.menu_sub').classList.add('menu_active')
})