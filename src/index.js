function onClick(elementId, action) {
    document
        .getElementById(elementId)
        .addEventListener('click', action);
}

document.addEventListener('DOMContentLoaded', event => {
    onClick('search-form-btn', () => {
        alert('hey there!');
        console.log('pls work :(');
    });
});
