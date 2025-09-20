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

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    gsap.from('.hero-content', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' });

    // Triple cards stagger animation
    gsap.from('.triple-card', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.about-triple', start: 'top 80%' }
    });

    // Services stagger animation
    gsap.from('.service-item', {
        duration: 0.8,
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.services-grid', start: 'top 80%' }
    });

    // Stats counter animation (simple reveal)
    gsap.from('.stats-item', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.stats', start: 'top 80%' }
    });

    // Portfolio stagger animation
    gsap.from('.portfolio-item', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.portfolio-grid', start: 'top 80%' }
    });

    // Team animation
    gsap.from('.team-content', { duration: 1, scale: 0.9, opacity: 0, ease: 'power2.out', scrollTrigger: { trigger: '.team', start: 'top 80%' } });

    // CTA animation
    gsap.from('.cta', { duration: 1, y: 50, opacity: 0, scrollTrigger: { trigger: '.cta', start: 'top 80%' } });

    // Parallax effect on hero nav (optional subtle)
    gsap.to('.hero-nav i', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Header scroll effect
    gsap.to('header', {
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        duration: 0.3,
        scrollTrigger: {
            trigger: 'body',
            start: 'top -10%',
            toggleActions: 'play none none reverse'
        }
    });
    let lastScrollTop = 0;
    $(window).scroll(() => {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop) {
            $('header').addClass('hide')
        } else {
            $('header').removeClass('hide');
        }
        lastScrollTop = scrollTop;
    })
});