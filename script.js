// Скрипт для скрытия загрузочного экрана после загрузки страницы
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');

    // Удаляем прелоадер и показываем контент
    setTimeout(() => {
        preloader.style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 1000);
});

// script.js
document.querySelectorAll(".editable").forEach(cell => {
    cell.addEventListener("click", () => {
      const currentText = cell.textContent;
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentText;
      cell.textContent = ""; // Убираем текст
      cell.appendChild(input); // Вставляем поле ввода
  
      input.focus(); // Автоматически выделяем поле ввода
  
      input.addEventListener("blur", () => {
        // Когда пользователь уходит из ячейки, сохраняем введённое значение
        cell.textContent = input.value || "—";
      });
  
      input.addEventListener("keydown", event => {
        // При нажатии Enter сохраняем значение
        if (event.key === "Enter") {
          input.blur();
        }
      });
    });
  });