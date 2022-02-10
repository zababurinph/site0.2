const separator = document.querySelector('.separator-about');
const photo1 = document.querySelector('.about').querySelector('.photo1');
const photo2 = document.querySelector('.about').querySelector('.photo2');

export const translateAboutSeparator = (offset) => {
    offset = offset / 15;

    separator.style.transform = `translateY(${offset}px) rotate(-90deg) translate(-130vh, 5px)`;
}

export const translateAboutPhoto1 = (offset) => {
    offset = (offset + 500) / 10;

    photo1.style.transform = `translateX(${offset}px)`;
}

export const translateAboutPhoto2 = (offset) => {
    offset = (-offset - 800) / 10;
    
    photo2.style.height = `calc(100% + ${offset}px)`;

}