export function openMenu (btnId) {
  const btn = document.querySelector(`#${btnId}`)
  const menu = document.querySelector(`[data-window-id="${btnId}"]`);

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
  })

  document.addEventListener('click', (event) => {
    const isClickInsideBtn = btn.contains(event.target);
    const isClickInsideMenu = menu.contains(event.target);

    if (!isClickInsideBtn && !isClickInsideMenu) {
      btn.classList.remove('active');
      menu.classList.remove('active');
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      btn.classList.remove('active');
      menu.classList.remove('active');
    }
  });
}