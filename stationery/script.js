// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Active navigation link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Offer button click handlers
const offerButtons = document.querySelectorAll('.offer-card .btn');
offerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const phoneNumber = '8793383227';
        window.location.href = `https://wa.me/${phoneNumber}?text=Hi%20Shri%20Sai%20Stationers!%20I%20am%20interested%20in%20your%20special%20offers.`;
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Phone call button
const callButton = document.querySelector('.contact-info .btn-primary');
if (callButton) {
    callButton.addEventListener('click', () => {
        window.location.href = 'tel:8793383227';
    });
}

// Animate numbers on scroll
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Responsive navigation
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (navLinks) navLinks.style.display = 'flex';
    }
});

// Add smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Product card click handlers (for future integration)
document.querySelectorAll('.product-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const productName = card.querySelector('h3').textContent;
        alert(`Selected: ${productName}\n\nCall us at 8793383227 to book your order!`);
    });
});