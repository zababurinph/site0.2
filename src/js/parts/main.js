const main = document.querySelector('.main')
const photo = main.querySelector('.photo');
const name = main.querySelector('.name');
const mazok = main.querySelector('.div_mazok');
const sos = main.querySelector('.div_sos');

export const translateMain = (offset) => {
    offset = offset / 10;

    photo.style.transform = `translateX(${offset}px)`;
    name.style.transform = `translateX(${offset}px)`;
    mazok.style.transform = `translateX(${offset/2}px)`;
    sos.style.transform = `translateX(${offset/2}px)`;
    // console.log(offset)
}