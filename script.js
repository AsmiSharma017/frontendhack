
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather icons
  feather.replace();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Handle hash in URL for volunteer page sections
  if (window.location.hash) {
    const targetId = window.location.hash;
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Add a slight delay to ensure page is loaded
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }, 300);
    }
  }
  
  // Popover functionality
  const popoverTriggers = document.querySelectorAll('.popover-trigger');
  popoverTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const popoverId = this.nextElementSibling.id;
      const popover = document.getElementById(popoverId);
      if (popover) {
        popover.style.display = popover.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
  
  // Close popovers when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.popover-container')) {
      document.querySelectorAll('.popover-content').forEach(popover => {
        popover.style.display = 'none';
      });
    }
  });
  
  // Handle window scroll for header styling
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = 'none';
    }
  });
  
  // Basic form functionality for volunteer registration
  const registerButtons = document.querySelectorAll('.register-now-btn');
  registerButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Thank you for your interest in volunteering! Registration form will be available soon.');
    });
  });
});

// Console error logging for 404 (similar to React useEffect in NotFound.tsx)
if (window.location.pathname !== '/' && 
    window.location.pathname !== '/index.html' && 
    !window.location.pathname.match(/\.\w+$/)) {
  console.error('404 Error: User attempted to access non-existent route:', window.location.pathname);
}
