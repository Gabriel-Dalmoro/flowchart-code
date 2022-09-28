const {checkTires} = require("./checkTires");

const getRandomShoe = (shoeArray) => {
    const length = shoeArray.length;
    const randomIndex = Math.floor(Math.random()*length);
    return shoeArray[randomIndex];
}
myShoes = ["nikes", "addidas", "New Balances"];

const onlyRunOnce = (haveRunAlready, areTiresInflated) => {
    if (haveRunAlready) {
        console.log("Have I run already this week?", haveRunAlready);
        checkTires(areTiresInflated);
    } else {
        console.log("Have I run already this week?", haveRunAlready);
        console.log(`Put on ${getRandomShoe(myShoes)} shoes`);
        console.log("Run!");
    }
};

exports.onlyRunOnce = onlyRunOnce;