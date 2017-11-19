import { fetchElement, onClick } from './util';
import { renderLoading } from './render';

export default function app () {
    let params = (new URL(document.location)).searchParams;
    let location = params.get('location');
    if (location) {
        renderLoading();
    }

}