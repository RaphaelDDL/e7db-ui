import Vue from 'vue';
import { catalystKeyToName, statusKeyToName, buffDebuffKeyToName } from '@/js/util/Utils';

// function isInt(n) {
//     return Number(n) === n && n % 1 === 0;
// }

function isZero(n) {
    return Number(n) === n && n === 0;
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

Vue.filter('toPercent', function(value) {
    if (typeof value !== 'number') {
        return value;
    }
    switch (true) {
        case isFloat(value):
            return (value * 100).toFixed(1) + '%';
        // case isInt(value):
        //     return value + '%';
        case isZero(value):
            return '0%';
        default:
            return value;
        // default:
        //     return '';
    }
});

Vue.filter('statusName', statusKeyToName);

Vue.filter('catalystName', catalystKeyToName);

Vue.filter('buffDebuffName', buffDebuffKeyToName);
