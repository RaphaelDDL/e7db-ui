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

Vue.filter('catalystName', function(value) {
    if (!value) {
        return '';
    }
    if (typeof value !== 'string') {
        return value;
    }

    const ITEM_LIST = {
        // General
        molagora: 'Molagora',
        molagorago: 'Molagorago',
        gold: 'Gold',
        // Life Runes
        'life-rune': 'Life Rune',
        'greater-life-rune': 'Greater Life Rune',
        'epic-life-rune': 'Epic Life Rune',
        // Flame Runes
        'flame-rune': 'Flame Rune',
        'greater-flame-rune': 'Greater Flame Rune',
        'epic-flame-rune': 'Epic Flame Rune',
        // Earth Runes
        'earth-rune': 'Earth Rune',
        'greater-earth-rune': 'Greater Earth Rune',
        'epic-earth-rune': 'Epic Earth Rune',
        // Frost Runes
        'frost-rune': 'Frost Rune',
        'greater-frost-rune': 'Greater Frost Rune',
        'epic-frost-rune': 'Epic Frost Rune',
        // Light Runes
        'light-rune': 'Light Rune',
        'greater-light-rune': 'Greater Light Rune',
        'epic-light-rune': 'Epic Light Rune',
        // Dark Runes
        'dark-rune': 'Dark Rune',
        'greater-dark-rune': 'Greater Dark Rune',
        'epic-dark-rune': 'Epic Dark Rune',
        // Aries
        'blessing-of-orbis': 'Blessing of Orbis',
        'nightmare-mask': 'Nightmare Mask', // Also worldSkill
        'path-power-loop': 'Path Power Loop',
        // Taurus
        'blazing-rage': 'Blazing Rage',
        'horn-of-desire': 'Horn of Desire', // Also worldSkill
        'shiny-enchantment': 'Shiny Enchantment',
        // Gemini
        'small-sun-badge': 'Small Sun Badge',
        'fused-nerve': 'Fused Nerve', // Also worldSkill
        'ring-of-glory': 'Ring of Glory',
        // Cancer
        'special-alarm-loop': 'Special Alarm Loop',
        'the-heart-of-hypocrisy': 'The Heart of Hypocrisy', // Also worldSkill
        'baby-mouse-insignia': 'Baby Mouse Insignia',
        // Leo
        'ultra-fang': 'Ultra Fang',
        'blazing-soul': 'Blazing Soul', // Also worldSkill
        'twisted-fang': 'Twisted Fang',
        // Virgo
        'eternal-forest-dust': 'Eternal Forest Dust',
        'demon-blood-gem': 'Demon Blood Gem', // Also worldSkill
        'flame-of-soul': 'Flame of Soul',
        // Libra
        'dream-time-circuit': 'Dream Time Circuit',
        'reingar-student-id': 'Reingar Student ID', // Also worldSkill
        'mysterious-flash': 'Mysterious Flash',
        // Scorpio
        'erikion-carpace': 'Erikion Carpace',
        'black-curse-powder': 'Black Curse Powder', // Also worldSkill
        'sharp-spearhead': 'Sharp Spearhead',
        // Sagittarius
        'cold-look': 'Cold Look',
        'mercendarys-medicine': "Mercendary's Medicine", // Also worldSkill
        'archers-vision': 'Archers Vision',
        // Capricorn
        'cursed-ashes': 'Cursed Ashes',
        'dragons-wrath': "Dragon's Wrath",
        'slime-jelly': 'Slime Jelly',
        // Aquarius
        'order-of-the-shield-insignia': 'Order of the Shield Insignia',
        'fighter-medal': 'Fighter Medal', // Also worldSkill
        'leather-sheath': 'LEather Sheath',
        // Pisces
        'blood-flaked-bone': 'Blood Flaked Bone',
        'ancient-creature-nucleus': 'Ancient Creature Nucleus', // Also worldSkill
        'strange-jelly': 'Strange Jelly',
    };

    return ITEM_LIST[value] || value;
});
