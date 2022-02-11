const photo = document.querySelector('.main').querySelector('.photo');

export const translateMain = (offset) => {
    offset = -offset;

    photo.style.transform = `translate(calc(-50% + ${offset}px), -50%)`;
}