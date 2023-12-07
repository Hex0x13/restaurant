
function homePage() {
    const homeContainer = document.createElement('div');
    homeContainer.textContent = 'This is the main page';
    homeContainer.classList.add('home-page');
    homeContainer.classList.add('hidden');
    return homeContainer;
}

export default homePage();