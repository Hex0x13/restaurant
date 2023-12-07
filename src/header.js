import contact from "./contact";
import menu from "./menu";
import home from "./home";

let currentPage;

function showPage(page) {
    page.classList.remove('hidden');
}

function hidePage(page) {
    page.classList.add('hidden');
}

function loadPage(page, container) {
    if (!this.classList.contains('active')) {
        const children = container.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('active');
        }
        this.classList.add('active');
        hidePage(currentPage);
        currentPage = page;
        showPage(currentPage);
    }
}

export default function header() {
    const header = document.createElement('header');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.onclick = loadPage.bind(homeButton, home, header);
    homeButton.classList.add('active');
    showPage(home);
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