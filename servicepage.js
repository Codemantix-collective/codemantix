// Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.getElementById('main-nav');
        
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', 
                menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        });
        
        // FAQ accordion functionality
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
        
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const delay = parseInt(element.dataset.delay) || 0;
                    
                    setTimeout(() => {
                        element.classList.add('animate');
                    }, delay);
                    
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Initialize animations when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Observe elements for scroll animations
            const animatedElements = document.querySelectorAll('.service-card, .process-step, .testimonial, .faq-item');
            animatedElements.forEach(element => {
                observer.observe(element);
            });
            
            // Add click event to CTA button
            const ctaButton = document.querySelector('.cta-button');
            if (ctaButton) {
                ctaButton.addEventListener('click', () => {
                    // Add ripple effect
                    const ripple = document.createElement('span');
                    ripple.style.position = 'absolute';
                    ripple.style.borderRadius = '50%';
                    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                    ripple.style.transform = 'scale(0)';
                    ripple.style.animation = 'ripple 0.6s linear';
                    ripple.style.left = '50%';
                    ripple.style.top = '50%';
                    ripple.style.width = '20px';
                    ripple.style.height = '20px';
                    ripple.style.marginLeft = '-10px';
                    ripple.style.marginTop = '-10px';
                    
                    ctaButton.style.position = 'relative';
                    ctaButton.style.overflow = 'hidden';
                    ctaButton.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            }
            
            // Add hover effects to service cards
            const cards = document.querySelectorAll('.service-card');
            cards.forEach(card => {
                // Mouse enter effect
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                // Mouse leave effect
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                });
            });
            
            // Parallax effect for floating elements
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                
                const floatingElements = document.querySelectorAll('.floating-element');
                floatingElements.forEach((element, index) => {
                    const speed = (index + 1) * 0.3;
                    element.style.transform = `translateY(${rate * speed}px)`;
                });
            });
            
            // Add smooth scrolling for any internal links
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

        // Performance optimization: Throttle scroll events
        function throttle(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Apply throttling to scroll event
        const throttledScroll = throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.3;
                element.style.transform = `translateY(${rate * speed}px)`;
            });
        }, 10);

        window.addEventListener('scroll', throttledScroll);