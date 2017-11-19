// fetchData.js -- Fetch data from the nice-weather backend.
import { createURLQuery } from './util';
import { renderData } from './render';

function reqListener () {
    const data = JSON.parse(this.responseText);
    renderData(data);
}

export default function fetchData (location, root, action) {
    let request = new XMLHttpRequest();
    let queryURL = 'http://192.168.1.2:3000/?' + createURLQuery({location: location});
    request.addEventListener('load', reqListener);
    request.open('GET', queryURL);
    request.send();

}