$(document).ready(function() {
    // Set current year
    $('#currentYear').text(new Date().getFullYear());

    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Mobile menu toggle
    $('.menu-toggle').on('click', function() {
        $('nav ul').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Active nav highlighting
    $(window).on('scroll', function() {
        const scroll = $(window).scrollTop();
        $('section').each(function() {
            const top = $(this).offset().top - 100;
            const bottom = top + $(this).outerHeight();
            if (scroll >= top && scroll < bottom) {
                const id = $(this).attr('id');
                $('nav ul li').removeClass('active');
                $(`nav ul li a[href="#${id}"]`).parent().addClass('active');
            }
        });
    });

    // GSAP animations
    gsap.from('.hero-content', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' });
    gsap.from('.about-card', { duration: 1, y: 50, opacity: 0, stagger: 0.2, scrollTrigger: { trigger: '.about', start: 'top 80%' } });
    gsap.from('.feature-card', { duration: 1, y: 50, opacity: 0, stagger: 0.2, scrollTrigger: { trigger: '.features', start: 'top 80%' } });
    gsap.from('.service-card', { duration: 1, y: 50, opacity: 0, stagger: 0.2, scrollTrigger: { trigger: '.services', start: 'top 80%' } });
    // gsap.from('.portfolio-card', { duration: 1, y: 50, opacity: 0, stagger: 0.2, scrollTrigger: { trigger: '.portfolio', start: 'top 80%' } });

    // Form validation
    $('.contact-form').on('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        $(this).find('input[required], textarea[required]').each(function() {
            if (!$(this).val().trim()) {
                $(this).addClass('error');
                isValid = false;
            } else {
                $(this).removeClass('error');
            }
        });
        if (isValid) {
            this.submit();
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out all required fields.');
        }
    });
});