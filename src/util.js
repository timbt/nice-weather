// util.js -- various utility functions to allow for cleaner code in other
// nice-weather modules.

function isNotEmpty(array) {
    return !!array.length;
}

export function textNode(text) {
    return document.createTextNode(text);
}

// Grab an element by its ID
export function fetchElement (elementId) {
    return document.getElementById(elementId);
}

// Attach a 'click' event listener to an element, and pass in a callback
// through 'action' 
export function onClick (elementId, action) {
        fetchElement(elementId).addEventListener('click', action);
}

export function createElement (
    elementType, 
    elementId = '', 
    elementClasses = [],
    child = null
) {
    var element = document.createElement(elementType);
    if (elementId) {
        element.setAttribute('id', elementId);
    } 
    if (isNotEmpty(elementClasses)) {
        element.classList.add(...elementClasses);
    }
    if (child) {
        element.appendChild(child);
    }

    return element;
}