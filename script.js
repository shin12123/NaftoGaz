// Toggle Documents Section
function toggleDocuments() {
    const content = document.getElementById('documentsContent');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        toggleIcon.classList.remove('rotated');
    } else {
        content.classList.add('expanded');
        toggleIcon.classList.add('rotated');
    }
}

// Feedback Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Email configuration - update this email address
            const recipientEmail = 'info@naftogaz-zp.com.ua'; // Замініть на реальний email
            
            // Create email body
            const emailBody = `
Ім'я: ${name}
Телефон: ${phone}
Повідомлення: ${message}
            `.trim();
            
            // Create mailto link
            const mailtoLink = `mailto:${recipientEmail}?subject=Запит з сайту Центру обслуговування&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show confirmation message
            alert('Дякуємо за ваше звернення! Відкривається ваш поштовий клієнт для відправки повідомлення.');
            
            // Reset form
            feedbackForm.reset();
        });
    }
    
    // QR codes are loaded from static images in qr/ folder
    
    // Smooth scrolling for anchor links
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
});

// QR codes are loaded from static images in the qr/ folder
// No dynamic generation needed

// Add animation on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', function() {
    // Animate sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
        observer.observe(section);
    });

    // Animate cards with stagger effect
    const cards = document.querySelectorAll('.info-card, .payment-card, .services-list li, .advantage-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });

    // Add smooth hover effect to buttons
    const buttons = document.querySelectorAll('.btn-payment, .documents-toggle, .btn-call, .messenger-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 20px;
                height: 20px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                transform: translate(-50%, -50%) scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

