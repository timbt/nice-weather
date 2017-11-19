import { fetchElement, createElement, textNode } from './util';

// Function to empty the render container so that renderer function can start
// with a clean container. 
function cleanContainer(container) {
    container.innerHTML = '';
}

export function renderLoading () {
    var root = fetchElement('render-container');

    var loadingMessage = createElement(
        'p',
        'loading-message',
        [],
        textNode('Fetching data...')
    );
    console.log('loading message...');
    console.log(loadingMessage);

    var loadingContainer = createElement(
        'div',
        'loading-container',
        [],
        loadingMessage
    );
    console.log('loading container...');
    console.log(loadingContainer);

    root.appendChild(loadingContainer);
}