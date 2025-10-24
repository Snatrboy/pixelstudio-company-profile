$(document).ready(function() {
    
    // ===== NAVBAR SCROLL EFFECT =====
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // ===== SMOOTH SCROLL NAVIGATION =====
    $('.nav-link').on('click', function(e) {
        const href = $(this).attr('href');
        
        // Only smooth scroll for anchors on same page
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = $(href);
            
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800);
                
                // Close mobile menu if open
                $('.nav-menu').removeClass('active');
                $('.hamburger').removeClass('active');
            }
        }
    });

    // ===== MOBILE MENU TOGGLE =====
    $('#hamburger').click(function() {
        $(this).toggleClass('active');
        $('#navMenu').toggleClass('active');
    });

    // Close menu when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.nav-container').length) {
            $('.nav-menu').removeClass('active');
            $('.hamburger').removeClass('active');
        }
    });

    // ===== ACTIVE MENU HIGHLIGHT ON SCROLL =====
    $(window).on('scroll', function() {
        let scrollPos = $(window).scrollTop() + 100;
        
        $('.nav-link').each(function() {
            let currLink = $(this);
            let refElement = $(currLink.attr('href'));
            
            if (refElement.length && refElement.position().top <= scrollPos && 
                refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass('active');
                currLink.addClass('active');
            }
        });
    });

    // ===== COUNTER ANIMATION (Stats) =====
    let counterAnimated = false;
    
    function animateCounters() {
        $('.stat-number').each(function() {
            const $this = $(this);
            const target = parseInt($this.data('target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                $this.text(Math.floor(current) + '+');
            }, 16);
        });
    }

    // ===== SCROLL ANIMATIONS =====
    function checkScroll() {
        $('.scroll-animate').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (windowBottom > elementTop + 100) {
                $(this).addClass('animated');
            }
        });
        
        // Trigger counter animation when stats section is visible
        if (!counterAnimated) {
            const statsSection = $('.stats');
            if (statsSection.length) {
                const statsTop = statsSection.offset().top;
                const windowBottom = $(window).scrollTop() + $(window).height();
                
                if (windowBottom > statsTop + 100) {
                    animateCounters();
                    counterAnimated = true;
                }
            }
        }
    }
    
    $(window).on('scroll', checkScroll);
    checkScroll(); // Check on page load

    // ===== PORTFOLIO FILTER =====
    $('.filter-btn').click(function() {
        const filter = $(this).data('filter');
        
        // Update active button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filter projects
        if (filter === 'all') {
            $('.project-card').fadeIn(400);
        } else {
            $('.project-card').fadeOut(400);
            $('.project-card[data-category="' + filter + '"]').fadeIn(400);
        }
    });

    // ===== FORM VALIDATION =====
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Real-time validation
    $('#name').on('blur', function() {
        validateName();
    });
    
    $('#email').on('blur', function() {
        validateEmail();
    });
    
    $('#message').on('blur', function() {
        validateMessage();
    });
    
    // Character counter for message
    $('#message').on('input', function() {
        const length = $(this).val().length;
        $('#charCount').text(length);
        
        if (length > 500) {
            $(this).val($(this).val().substring(0, 500));
            $('#charCount').text(500);
        }
    });
    
    // Form submit validation
    $('#contactForm').on('submit', function(e) {
        let isValid = true;
        
        if (!validateName()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validateMessage()) isValid = false;
        
        if (!isValid) {
            e.preventDefault();
            
            // Scroll to first error
            const firstError = $('.error-msg.show').first();
            if (firstError.length) {
                $('html, body').animate({
                    scrollTop: firstError.offset().top - 100
                }, 400);
            }
        }
    });
    
    // Validation functions
    function validateName() {
        const name = $('#name').val().trim();
        const errorMsg = $('#nameError');
        
        if (name === '') {
            errorMsg.text('Name is required').addClass('show');
            return false;
        } else if (name.length < 3) {
            errorMsg.text('Name must be at least 3 characters').addClass('show');
            return false;
        } else {
            errorMsg.removeClass('show');
            return true;
        }
    }
    
    function validateEmail() {
        const email = $('#email').val().trim();
        const errorMsg = $('#emailError');
        
        if (email === '') {
            errorMsg.text('Email is required').addClass('show');
            return false;
        } else if (!emailRegex.test(email)) {
            errorMsg.text('Please enter a valid email address').addClass('show');
            return false;
        } else {
            errorMsg.removeClass('show');
            return true;
        }
    }
    
    function validateMessage() {
        const message = $('#message').val().trim();
        const errorMsg = $('#messageError');
        
        if (message === '') {
            errorMsg.text('Message is required').addClass('show');
            return false;
        } else if (message.length < 10) {
            errorMsg.text('Message must be at least 10 characters').addClass('show');
            return false;
        } else {
            errorMsg.removeClass('show');
            return true;
        }
    }

    // ===== ALERT AUTO-HIDE =====
    setTimeout(function() {
        $('.alert').fadeOut(400);
    }, 5000);

});

// ===== VANILLA JS FOR INTERSECTION OBSERVER (Better Performance) =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe all scroll-animate elements
    document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.observe(element);
    });
    
});