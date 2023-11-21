function calculateTotalOriginalStock(inventory) {
    let sum = 0;
    for (let i = 0; i < inventory.length; i++) {
        sum = sum + inventory[i].originalStock;
    }
    return sum;
}

export default calculateTotalOriginalStock;