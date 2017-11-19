import { fetchElement } from './util';
import { renderLoading, renderData } from './render';


export default function app () {
    var params = (new URL(document.location)).searchParams;
    var location = params.get('location');
    var root = fetchElement('render-container');
    if (location) {
        renderLoading(root);
        renderData(root, { 'type': 'weather-data', 'location': location} );
    }

}