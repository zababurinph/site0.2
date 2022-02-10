const separator = document.querySelector('.separator-gallery');

export const translateGallery = (offset) => {
    offset = (offset + 800) / 10;

    separator.style.transform = `translateY(${offset}px) rotate(-90deg) translate(-130vh, 5px)`;
}