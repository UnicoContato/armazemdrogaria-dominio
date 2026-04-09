document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el));

    // Header Scroll
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) header.classList.add('shadow-md');
            else header.classList.remove('shadow-md');
        });
    }
});

// --- MODAL LOGIC ---
const modal = document.getElementById('privacy-modal');
const openBtn = document.getElementById('open-privacy');
const closeBtns = document.querySelectorAll('#close-modal, #close-modal-btn');

function toggleModal(show) {
    if (!modal) return;

    if (show) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.querySelector('div').classList.remove('scale-95');
            modal.querySelector('div').classList.add('scale-100');
        }, 10);
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('opacity-0');
        modal.querySelector('div').classList.remove('scale-100');
        modal.querySelector('div').classList.add('scale-95');
        document.body.style.overflow = '';

        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

if (openBtn) {
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(true);
    });
}

if (closeBtns) {
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => toggleModal(false));
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleModal(false);
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        toggleModal(false);
    }
});