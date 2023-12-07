import contact from "./contact";
import menu from "./menu";
import home from "./home";

let currentPage;

function loadPage(page, container) {
    if (!this.classList.contains('active')) {
        const children = container.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('active');
        }
        this.classList.add('active');
        currentPage.classList.add('hidden');
        currentPage = page;
        currentPage.classList.remove('hidden');
    }
}

export default function header() {
    const header = document.createElement('header');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.onclick = loadPage.bind(homeButton, home, header);
    homeButton.classList.add('active');
    home.classList.remove('hidden');
    currentPage = home;

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.onclick = loadPage.bind(menuButton, menu, header);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.onclick = loadPage.bind(contactButton, contact, header);

    header.append(homeButton, menuButton, contactButton);
    return header;
}