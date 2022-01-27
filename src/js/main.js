import './parts/about.js';
import '../scss/main.scss';

const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.scrollLeft += evt.deltaX;
});