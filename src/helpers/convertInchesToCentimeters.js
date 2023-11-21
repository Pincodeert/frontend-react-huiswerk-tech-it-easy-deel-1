function convertInchesToCentimeters(inches) {
    const centimeters = inches * 2.54;
    const roundedCm = Math.round(centimeters);
    return roundedCm;
}

export default convertInchesToCentimeters;