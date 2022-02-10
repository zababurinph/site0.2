const separator = document.querySelector('.separator-taplink');

export const translateTaplink = (offset) => {
    offset = offset / 10;

    separator.style.transform = `translateY(${offset}px) rotate(-90deg) translate(-130vh, 5px)`;
}