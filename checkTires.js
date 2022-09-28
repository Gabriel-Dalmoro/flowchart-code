const checkTires = (areTiresInflated) => {
    if (areTiresInflated) {
        console.log("Are my tires inflated?", areTiresInflated);
        console.log("Bike!");
    } else {
        console.log("Are my tires inflated?", areTiresInflated);
        console.log("Inflate tires.");
        console.log("Bike!");
    }
};
exports.checkTires = checkTires;
