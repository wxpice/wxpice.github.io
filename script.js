window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';

    setTimeout(() => {
        preloader.style.display = 'none';
        const content = document.querySelector('.content');
        content.style.display = 'flex';
    }, 500);
});

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