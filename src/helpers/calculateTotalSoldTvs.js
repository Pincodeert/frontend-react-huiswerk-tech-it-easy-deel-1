function calculateTotalSoldTvs(inventory) {
    // sumOfAllSoldTVs =
    let sum = 0;

    for (let i = 0; i < inventory.length; i++) {
        sum = sum + inventory[i].sold;

    }
    return sum;
}

export default calculateTotalSoldTvs;