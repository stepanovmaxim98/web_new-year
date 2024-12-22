const snowflakesContainer = document.querySelector('.snowflakes');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 10 + 5; // Размер от 5 до 15 пикселей
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Устанавливаем случайное время анимации
    const fallDuration = Math.random() * 5 + 3; 
    snowflake.style.animationDuration = `${fallDuration}s`;

    // Устанавливаем случайное положение снежинки по горизонтали
    const startX = Math.random() * window.innerWidth;
    snowflake.style.left = `${startX}px`;

    // Добавляем снежинку в контейнер
    snowflakesContainer.appendChild(snowflake);

    // Удаляем снежинку после завершения анимации
    setTimeout(() => {
        snowflake.remove();
    }, fallDuration * 1000);
}

// Создаём снежинки каждую секунду
setInterval(createSnowflake, 300);