// fetchData.js -- Fetch data from the nice-weather backend.

export default function fetchData (location, root, action) {
    var data = {type: 'weather-data', 'location': location};
    var timeoutID = window.setTimeout( () => action(root, data), 500);
}