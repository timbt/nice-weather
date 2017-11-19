import { fetchElement, createElement, textNode } from './util';

// Function to empty the render container so that renderer function can start
// with a clean container. 
function cleanContainer(container) {
    container.innerHTML = '';
}

export function renderLoading (root) {

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

export function renderWeatherData () {}