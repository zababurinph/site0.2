import '../scss/main.scss';

import { translateMain } from './parts/main.js';
import { translateTaplink } from './parts/taplink.js';
import { translateAboutSeparator, translateAboutPhoto1, translateAboutPhoto2 } from './parts/about.js';
import { translateGallery } from './parts/gallery.js';
import { translateRatesSeparator } from './parts/rates.js';
import { translateContactsSeparator, translateContactsPhoto } from './parts/contacts.js';

const scrollContainer = document.querySelector("body");
const scrollGallery = document.querySelector(".gallery-container");
const loadPage = document.querySelector(".load");
let offsetY = 0;
let offsetX = 0;
let scrollBeforeGallery = true;
let scrollAfterGallery = false;
const deltaV = 0.4;

window.onload = () => {
    console.log("Load completed!");

    loadPage.style.transform = 'translateX(-100vw)';

    scrollContainer.addEventListener('wheel', (evt) => {
        let deltaW = scrollContainer.scrollWidth - document.documentElement.clientWidth - 1;
        let deltaH = scrollGallery.offsetHeight - document.documentElement.clientHeight + 100;
        let offsetGallery = -(document.querySelector(".main").offsetWidth + document.querySelector(".taplink").offsetWidth + document.querySelector(".about").offsetWidth + 93);

        evt.preventDefault();

        if (scrollBeforeGallery || scrollAfterGallery) offsetX -= evt.deltaY * deltaV
        else offsetY -= evt.deltaY * deltaV;

        if (offsetX > 0) offsetX = 0;
        if (offsetX < -deltaW) offsetX = -deltaW;
        if (offsetX < offsetGallery && scrollBeforeGallery) { scrollBeforeGallery = false; offsetX = offsetGallery };
        if (offsetX > offsetGallery && scrollAfterGallery) { scrollAfterGallery = false; offsetX = offsetGallery };

        if (offsetY > 0 && !scrollBeforeGallery) { offsetY = 0; scrollBeforeGallery = true }
        if (offsetY < -deltaH && !scrollAfterGallery) { offsetY = -deltaH; scrollAfterGallery = true }

        scrollContainer.style.transform = `translateX(${offsetX}px)`;
        scrollGallery.style.transform = `translateY(${offsetY}px)`;

        if (offsetX > -950) translateMain(offsetX);
        if (offsetX > -1225) translateTaplink(offsetX);
        if (offsetX < -50 && offsetX > -1640) translateAboutSeparator(offsetX);
        if (offsetX < -160 && offsetX > -2140) translateAboutPhoto1(offsetX);
        if (offsetX < -890 && offsetX > -2750) translateAboutPhoto2(offsetX);
        if (offsetX < -1315 && offsetX > -3400) translateGallery(offsetX);
        if (offsetX < -2730 && offsetX > -4875) translateRatesSeparator(offsetX);
        if (offsetX < -4070) translateContactsSeparator(offsetX);
        if (offsetX < -4800) translateContactsPhoto(offsetX, deltaW);

        // console.log(offsetX);
    });
}

window.addEventListener("mousewheel", (evt) => {
    if (evt.ctrlKey) {
        evt.preventDefault();
        return false;
    }
});