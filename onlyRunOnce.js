const {checkTires} = require("./checkTires");


const onlyRunOnce = (haveRunAlready, areTiresInflated) => {
    if (haveRunAlready) {
        console.log("Have I run already this week?", haveRunAlready);
        checkTires(areTiresInflated);
    } else {
        console.log("Have I run already this week?", haveRunAlready);
        console.log("Put on running shoes");
        console.log("Run!");
    }
};

exports.onlyRunOnce = onlyRunOnce;