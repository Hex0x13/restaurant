import './styles/style.css';
import home from './home';
import menu from './menu';
import contact from './contact';
import header from './header';

function main() {
    const content = document.querySelector('#content');
    const headSection = header();
    const homePage = home;
    const contactPage = contact;
    const menuPage = menu;

    content.appendChild(headSection);
    content.appendChild(homePage);
    content.appendChild(menuPage);
    content.appendChild(contactPage);
}

window.onload = main;