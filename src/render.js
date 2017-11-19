import { fetchElement, createElement, textNode } from './util';

// Function to empty the render container so that a renderer function can start
// with a clean container. 
function cleanContainer(container) {
    container.innerHTML = '';
}

export function renderLoading (root) {
    
    cleanContainer(root);

    var loadingMessage = createElement(
        'p',
        'loading-message',
        [],
        textNode('Fetching weather data...')
    );

    var loadingContainer = createElement(
        'div',
        'loading-container',
        [],
        loadingMessage
    );

    root.appendChild(loadingContainer);
}

export function renderWeatherData (root, data) {

    cleanContainer(root);

    var locationName = createElement(
        'p',
        'location-name',
        [],
        textNode(data.location)
    );

    root.appendChild(locationName);
}