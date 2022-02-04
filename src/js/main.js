import './parts/about.js';
import '../scss/main.scss';

const scrollContainer = document.querySelector("body");
const scrollGallery = document.querySelector(".gallery-container");
let offsetY = 0;
let offsetX = 0;
let scrollBeforeGallery = true;
let scrollAfterGallery = false;
const deltaV = 0.4;
let deltaH = 0;
let deltaW = 0;

window.addEventListener('load', () => {
    
    scrollContainer.addEventListener('wheel', (evt) => {
        deltaW = scrollContainer.scrollWidth - document.documentElement.clientWidth;
        deltaH = scrollGallery.offsetHeight - document.documentElement.clientHeight;
        let offsetGallery = -(document.querySelector(".main").offsetWidth + document.querySelector(".taplink").offsetWidth + document.querySelector(".about").offsetWidth + 93);

        evt.preventDefault();
        
        if (scrollBeforeGallery || scrollAfterGallery) { offsetX -= evt.deltaY * deltaV;  }
        else offsetY -= evt.deltaY * deltaV;
        
        if (offsetX > 0) offsetX = 0;
        if (offsetX < -deltaW) offsetX = -deltaW;
        if (offsetX < offsetGallery && scrollBeforeGallery) { scrollBeforeGallery = false; offsetX = offsetGallery };
        if (offsetX > offsetGallery && scrollAfterGallery) { scrollAfterGallery = false; offsetX = offsetGallery };

        if (offsetY > 0 && !scrollBeforeGallery) {offsetY = 0; scrollBeforeGallery = true }
        if (offsetY < -deltaH && !scrollAfterGallery) { offsetY = -deltaH; scrollAfterGallery = true }

        scrollContainer.style.transform = `translateX(${offsetX}px)`;
        scrollGallery.style.transform = `translateY(${offsetY}px)`;

        console.log(offsetX, offsetY, scrollBeforeGallery, scrollAfterGallery);
    });
});