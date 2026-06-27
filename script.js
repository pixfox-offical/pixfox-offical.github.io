// Плавная прокрутка для ссылок навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Добавляем анимацию к элементам при их появлении на экране
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Наблюдаем за всеми карточками и элементами функций
document.querySelectorAll('.about-card, .feature-item').forEach(element => {
    observer.observe(element);
});

// Добавляем забавное взаимодействие к emoji
const heroEmoji = document.querySelector('.hero-emoji');
if (heroEmoji) {
    heroEmoji.addEventListener('click', function() {
        this.style.transform = 'scale(1.2) rotate(20deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });

    // Добавляем эффект при наведении
    heroEmoji.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
}

// Анимация навбара при прокрутке
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Прокручиваем вниз
        header.style.transform = 'translateY(-100%)';
    } else {
        // Прокручиваем вверх
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

header.style.transition = 'transform 0.3s ease-in-out';

// Выделение активной ссылки навигации
window.addEventListener('scroll', function() {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.textDecoration = 'underline';
        } else {
            link.style.textDecoration = 'none';
        }
    });
});

console.log('🦊 Сайт PixFox загружен! Веселая и добрая лисичка вас приветствует! 🎉');