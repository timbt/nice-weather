function onClick(elementId, action) {
    document
        .getElementById(elementId)
        .addEventListener('click', action);
}

document.addEventListener('DOMContentLoaded', event => {
    onClick('btn', () => {
        alert('hey there!');
        console.log('pls work :(');
    });
});
