const {checkWeather} = require("./checkWeather");
const {onlyRunOnce} = require("./onlyRunOnce");
const {checkTires} = require("./checkTires");

const chooseCardio = (itsNiceOut, haveRunAlready, areTiresInflated) => {
    console.log("start");
    checkWeather(itsNiceOut, haveRunAlready, areTiresInflated)
};

console.log("\n")
console.log("true, true, true")
chooseCardio(true, true, true);
console.log("\n", "\n")
console.log("false, true, true")
chooseCardio(false, true, true);
console.log("\n", "\n")
console.log("true, false, true")
chooseCardio(true, false, true);
console.log("\n", "\n")
console.log("true, true, false")
chooseCardio(true, true, false);

// if (isItNiceOut) {
//     if (haveRunAlready) {
//         if (areTiresInflated) {
//             console.log("Bike")
//         } else {
//             console.log("Inflate tires");
//             console.log("Bike");
//         }
//     } else {
//         console.log("Put running shoes on");
//         console.log("Run");
//     } 
// } else {
//      console.log("Drive to pool");
//      console.log("Put on cap, shorts and goggles");
//      console.log("Swim");
//     }
