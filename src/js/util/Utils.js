// https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

export function stripText(value) {
    return (value + '')
        .trim()
        .toLowerCase()
        .replace(/\s|-|'|&/g, ''); // remove white space and other special characters
}

// general filters
export function getByKeyword(list, keyword) {
    if (typeof keyword !== 'string' || !Array.isArray(list)) {
        return list;
    }
    const search = stripText(keyword);
    if (!search.length) {
        return list;
    }
    return list.filter((listItem) => listItem.trimmedName.indexOf(search) > -1);
}

export function getByRarity(list, rarity) {
    if (!rarity || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem.rarity === rarity);
}

//artifact-specific
export function getByExclusive(list, exclusive) {
    if (!exclusive || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem.exclusive.includes(exclusive));
}

//hero-specifics
export function getByClass(list, heroClass) {
    if (!heroClass || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem.classType === heroClass);
}

export function getByZodiac(list, zodiacSign) {
    if (!zodiacSign || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem.zodiac === zodiacSign);
}

export function getByElement(list, element) {
    if (!element || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem.element === element);
}

export function getByBuffDebuff(list, BuffsDebuffs) {
    if (!Array.isArray(BuffsDebuffs) || !Array.isArray(list)) {
        return list;
    }
    if (!BuffsDebuffs.length) {
        return list;
    }
    return list.filter((hero) => {
        return BuffsDebuffs.map((selectedBuffDebuff) => selectedBuffDebuff._id).every((r) =>
            [...hero.buffs, ...hero.debuffs].includes(r)
        );
    });
}

// export function getByBuff(list, buffs) {
//     if (!Array.isArray(buffs) || !Array.isArray(list)) {
//         return list;
//     }
//     if(!buffs.length){
//         return list;
//     }
//     return list.filter(hero=>{
//         return hero.buffs.some(r=> buffs.map(selectedBuffDebuff=>selectedBuffDebuff._id).includes(r));
// });

// }

// export function getByDebuff(list, debuffs) {
//     if (!Array.isArray(debuffs) || !Array.isArray(list)) {
//         return list;
//     }
//     if(!debuffs.length){
//         return list;
//     }
//     return list.filter(hero=>{
//         return hero.debuffs.some(r=> debuffs.map(selectedBuffDebuff=>selectedBuffDebuff._id).includes(r));
//         });
// }

export function catalystKeyToName(value) {
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
}

export function statusKeyToName(value) {
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
}

const BUFF_DEBUFF_LIST = [
    {
        type: 'D',
        name: 'Decrease Attack',
        _id: 'stic_att_dn',
        description: '',
    },
    {
        type: 'D',
        name: 'Burn',
        _id: 'stic_blaze',
        description: '',
    },
    {
        type: 'D',
        name: 'Decrease Hit Chance',
        _id: 'stic_blind',
        description: '',
    },
    {
        type: 'D',
        name: 'Bleed',
        _id: 'stic_blood',
        description: '',
    },
    {
        type: 'D',
        name: 'Cannot Buff',
        _id: 'stic_buf_impossible',
        description: '',
    },
    {
        type: 'D',
        name: 'Critical Damage Decrease',
        _id: 'stic_cridmg_dn',
        description: '',
    },
    {
        type: 'D',
        name: 'Curse',
        _id: 'stic_curse',
        description: '',
    },
    {
        type: 'D',
        name: 'Decrease Defense',
        _id: 'stic_def_dn',
        description: '',
    },
    // {
    //     type: 'D',
    //     name: 'Confused*',
    //     _id: 'stic_dizzy',
    //     description: '',
    // },
    {
        type: 'D',
        name: 'Decrease Evasion Chance',
        _id: 'stic_dodge_dn',
        description: '',
    },
    {
        type: 'D',
        name: 'Poison',
        _id: 'stic_dot',
        description: '',
    },
    // {
    //     type: 'D',
    //     name: 'Explosion*',
    //     _id: 'stic_explosion',
    //     description: '',
    // },
    // {
    //     type: 'D',
    //     name: 'Freezing*',
    //     _id: 'stic_freezing',
    //     description: '',
    // },
    {
        type: 'D',
        name: 'Unhealable',
        _id: 'stic_heal_impossible',
        description: '',
    },
    {
        type: 'D',
        name: 'Magic Nail',
        _id: 'stic_nail',
        description: '',
    },
    {
        type: 'D',
        name: 'Provoke',
        _id: 'stic_provoke',
        description: '',
    },
    // {
    //     type: 'D',
    //     name: 'Shock*',
    //     _id: 'stic_shock',
    //     description: '',
    // },
    {
        type: 'D',
        name: 'Target',
        _id: 'stic_sign',
        description: '',
    },
    {
        type: 'D',
        name: 'Silence',
        _id: 'stic_silence',
        description: '',
    },
    {
        type: 'D',
        name: 'Sleep',
        _id: 'stic_sleep',
        description: '',
    },
    {
        type: 'D',
        name: 'Decrease Speed',
        _id: 'stic_speed_dn',
        description: '',
    },
    {
        type: 'D',
        name: 'Stun',
        _id: 'stic_stun',
        description: '',
    },
    {
        type: 'D',
        name: 'Vampirism',
        _id: 'stic_vampire',
        description: '',
    },
    // {
    //     type: 'M',
    //     name: 'One Turn Buff',
    //     _id: 'stic_buff_one',
    //     description: '',
    // },
    // {
    //     type: 'M',
    //     name: 'Two Turns Buff',
    //     _id: 'stic_buff_two',
    //     description: '',
    // },
    // {
    //     type: 'M',
    //     name: 'Three Turns Buff',
    //     _id: 'stic_buff_three',
    //     description: '',
    // },
    // {
    //     type: 'M',
    //     name: 'One Turn Debuff',
    //     _id: 'stic_debuff_one',
    //     description: '',
    // },
    // {
    //     type: 'M',
    //     name: 'Two Turn Debuff',
    //     _id: 'stic_debuff_two',
    //     description: '',
    // },
    // {
    //     type: 'M',
    //     name: 'Three Turn Debuff',
    //     _id: 'stic_debuff_three',
    //     description: '',
    // },
    // {
    //     type: 'B',
    //     name: 'Attack Increase',
    //     _id: 'stic_att_inc',
    //     description: '',
    // },
    {
        type: 'B',
        name: 'Increase Attack',
        _id: 'stic_att_up',
        description: '',
    },
    {
        type: 'B',
        name: 'Revive',
        _id: 'stic_bless',
        description: '',
    },
    // {
    //     type: 'B',
    //     name: '',
    //     _id: 'stic_con_up',
    //     description: '',
    // },
    {
        type: 'B',
        name: 'Counter',
        _id: 'stic_counter',
        description: '',
    },
    {
        type: 'B',
        name: 'Critical Rate Up',
        _id: 'stic_cri_up',
        description: '',
    },
    {
        type: 'B',
        name: 'Critical Damage Up',
        _id: 'stic_cridmg_up',
        description: '',
    },
    {
        type: 'B',
        name: 'Immunity',
        _id: 'stic_debuf_impossible',
        description: '',
    },
    {
        type: 'B',
        name: 'Increase Defense',
        _id: 'stic_def_up',
        description: '',
    },
    {
        type: 'B',
        name: 'Increase Evasion Chance',
        _id: 'stic_dodge_up',
        description: '',
    },
    // {
    //     type: 'B',
    //     name: 'Guardian Buff',
    //     _id: 'stic_force_arka',
    //     description: '',
    // },
    {
        type: 'B',
        name: 'Continous Healing',
        _id: 'stic_heal',
        description: '',
    },
    {
        type: 'B',
        name: 'Stealth',
        _id: 'stic_hide',
        description: '',
    },
    {
        type: 'B',
        name: 'Immortal',
        _id: 'stic_immortality',
        description: '',
    },
    {
        type: 'B',
        name: 'Invincible',
        _id: 'stic_invincible',
        description: '',
    },
    {
        type: 'B',
        name: 'Rage',
        _id: 'stic_madness',
        description: '',
    },
    // {
    //     type: 'B',
    //     name: 'HP UP*',
    //     _id: 'stic_maxhp_up',
    //     description: '',
    // },
    {
        type: 'B',
        name: 'Barrier',
        _id: 'stic_protect',
        description: '',
    },
    // {
    //     type: 'B',
    //     name: 'Reflect',
    //     _id: 'stic_reflect',
    //     description: '',
    // },
    // {
    //     type: 'B',
    //     name: 'Restore*',
    //     _id: 'stic_restore',
    //     description: '',
    // },
    {
        type: 'B',
        name: 'Increase Speed',
        _id: 'stic_speed_up',
        description: '',
    },
];

export function buffDebuffKeyToName(_id) {
    if (!_id) {
        return '';
    }
    if (typeof _id !== 'string') {
        return _id;
    }

    return BUFF_DEBUFF_LIST.find((item) => item._id === _id) || _id;
}

export function buffDebuffByType(type) {
    if (!type) {
        return '';
    }
    if (typeof type !== 'string') {
        return [];
    }

    return BUFF_DEBUFF_LIST.filter((item) => item.type === type.toUpperCase()) || [];
}
