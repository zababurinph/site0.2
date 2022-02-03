import './parts/about.js';
import '../scss/main.scss';

const scrollContainer = document.querySelector("main");
const scrollGallery = document.querySelector(".gallery-container");
let offsetY = 0;
let offsetX = 0;
let scroll = true;
const deltaV = 0.6;
let deltaH = 0;

window.addEventListener('load', () => {
    let deltaW = scrollContainer.scrollWidth - document.documentElement.clientWidth;

    scrollContainer.addEventListener('wheel', (evt) => {
        deltaH = scrollGallery.offsetHeight - document.documentElement.clientHeight;
    
        evt.preventDefault();
        
        if (scroll) {
            // scrollContainer.scrollLeft += evt.deltaY * deltaV;
            offsetX -= evt.deltaY * deltaV;
        }
        // scrollContainer.scrollLeft += evt.deltaX * deltaV;
        // offsetX -= evt.deltaX * deltaV;
        scrollContainer.style.transform = `translateX(${offsetX}px)`;

        if (offsetX > 0) offsetX = 0;
        if (offsetX < -deltaW) offsetX = -deltaW;
        // if (offsetX < -2845 && offsetX > -2890) scroll = false;

        // console.log(offsetX, scroll)
    });

    scrollGallery.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        offsetY -= evt.deltaY * deltaV;
        
        if (offsetY > 0) { offsetY = 0; scroll = true }
        else if (offsetY < -deltaH) { offsetY = -deltaH; scroll = true }
        else scroll = false;

        scrollGallery.style.transform = `translateY(${offsetY}px)`;
    });

});