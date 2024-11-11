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