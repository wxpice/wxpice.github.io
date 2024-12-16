// Скрипт для скрытия загрузочного экрана
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('fade-out');

  setTimeout(() => {
      preloader.style.display = 'none';
      document.querySelector('.content').style.display = 'block';
  }, 1000); // Задержка в 1 секунду
});

// Редактирование ячеек (если нужно)
document.querySelectorAll('.editable').forEach(cell => {
  cell.addEventListener('click', () => {
      const currentText = cell.textContent;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentText;

      cell.textContent = '';
      cell.appendChild(input);

      input.focus();

      input.addEventListener('blur', () => {
          cell.textContent = input.value || '—';
      });

      input.addEventListener('keydown', event => {
          if (event.key === 'Enter') {
              input.blur();
          }
      });
  });
});