import Vue from 'vue';

// function isInt(n) {
//     return Number(n) === n && n % 1 === 0;
// }

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

Vue.filter('toPercent', function(value) {
    if (!value) {
        return '';
    }
    if (typeof value === 'string') {
        return value;
    }
    switch (true) {
        case isFloat(value):
            return (value * 100).toFixed(1) + '%';
        // case isInt(value):
        //     return value + '%';
        default:
            return value;
        // default:
        //     return '';
    }
});

Vue.filter('statusName', function(value) {
    if (!value) {
        return '';
    }
    switch (value) {
        case 'atk':
            return 'Attack';
        case 'def':
            return 'Defense';
        case 'hp':
            return 'Health';
        case 'spd':
            return 'Speed';
        case 'chc':
            return 'Critical Hit Chance';
        case 'chd':
            return 'Critical Hit Damage';
        case 'eff':
            return 'Effectiveness';
        case 'efr':
            return 'Effect Resistance';
        case 'dac':
            return 'Dual Attack Chance';
        default:
            return '';
    }
});
