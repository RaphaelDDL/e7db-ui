import Vue from "vue";
import { catalystKeyToName, statusKeyToName, buffDebuffKeyToName } from "~/util/Utils";

// function isInt(n) {
//     return Number(n) === n && n % 1 === 0;
// }

function isZero(n) {
    return Number(n) === n && n === 0;
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

function formatNumber(n) {
    const cents = ".";
    const decimal = ",";

    const values = String(n).trim();
    const x = values.split(cents);
    let x1 = x[0];
    const x2 = x.length > 1 ? cents + x[1] : "";

    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + decimal + "$2");
    }
    return x1 + x2;
}

function toPercent(value) {
    if (typeof value !== "number") {
        return value;
    }
    switch (true) {
        case isFloat(value):
            return (value * 100).toFixed(1) + "%";
        // case isInt(value):
        //     return value + '%';
        case isZero(value):
            return "0%";
        default:
            return value;
        // default:
        //     return '';
    }
}

Vue.filter("statusName", statusKeyToName);
Vue.filter("catalystName", catalystKeyToName);
Vue.filter("formatNumber", formatNumber);
Vue.filter("buffDebuffName", buffDebuffKeyToName);
Vue.filter("toPercent", toPercent);
