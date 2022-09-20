
export const convertToK = (value) => {
    const k = value - 273;
    return Math.round(k * 10) / 10;
};