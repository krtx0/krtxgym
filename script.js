// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}


// Equipment gallery image hover effect
const equipmentImages = document.querySelectorAll('.equipment-image');
equipmentImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.classList.add('scale-105');
    });
    image.addEventListener('mouseleave', () => {
        image.classList.remove('scale-105');
    });
});