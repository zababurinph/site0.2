import './parts/about.js';
import '../scss/main.scss';

const scrollContainer = document.querySelector("body");
const scrollGallery = document.querySelector(".gallery-container");
let offsetY = 0;
let offsetX = 0;
let scroll = true;
const deltaV = 0.4;
let deltaH = 0;
let deltaW = 0;

window.addEventListener('load', () => {
    
    scrollContainer.addEventListener('wheel', (evt) => {
        deltaW = scrollContainer.scrollWidth - document.documentElement.clientWidth;
        deltaH = scrollGallery.offsetHeight - document.documentElement.clientHeight;
    
        evt.preventDefault();
        
        if (scroll) { offsetX -= evt.deltaY * deltaV;  }
        else offsetY -= evt.deltaY * deltaV;
        
        if (offsetX > 0) offsetX = 0;
        if (offsetX < -deltaW) offsetX = -deltaW;
        // if (offsetX < -2850 && offsetX > -2890) scroll = false;

        if (offsetY > 0) offsetY = 0;
        if (offsetY < -deltaH) offsetY = -deltaH;

        scrollContainer.style.transform = `translateX(${offsetX}px)`;
        console.log(offsetX, scroll);
    });

    // scrollGallery.addEventListener('wheel', (evt) => {
    //     evt.preventDefault();
    //     offsetY -= evt.deltaY * deltaV;
        
    //     if (offsetY > 0) { offsetY = 0; scroll = true }
    //     else if (offsetY < -deltaH) { offsetY = -deltaH; scroll = true }
    //     else scroll = false;

    //     scrollGallery.style.transform = `translateY(${offsetY}px)`;
    // });

});