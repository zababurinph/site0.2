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
    
        evt.preventDefault();
        
        if (scrollBeforeGallery || scrollAfterGallery) { offsetX -= evt.deltaY * deltaV;  }
        else offsetY -= evt.deltaY * deltaV;
        
        if (offsetX > 0) offsetX = 0;
        if (offsetX < -deltaW) offsetX = -deltaW;
        if (offsetX < -2880 && scrollBeforeGallery) { scrollBeforeGallery = false; offsetX = -2880 };
        if (offsetX > -2880 && scrollAfterGallery) { scrollAfterGallery = false; offsetX = -2880 };

        if (offsetY > 0 && !scrollBeforeGallery) {offsetY = 0; scrollBeforeGallery = true }
        if (offsetY < -deltaH && !scrollAfterGallery) { offsetY = -deltaH; scrollAfterGallery = true }

        scrollContainer.style.transform = `translateX(${offsetX}px)`;
        scrollGallery.style.transform = `translateY(${offsetY}px)`;

        console.log(offsetX, offsetY, scrollBeforeGallery, scrollAfterGallery);
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