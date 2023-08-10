export const convertNumberToCurrency = (number: number) => {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
};
