import Vue from "vue";
import { catalystKeyToName, /* statusKeyToName, */ buffDebuffKeyToName, formatNumber, toPercent } from "~/util/Utils";

// function isInt(n) {
//     return Number(n) === n && n % 1 === 0;
// }

function capitalizeString(str) {
    const pieces = str.split(" ");
    for (let i = 0; i < pieces.length; i++) {
        const j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");
}

function noUnderscore(value, capitalize = false) {
    if (value && typeof value === "number") {
        value = String(value);
    }
    if (typeof value !== "string") {
        return value;
    }
    const underscoreReplaced = value.replace(/(-|_)/gi, " ");

    if (!capitalize) {
        return underscoreReplaced;
    }
    return capitalizeString(underscoreReplaced);
}

// Vue.filter("statusName", statusKeyToName);
Vue.filter("catalystName", catalystKeyToName);
Vue.filter("formatNumber", formatNumber);
Vue.filter("buffDebuffName", buffDebuffKeyToName);
Vue.filter("toPercent", toPercent);
Vue.filter("noUnderscore", noUnderscore);
