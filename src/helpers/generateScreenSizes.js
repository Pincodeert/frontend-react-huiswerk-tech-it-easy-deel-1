import convertInchesToCentimeters from "./convertInchesToCentimeters.js";

function generateArrayOfScreenSizes(tv) {
    let screenSizes = "";

    for (let i = 0; i < tv.availableSizes.length ; i++) {
        screenSizes = screenSizes + tv.availableSizes[i] + " inch (" + convertInchesToCentimeters(tv.availableSizes[i])
            + ") | ";
        if(i == tv.availableSizes.length -1) {
            screenSizes = screenSizes + tv.availableSizes[i] + " inch (" + convertInchesToCentimeters(tv.availableSizes[i])
                + ")"
        }
    }

    return screenSizes;
}

export default generateArrayOfScreenSizes;