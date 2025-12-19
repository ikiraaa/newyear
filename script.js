// Основные функции сайта
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт новогодних рецептов загружен!');
    
    // Добавляем текущий год в футер
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} Новогодние рецепты. Все права защищены.`;
    }
    
    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Анимация карточек рецептов
    const animateCards = function() {
        const cards = document.querySelectorAll('.recipe-card, .tip');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    };
    
    // Вызываем анимацию при загрузке
    setTimeout(animateCards, 500);
});
