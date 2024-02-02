import burgerImg from "./image/burger.png";
import friesImg from "./image/fries.png";
import pepperoniImg from "./image/pepperoni-pizza.png";
import freshLumpiaImg from "./image/fresh-lumpia.png";
import spaghettiImg from "./image/spaghetti.png";
import carbonaraImg from "./image/carbonara.png";
import orangeJuiceImg from "./image/orange-juice.png";
import icedTeaImg from "./image/Iced-Tea.png";


function createItem(img, name, prize, description) {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const itemImg = document.createElement('img');
    itemImg.src = img;

    const itemName = document.createElement('h3');
    itemName.textContent = name;

    const itemPrice = document.createElement('span');
    itemPrice.textContent = `$${prize.toFixed(2)}`;

    const itemDesc = document.createElement('p');
    itemDesc.textContent = description;

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

    const menuHeading2 = document.createElement('h2');
    menuHeading2.classList.add('menu-logo');
    menuHeading2.textContent = 'Menu';

    const contentContainer = document.createElement('ul');
    contentContainer.classList.add('content-container');

    const hamBurger = createItem(
        burgerImg,
        "hamburger",
        1.92,
        "hamburger bun, ground beef patty, cheese, lettuce, onion, bacon, mayonnaise, ketchup, mustard"
    );
    contentContainer.appendChild(hamBurger);

    const frenchFries = createItem(
        friesImg,
        "french fries",
        0.58,
        "you don't like pizza and burger? you could try our french fries it will made your day."
    );
    contentContainer.appendChild(frenchFries);

    const pepperoni = createItem(
        pepperoniImg,
        "pepperoni pizza",
        2.3,
        "pizza dough, mozzarella cheese, pepperoni, bell pepper, tomato sauce, hot sauce"
    );
    contentContainer.appendChild(pepperoni);

    const spaghetti = createItem(
        spaghettiImg,
        "spaghetti",
        0.42,
        "discover the irresistible taste of our homemade spaghetti, made with fresh, flavorful sauces."
    );
    contentContainer.appendChild(spaghetti);

    const carbonara = createItem (
        carbonaraImg,
        "carbonara",
        0.41,
        "experience the rich and creamy delight of our authentic carbonara, prepared with the finest ingredients."
    );
    contentContainer.appendChild(carbonara);

    const freshLumpia = createItem(
        freshLumpiaImg,
        "fresh lumpia",
        2.0,
        "savor the freshness of our delicious lumpia! crispy, flavorful, and so satisfying!"
    );
    contentContainer.appendChild(freshLumpia);

    const orangeJuice = createItem(
        orangeJuiceImg,
        "orange juice",
        0.33,
        "revitalize your day with our refreshing orange juice, brimming with pure, natural goodness in every sip!"
    );
    contentContainer.appendChild(orangeJuice);

    const icedTea = createItem(
        icedTeaImg,
        "iced tea",
        0.33,
        "quench your thirst with our refreshing iced tea, the perfect blend of cool, flavorful goodness!"
    );
    contentContainer.appendChild(icedTea);

    menuContent.appendChild(menuHeading2);
    menuContent.appendChild(contentContainer);
    return menuContent;
}

export default menuPage();