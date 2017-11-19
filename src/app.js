import { fetchElement } from './util';
import { renderLoading, renderData } from './render';
import fetchData from './fetchData';

export default function app () {

    //Grab the URL parameters. 
    var params = (new URL(document.location)).searchParams;
    var location = params.get('location');

    // Fetch the root 'div' element which acts as an anchor for the renderer.
    var root = fetchElement('render-container');

    // If the 'location' parameter is provided, try to fetch and render some 
    // weather data. If not, don't render anything.
    if (location) {
        // Give the user a loading message while the data is fetched.
        renderLoading(root);

        // Render the data.
        fetchData(location, root, renderData);
    }

}