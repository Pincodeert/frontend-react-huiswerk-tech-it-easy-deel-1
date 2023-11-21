import calculateTotalOriginalStock from "./calculateTotalOriginalStock.js";
import calculateTotalSoldTvs from "./calculateTotalSoldTvs.js";
import inventory from "../constants/inventory.js";

function calculateCurrentStock() {
    const currentStock = calculateTotalOriginalStock(inventory) - calculateTotalSoldTvs(inventory);
    return currentStock;
}

export default calculateCurrentStock;