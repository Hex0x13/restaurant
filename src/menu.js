
function menuPage() {
    const menuContent = document.createElement('div');
    menuContent.textContent = 'Menu Contents';
    menuContent.classList.add('menu-page');
    menuContent.classList.add('hidden');
    return menuContent;
}

export default menuPage();