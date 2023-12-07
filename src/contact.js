
function contactPage() {
    const contactContent = document.createElement('div');
    contactContent.textContent = 'This is contact';
    contactContent.classList.add('home-page');
    contactContent.classList.add('hidden');
    return contactContent;
}

export default contactPage();