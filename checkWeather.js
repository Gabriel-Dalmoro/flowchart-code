const {onlyRunOnce} = require("./onlyRunOnce");

const checkWeather = (itsNiceOut, haveRunAlready, areTiresInflated) => {
    if (itsNiceOut) {
        console.log("Is it nice out?", itsNiceOut);
        onlyRunOnce(haveRunAlready, areTiresInflated);
    } else {
        console.log("Is it nice out?", itsNiceOut);
        console.log("Drive to pool");
        console.log("Put on cap, shorts and goggles");
        console.log("Swim!");
    }
};

exports.checkWeather = checkWeather;