// Theme toggle functionality
const themeBtn = document.getElementById('changeColor');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeBtn.textContent = body.classList.contains('dark-theme') ? 'Light Theme' : 'Change Theme';
});

// Visit counter
let visitCount = localStorage.getItem('visitCount') || 0;
const visitCountElement = document.getElementById('visitCount');
const incrementBtn = document.getElementById('incrementBtn');

visitCountElement.textContent = visitCount;

incrementBtn.addEventListener('click', () => {
    visitCount++;
    visitCountElement.textContent = visitCount;
    localStorage.setItem('visitCount', visitCount);
});

// Form handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    formMessage.className = 'success';
    formMessage.style.display = 'block';
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 3 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 3000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.querySelector('.hero').style.opacity = '0';
    document.querySelector('.hero').style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        document.querySelector('.hero').style.transition = 'all 0.8s ease';
        document.querySelector('.hero').style.opacity = '1';
        document.querySelector('.hero').style.transform = 'translateY(0)';
    }, 100);
});