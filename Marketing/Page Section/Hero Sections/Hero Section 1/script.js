const menuOpenBtn = document.querySelector('#menu-Openbtn');
const menuCloseBtn = document.querySelector('#menu-CloseBtn');

const toggleMobileMenuDisplay = () => {
    const mobileMenu = document.querySelector('#mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

menuOpenBtn.addEventListener('click', toggleMobileMenuDisplay);
menuCloseBtn.addEventListener('click', toggleMobileMenuDisplay);