// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.background = 'white';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 产品卡片悬停效果
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 标题动画效果
const brandName = document.querySelector('.brand-name');
const subtitle = document.querySelector('.subtitle');

// 添加打字机效果
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// 页面加载完成后执行动画
window.addEventListener('load', () => {
    // 重置动画
    brandName.style.animation = 'none';
    subtitle.style.animation = 'none';
    
    // 触发重排
    void brandName.offsetWidth;
    void subtitle.offsetWidth;
    
    // 重新添加动画
    brandName.style.animation = 'fadeInUp 1.5s ease forwards';
    subtitle.style.animation = 'fadeInUp 1s ease forwards 1s';
    
    // 添加打字机效果
    setTimeout(() => {
        typeWriter(subtitle, '时尚潮流基地', 150);
    }, 1000);
}); 