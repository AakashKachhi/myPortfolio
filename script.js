// Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;
        const iconSpan = themeToggleBtn.querySelector('span');

        themeToggleBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            if (html.classList.contains('dark')) {
                iconSpan.textContent = 'light_mode';
                iconSpan.setAttribute('data-icon', 'light_mode');
            } else {
                iconSpan.textContent = 'dark_mode';
                iconSpan.setAttribute('data-icon', 'dark_mode');
            }
        });

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 10) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        });

        // Scroll Reveal Logic
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-card').forEach(card => {
            observer.observe(card);
        });

        