import burgerImg from "./image/burger.png";
import friesImg from "./image/fries.png";
import pepperoniImg from "./image/pepperoni-pizza.png";
import freshLumpiaImg from "./image/fresh-lumpia.png";
import spaghettiImg from "./image/spaghetti.png";
import carbonaraImg from "./image/carbonara.png";
import orangeJuiceImg from "./image/orange-juice.png";
import icedTeaImg from "./image/Iced-Tea.png";
import menuLogoIcon from "./image/fast-food.png";

function createItem(img, name, prize) {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const itemImg = document.createElement('img');
    itemImg.src = img;

    const itemName = document.createElement('h3');
    itemName.textContent = name;

    const itemPrice = document.createElement('span');
    itemPrice.textContent = `$${prize.toFixed(2)}`;

    const itemDesc = document.createElement('p');

    item.appendChild(itemImg);
    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemDesc);
    return item;
}

function menuPage() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-page');
    menuContent.classList.add('hidden');

    const menuLogoDiv = document.createElement('div');
    menuLogoDiv.classList.add('menu-logo');
    
    const menuLogoImg = document.createElement('img');
    menuLogoImg.src = menuLogoIcon;

    const menuLogo = document.createElement('h2');
    menuLogo.textContent = 'Menu';
    menuLogoDiv.appendChild(menuLogoImg);
    menuLogoDiv.appendChild(menuLogo);


    const contentContainer = document.createElement('ul');
    contentContainer.classList.add('content-container');

    const hamBurger = createItem(
        burgerImg,
        "hamburger",
        1.92,
    );
    contentContainer.appendChild(hamBurger);

    const frenchFries = createItem(
        friesImg,
        "french fries",
        0.58,
    );
    contentContainer.appendChild(frenchFries);

    const pepperoni = createItem(
        pepperoniImg,
        "pepperoni pizza",
        2.3,
    );
    contentContainer.appendChild(pepperoni);

    const spaghetti = createItem(
        spaghettiImg,
        "spaghetti",
        0.42,
    );
    contentContainer.appendChild(spaghetti);

    const carbonara = createItem (
        carbonaraImg,
        "carbonara",
        0.41,
    );
    contentContainer.appendChild(carbonara);

    const freshLumpia = createItem(
        freshLumpiaImg,
        "fresh lumpia",
        2.0,
    );
    contentContainer.appendChild(freshLumpia);

    const orangeJuice = createItem(
        orangeJuiceImg,
        "orange juice",
        0.33,
    );
    contentContainer.appendChild(orangeJuice);

    const icedTea = createItem(
        icedTeaImg,
        "iced tea",
        0.33,
    );
    contentContainer.appendChild(icedTea);

    menuContent.appendChild(menuLogoDiv);
    menuContent.appendChild(contentContainer);
    return menuContent;
}

export default menuPage();