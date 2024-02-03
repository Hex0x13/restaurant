import gmailIcon from "./image/gmail.png";
import phoneIcon from "./image/telephone.png";
import homeIcon from "./image/home.png";

function contactPage() {
    const textClass = 'rp-text';
    const iconClass = 'rp-icon';

    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-page');
    contactContent.classList.add('hidden');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const heading2 = document.createElement('h2');
    heading2.textContent = 'Contact Us';

    const gmailDiv = document.createElement('div');

    const gmailImg = document.createElement('img');
    gmailImg.classList.add(iconClass);
    gmailImg.src = gmailIcon;
    gmailDiv.appendChild(gmailImg);

    const gmailText = document.createElement('span');
    gmailText.classList.add(textClass);
    gmailText.textContent = 'myemail@unknown.com';
    gmailDiv.appendChild(gmailText);

    const phoneDiv = document.createElement('div');

    const phoneImg = document.createElement('img');
    phoneImg.classList.add(iconClass);
    phoneImg.src = phoneIcon;
    phoneDiv.appendChild(phoneImg);

    const phoneText = document.createElement('span');
    phoneText.classList.add(textClass);
    phoneText.textContent = '63xx xxx xxxx';
    phoneDiv.appendChild(phoneText);

    const homeDiv = document.createElement('div');

    const homeImg = document.createElement('img');
    homeImg.classList.add(iconClass);
    homeImg.src = homeIcon;
    homeDiv.appendChild(homeImg);

    const homeText = document.createElement('span');
    homeText.classList.add(textClass);
    homeText.textContent = 'Testville, TX 98765';
    homeDiv.appendChild(homeText);

    contentContainer.appendChild(heading2);
    contentContainer.appendChild(gmailDiv);
    contentContainer.appendChild(phoneDiv);
    contentContainer.appendChild(homeDiv);

    contactContent.appendChild(contentContainer);
    return contactContent;
}

export default contactPage();