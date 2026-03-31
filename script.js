document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('ano-atual').textContent = new Date().getFullYear();

    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 80) {
            if (currentScrollY > lastScrollY) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    }, { passive: true });

    const btnMenu = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const menuLinks = menu.querySelectorAll('a');

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    const modal = document.getElementById('modal-privacidade');
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtns = [document.getElementById('close-modal'), document.getElementById('close-modal-btn')];
    const modalBackdrop = document.getElementById('modal-backdrop');

    const openModal = (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    openModalBtn.addEventListener('click', openModal);
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    modalBackdrop.addEventListener('click', closeModal);
});