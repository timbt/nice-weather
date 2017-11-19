import { fetchElement, createElement, textNode } from './util';

// Function to empty the render container so that a renderer function can start
// with a clean container. 
function cleanContainer(container) {
    container.innerHTML = '';
}

function renderWeatherData (root, data) {

    var locationName = createElement(
        'p',
        'location-name',
        [],
        textNode(data.location)
    );

    root.appendChild(locationName);
}

export function renderData (data) {
    const root = fetchElement('render-container');
    cleanContainer(root);

    switch (data.type) {
        case 'weather-data':
            renderWeatherData(root, data);
    }
}

export function renderLoading () {
    const root = fetchElement('render-container');
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