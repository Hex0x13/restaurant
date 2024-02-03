
function homePage() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-page');
    homeContainer.classList.add('hidden');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = "Restaurant Name";

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');

    const dateTimeContainer = document.createElement('div');
    dateTimeContainer.classList.add('date-time-container');

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');

    contentContainer.appendChild(restaurantName);
    contentContainer.appendChild(descriptionContainer);
    contentContainer.appendChild(dateTimeContainer);
    contentContainer.appendChild(locationContainer);

    // descriptionContainer children elements:
    const descPar = document.createElement('p');
    descPar.classList.add('desc-par');
    descPar.textContent = (
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna" +
        " aliqua. Ut enim ad minim veniam, quis nostrud exercitation" +
        " ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    
    const descHeader = document.createElement('h2');
    descHeader.classList.add('desc-header');
    descHeader.textContent = "Restaurant";
    
    descriptionContainer.appendChild(descPar);
    descriptionContainer.appendChild(descHeader);


    // dateTimeContainer children elements:
    const dtHeader = document.createElement('h2');
    dtHeader.classList.add('dt-header');
    dtHeader.textContent = "Hours";

    const dtList = document.createElement('ul');
    dtList.classList.add('date-time-par');
    dtList.innerHTML = 
        `<li>Monday: 8am - 6pm</li>
        <li>Tuesday: 8am - 6pm</li>
        <li>Wednesday: 8am - 6pm</li>
        <li>Thursday: 8am - 6pm</li>
        <li>Friday: 8am - 6pm</li>`;
    
    dateTimeContainer.appendChild(dtHeader);
    dateTimeContainer.appendChild(dtList);


    // locationContainer
    const locationHeader = document.createElement('h2');
    locationContainer.classList.add('location-header');
    locationHeader.textContent = "Location";
    
    const locationPar = document.createElement('p');
    locationPar.classList.add('location-par');
    locationPar.textContent = "Route 007, Celadon City, Kanto";

    locationContainer.appendChild(locationHeader);
    locationContainer.appendChild(locationPar);


    homeContainer.appendChild(contentContainer);
    return homeContainer;
}

export default homePage();