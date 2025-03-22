function truncateTo3DecimalPlaces(number:number) {
    return Math.trunc(number * 1000) / 1000;
};
export {truncateTo3DecimalPlaces };