import inventory, {bestSellingTv} from "./inventory.js";

// Opdracht 1 - Oefenen met array methodes
// Voordat we array methodes gaan toepassen in React, is het belangrijk om nog even te oefenen met deze methodes in
// 'plain' JavaScript. Maak de volgende opdrachten daarom in het inventory.js bestand, of maak zelf een eigen
// oefen-bestandje aan in diezelfde map. Je kunt de inventory-array dan gewoon importeren. Je hoeft hiervoor geen
// functies te maken. Log de uitkomsten telkens direct in de console.
//
// Opdracht 1a: Gebruik een array-methode om een array te maken met daarin alle tv-type namen. Log de uitkomst in de
// console.
const listOfTvTypes = inventory.map((tv) => {
       // console.log(tv.type);
        return tv.type;
    });
console.log(listOfTvTypes);

// Opdracht 1b: Gebruik een array-methode om alle informatie te verzamelen van de tv's die volledig uitverkocht zijn.
// Log de uitkomst in de console.
console.log("opdracht 1b");
const listOfSoldOutTvs = inventory.filter((tv) => {
    if (tv.originalStock === tv.sold) {
        //console.log(tv.type+ ": original stock - sold =  " + (tv.originalStock - tv.sold));
        return true;
    } else {
        return false;
    }
})
console.log(listOfSoldOutTvs);

// Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.
console.log("opdracht 1c: ")
const tvByType = inventory.find((tv) => {
    if(tv.type === "NH3216SMART") {
        return true;
    } else {
        return false;
    }
});
console.log(tvByType);

//of korter:
const tvByTypeShortcut = inventory.find((tv) => tv.type === "NH3216SMART");
console.log("of via de kortere schrijfwijze: ");
console.log(tvByTypeShortcut);

// Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt of
// deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger). Doe dit in het
// format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.

console.log("opdracht 1d")


// const tvsSuitableForSports = inventory.map((tv) => {
//     let sportsSuitable;
//
//     if(tv.refreshRate >= 100) {
//         sportsSuitable = true;
//     } else {
//         sportsSuitable = false;
//     }
//     return "name: " + tv.brand + " " + tv.name + ", suitable: " + sportsSuitable;
// });
// console.log(tvsSuitableForSports);
//of
console.log("of alternatieve manier: ")
const sportTvs = inventory.map((tv) => {
    if(tv.refreshRate >= 100) {
        return { name: `${tv.brand} ${tv.name}`, suitable: true }
    } else {
        return { name: `${tv.brand} ${tv.name}`, suitable: false }
    }
});
console.log(sportTvs);


// Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn
// in schermgroottes van 65 inch en groter.
console.log("opdracht 1e:")

// const tvsAvailableInBigSizes = inventory.filter((tv) => {
//     const bigSizes = tv.availableSizes.find((size) => {
//         return size >= 65;
//     });
//     return bigSizes;
// });
// console.log(tvsAvailableInBigSizes);


// Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight
// beschikken. Log de uitkomst in de console.

console.log("opdracht 1f")
const options = inventory.filter((tv) => {
    const ambiLights = tv.options.find((option) => {
        return option.name === "ambiLight";
    });
    console.log(inventory.options);
    return ambiLights.applicable === true;

});
console.log(options);

console.log("of:")
// const ambiLightProducts = inventory.filter((tv) => {
//     const optionAmbilight = tv.options.find((option) => {
//         return option.name === 'ambiLight';
//     });
//
//     if (optionAmbilight.applicable === true) {
//         return true;
//     }
//
//     // je kunt dit ook korter opschrijven:
//     // return optionAmbilight.applicable === true;
// });

// console.log(ambiLightProducts);
console.log(bestSellingTv);
console.log(inventory);