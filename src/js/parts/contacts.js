const separator = document.querySelector('.separator-contacts');
const photo = document.querySelector('.contacts').querySelector('.photo');

export const translateContactsSeparator = (offset) => {
    offset = (offset + 3500) / 10;

    separator.style.transform = `translateY(${offset}px) rotate(-90deg) translate(-130vh, 5px)`;
}

export const translateContactsPhoto = (offset, width) => {
    offset = -offset - width;

    photo.style.transform = `translate(calc(-50% + ${offset}px), -50%)`;;
}