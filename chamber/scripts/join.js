document.addEventListener('DOMContentLoaded', () => {
    const modalBtns = document.querySelectorAll('.modal-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close-btn');


    modalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalId = e.target.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'flex';
        });
    });


    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalId = e.target.getAttribute('data-close');
            document.getElementById(modalId).style.display = 'none';
        });
    });


    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});