const separator = document.querySelector('.separator-rates');

export const translateRatesSeparator = (offset) => {
    offset = (-offset - 5000) / 10;

    separator.style.transform = `translateY(${offset}px) rotate(-90deg) translate(-130vh, 5px)`;
}