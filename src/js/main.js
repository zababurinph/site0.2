import './parts/about.js';
import '../scss/main.scss';

const scrollContainer = document.querySelector("main");
const scrollGallery = document.querySelector(".gallery-container");
let offset = 0;

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();

    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.scrollLeft += evt.deltaX;
});

scrollGallery.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    offset -= evt.deltaY;

    if (offset > 0) offset = 0;
    if (offset < -1650) offset = -1650;

    scrollGallery.style.transform = `translateY(${offset}px)`;
    scrollContainer.scrollLeft -= evt.deltaY;
});