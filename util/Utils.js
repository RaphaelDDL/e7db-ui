import { basePageHeader } from "~/util/Constants";

// https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

export function stripText(value) {
    return (value + "")
        .trim()
        .toLowerCase()
        .replace(/\s|-|'|&/g, ""); // remove white space and other special characters
}

// general filters
export function getByKeyword(list, keyword) {
    if (typeof keyword !== "string" || !Array.isArray(list)) {
        return list;
    }
    const search = (keyword + "").trim().toLowerCase();
    if (!search.length) {
        return list;
    }
    return list.filter(
        listItem => listItem.name.toLowerCase().includes(search) || listItem.fileId.toLowerCase().includes(search)
    );
}

export function getByRarity(list, rarity) {
    if (!rarity || !Array.isArray(list)) {
        return list;
    }
    return list.filter(listItem => listItem.rarity === rarity);
}

// artifact-specific
export function getByRole(list, role) {
    if (!role || !Array.isArray(list)) {
        return list;
    }
    return list.filter(listItem => listItem.role === role);
}

// hero-specifics
export function getByClass(list, heroClass) {
    if (!heroClass || !Array.isArray(list)) {
        return list;
    }
    return list.filter(listItem => listItem.classType === heroClass || listItem.role === heroClass);
}

export function getByZodiac(list, zodiacSign) {
    if (!zodiacSign || !Array.isArray(list)) {
        return list;
    }
    return list.filter(listItem => listItem.zodiac === zodiacSign);
}

export function getByElement(list, element) {
    if (!element || !Array.isArray(list)) {
        return list;
    }
    return list.filter(listItem => listItem.element === element);
}

export function getByBuffDebuff(list, BuffsDebuffs) {
    if (!Array.isArray(BuffsDebuffs) || !Array.isArray(list)) {
        return list;
    }
    if (!BuffsDebuffs.length) {
        return list;
    }
    return list.filter(hero => {
        return BuffsDebuffs.map(selectedBuffDebuff => selectedBuffDebuff._id).every(r =>
            [...hero.buffs, ...hero.debuffs].includes(r)
        );
    });
}

export function getByImprint(list, imprint) {
    if (!imprint || !Array.isArray(list)) {
        return list;
    }
    return list.filter(listItem => listItem.memoryImprintAttribute === imprint._id);
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
        return "";
    }
    if (typeof value !== "string") {
        return value;
    }

    const ITEM_LIST = {
        // General
        molagora: "Molagora",
        molagorago: "Molagorago",
        gold: "Gold",
        // Life Runes
        "life-rune": "Life Rune",
        "greater-life-rune": "Greater Life Rune",
        "epic-life-rune": "Epic Life Rune",
        // Flame Runes
        "flame-rune": "Flame Rune",
        "greater-flame-rune": "Greater Flame Rune",
        "epic-flame-rune": "Epic Flame Rune",
        // Earth Runes
        "earth-rune": "Earth Rune",
        "greater-earth-rune": "Greater Earth Rune",
        "epic-earth-rune": "Epic Earth Rune",
        // Frost Runes
        "frost-rune": "Frost Rune",
        "greater-frost-rune": "Greater Frost Rune",
        "epic-frost-rune": "Epic Frost Rune",
        // Light Runes
        "light-rune": "Light Rune",
        "greater-light-rune": "Greater Light Rune",
        "epic-light-rune": "Epic Light Rune",
        // Dark Runes
        "dark-rune": "Dark Rune",
        "greater-dark-rune": "Greater Dark Rune",
        "epic-dark-rune": "Epic Dark Rune",
        // Aries
        "blessing-of-orbis": "Blessing of Orbis",
        "nightmare-mask": "Nightmare Mask", // Also worldSkill
        "path-power-loop": "Path Power Loop",
        // Taurus
        "blazing-rage": "Blazing Rage",
        "horn-of-desire": "Horn of Desire", // Also worldSkill
        "shiny-enchantment": "Shiny Enchantment",
        // Gemini
        "small-sun-badge": "Small Sun Badge",
        "fused-nerve": "Fused Nerve", // Also worldSkill
        "ring-of-glory": "Ring of Glory",
        // Cancer
        "special-alarm-loop": "Special Alarm Loop",
        "the-heart-of-hypocrisy": "The Heart of Hypocrisy", // Also worldSkill
        "baby-mouse-insignia": "Baby Mouse Insignia",
        // Leo
        "ultra-fang": "Ultra Fang",
        "blazing-soul": "Blazing Soul", // Also worldSkill
        "twisted-fang": "Twisted Fang",
        // Virgo
        "eternal-forest-dust": "Eternal Forest Dust",
        "demon-blood-gem": "Demon Blood Gem", // Also worldSkill
        "flame-of-soul": "Flame of Soul",
        // Libra
        "dream-time-circuit": "Dream Time Circuit",
        "reingar-student-id": "Reingar Student ID", // Also worldSkill
        "mysterious-flash": "Mysterious Flash",
        // Scorpio
        "erikion-carpace": "Erikion Carpace",
        "black-curse-powder": "Black Curse Powder", // Also worldSkill
        "sharp-spearhead": "Sharp Spearhead",
        // Sagittarius
        "cold-look": "Cold Look",
        "mercendarys-medicine": "Mercendary's Medicine", // Also worldSkill
        "archers-vision": "Archers Vision",
        // Capricorn
        "cursed-ashes": "Cursed Ashes",
        "dragons-wrath": "Dragon's Wrath",
        "slime-jelly": "Slime Jelly",
        // Aquarius
        "order-of-the-shield-insignia": "Order of the Shield Insignia",
        "fighter-medal": "Fighter Medal", // Also worldSkill
        "leather-sheath": "LEather Sheath",
        // Pisces
        "blood-flaked-bone": "Blood Flaked Bone",
        "ancient-creature-nucleus": "Ancient Creature Nucleus", // Also worldSkill
        "strange-jelly": "Strange Jelly",
    };

    return ITEM_LIST[value] || value;
}

function statusKeyToName(value) {
    if (!value) {
        return "";
    }
    switch (value) {
        case "atk":
            return "Attack";
        case "def":
            return "Defense";
        case "hp":
            return "Health";
        case "spd":
            return "Speed";
        case "chc":
            return "Critical Hit Chance";
        case "chd":
            return "Critical Hit Damage";
        case "eff":
            return "Effectiveness";
        case "efr":
            return "Effect Resistance";
        case "dac":
            return "Dual Attack Chance";
        default:
            return "";
    }
}
export { statusKeyToName };

const BUFF_DEBUFF_LIST = [
    {
        type: "D",
        name: "Decrease Attack",
        _id: "stic_att_dn",
    },
    {
        type: "D",
        name: "Burn",
        _id: "stic_blaze",
    },
    {
        type: "D",
        name: "Decrease Hit Chance",
        _id: "stic_blind",
    },
    {
        type: "D",
        name: "Bleed",
        _id: "stic_blood",
    },
    {
        type: "D",
        name: "Cannot Buff",
        _id: "stic_buf_impossible",
    },
    {
        type: "D",
        name: "Critical Damage Decrease",
        _id: "stic_cridmg_dn",
    },
    {
        type: "B",
        name: "Critical Hit Resistance",
        _id: "stic_crires_up",
    },
    {
        type: "D",
        name: "Curse",
        _id: "stic_curse",
    },
    {
        type: "D",
        name: "Decrease Defense",
        _id: "stic_def_dn",
    },
    // {
    //     type: 'D',
    //     name: 'Confused*',
    //     _id: 'stic_dizzy',
    //
    // },
    {
        type: "D",
        name: "Decrease Evasion Chance",
        _id: "stic_dodge_dn",
    },
    {
        type: "D",
        name: "Poison",
        _id: "stic_dot",
    },
    // {
    //     type: 'D',
    //     name: 'Explosion*',
    //     _id: 'stic_explosion',
    //
    // },
    // {
    //     type: 'D',
    //     name: 'Freezing*',
    //     _id: 'stic_freezing',
    //
    // },
    {
        type: "D",
        name: "Unhealable",
        _id: "stic_heal_impossible",
    },
    {
        type: "D",
        name: "Magic Nail",
        _id: "stic_nail",
    },
    {
        type: "D",
        name: "Provoke",
        _id: "stic_provoke",
    },
    // {
    //     type: 'D',
    //     name: 'Shock*',
    //     _id: 'stic_shock',

    // },
    {
        type: "D",
        name: "Target",
        _id: "stic_sign",
    },
    {
        type: "D",
        name: "Silence",
        _id: "stic_silence",
    },
    {
        type: "D",
        name: "Sleep",
        _id: "stic_sleep",
    },
    {
        type: "D",
        name: "Decrease Speed",
        _id: "stic_speed_dn",
    },
    {
        type: "D",
        name: "Stun",
        _id: "stic_stun",
    },
    {
        type: "D",
        name: "Vampirism",
        _id: "stic_vampire",
    },
    // {
    //     type: 'M',
    //     name: 'One Turn Buff',
    //     _id: 'stic_buff_one',
    //
    // },
    // {
    //     type: 'M',
    //     name: 'Two Turns Buff',
    //     _id: 'stic_buff_two',
    //
    // },
    // {
    //     type: 'M',
    //     name: 'Three Turns Buff',
    //     _id: 'stic_buff_three',
    //
    // },
    // {
    //     type: 'M',
    //     name: 'One Turn Debuff',
    //     _id: 'stic_debuff_one',
    //
    // },
    // {
    //     type: 'M',
    //     name: 'Two Turn Debuff',
    //     _id: 'stic_debuff_two',
    //
    // },
    // {
    //     type: 'M',
    //     name: 'Three Turn Debuff',
    //     _id: 'stic_debuff_three',
    //
    // },
    // {
    //     type: 'B',
    //     name: 'Attack Increase',
    //     _id: 'stic_att_inc',
    //
    // },
    {
        type: "B",
        name: "Increase Attack",
        _id: "stic_att_up",
    },
    {
        type: "B",
        name: "Increase Attack (Greater)",
        _id: "stic_att_up2",
    },
    {
        type: "B",
        name: "Revive",
        _id: "stic_bless",
    },
    // {
    //     type: 'B',
    //     name: '',
    //     _id: 'stic_con_up',
    //
    // },
    {
        type: "B",
        name: "Counter",
        _id: "stic_counter",
    },
    {
        type: "B",
        name: "Skill Nullifier",
        _id: "stic_endure",
    },
    {
        type: "B",
        name: "Critical Rate Up",
        _id: "stic_cri_up",
    },
    {
        type: "B",
        name: "Critical Damage Up",
        _id: "stic_cridmg_up",
    },
    {
        type: "B",
        name: "Immunity",
        _id: "stic_debuf_impossible",
    },
    {
        type: "B",
        name: "Increase Defense",
        _id: "stic_def_up",
    },
    {
        type: "B",
        name: "Increase Evasion Chance",
        _id: "stic_dodge_up",
    },
    // {
    //     type: 'B',
    //     name: 'Guardian Buff',
    //     _id: 'stic_force_arka',
    //
    // },
    {
        type: "B",
        name: "Continous Healing",
        _id: "stic_heal",
    },
    {
        type: "B",
        name: "Stealth",
        _id: "stic_hide",
    },
    {
        type: "B",
        name: "Immortal",
        _id: "stic_immortality",
    },
    {
        type: "B",
        name: "Loveliness",
        _id: "stic_lovely",
    },
    {
        type: "B",
        name: "Idol",
        _id: "stic_showtime",
    },
    {
        type: "B",
        name: "Invincible",
        _id: "stic_invincible",
    },
    {
        type: "B",
        name: "Rage",
        _id: "stic_madness",
    },
    // {
    //     type: 'B',
    //     name: 'HP UP*',
    //     _id: 'stic_maxhp_up',
    //
    // },
    {
        type: "B",
        name: "Barrier",
        _id: "stic_protect",
    },
    {
        type: "B",
        name: "Reflect",
        _id: "stic_reflect",
    },
    // {
    //     type: 'B',
    //     name: 'Restore*',
    //     _id: 'stic_restore',

    // },
    {
        type: "B",
        name: "Increase Speed",
        _id: "stic_speed_up",
    },
    {
        type: "B",
        name: "Increase Speed (Greater)",
        _id: "stic_speed_up2",
    },
    {
        type: "B",
        name: "Vigor",
        _id: "stic_haki",
    },
];

export function buffDebuffKeyToName(_id) {
    if (!_id) {
        return "";
    }
    if (typeof _id !== "string") {
        return _id;
    }

    return BUFF_DEBUFF_LIST.find(item => item._id === _id) || _id;
}

export function buffDebuffByType(type) {
    if (!type) {
        return "";
    }
    if (typeof type !== "string") {
        return [];
    }

    return BUFF_DEBUFF_LIST.filter(item => item.type === type.toUpperCase()) || [];
}

export function headMetaTags(metaTags = {}, instanceThis = {}) {
    const pageTitle = metaTags.title ? `${metaTags.title} | ${basePageHeader}` : basePageHeader;
    const head = {
        title: pageTitle,
        meta: [],
        htmlAttrs: {
            lang: instanceThis.$i18n.locale,
        },
    };
    const ogOnlyTags = ["title", "url", "image"];

    const pageMetaTags = Object.keys(metaTags);

    pageMetaTags.forEach(metaTag => {
        // general
        if (!ogOnlyTags.includes(metaTag)) {
            head.meta.push({
                hid: metaTag || "",
                name: metaTag || "",
                content: metaTags[metaTag] || "",
            });
        }
        // OpenGraph
        head.meta.push({
            hid: "og:" + metaTag || "",
            name: "og:" + metaTag || "",
            content: metaTag === "title" ? pageTitle : metaTags[metaTag] || "",
        });
    });
    if (process.client && instanceThis.$nuxtI18nSeo) {
        const i18nSeo = instanceThis.$nuxtI18nSeo();
        head.htmlAttrs = { ...i18nSeo.htmlAttrs };
        head.meta = [...head.meta, ...i18nSeo.meta];
        head.link = { ...i18nSeo.link };
    }

    return head;
}

export function errorHandler({ dispatch, reject }, error, apiType) {
    reject();
}

const IMPRINT_LIST = [
    {
        type: ["+"],
        _id: "spd",
        icon: "stic_speed_up",
    },
    {
        type: ["%", "+"],
        _id: "atk",
        icon: "stic_att_up",
    },
    {
        type: ["%", "+"],
        _id: "def",
        icon: "stic_def_up",
    },
    {
        type: ["%", "+"],
        _id: "hp",
        icon: "stic_maxhp_up",
    },
    {
        type: ["%"],
        _id: "chc",
        icon: "stic_cri_up",
    },
    {
        type: ["%"],
        _id: "chd",
        icon: "stic_cridmg_up",
    },
    {
        type: ["%"],
        _id: "dac",
        icon: "stic_att_inc",
    },
    {
        type: ["%"],
        _id: "eff",
        icon: "stic_con_up",
    },
    {
        type: ["%"],
        _id: "efr",
        icon: "stic_restore",
    },
];

export function imprintList() {
    const returnList = [];
    IMPRINT_LIST.forEach(imprint => {
        imprint.type.forEach(imprintType => {
            returnList.push({
                _id: imprint._id + imprintType,
                attribute: imprint._id,
                type: imprintType,
                icon: imprint.icon,
            });
        });
    });
    return returnList;
}

function isZero(n) {
    return Number(n) === n && n === 0;
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

export function formatNumber(n) {
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

export function toPercent(value) {
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

export function trueRole(role) {
    if (!role) {
        return "";
    }

    switch (role) {
        case "assassin":
            return "thief";
        case "manauser":
            return "soul-weaver";
        default:
            return role;
    }
}

export function trueZodiac(zodiac) {
    if (!zodiac) {
        return "";
    }

    switch (zodiac) {
        case "ram":
            return "aries";
        case "bull":
            return "taurus";
        case "twins":
            return "gemini";
        case "crab":
            return "cancer";
        case "lion":
            return "leo";
        case "maiden":
            return "virgo";
        case "scales":
            return "libra";
        case "scorpion":
            return "scorpio";
        case "archer":
            return "sagittarius";
        case "goat":
            return "capricorn";
        case "waterbearer":
            return "aquarius";
        case "fish":
            return "pisces";
        default:
            return zodiac;
    }
}

export function trueElement(element) {
    if (!element) {
        return "";
    }

    switch (element) {
        case "wind":
            return "earth";
        default:
            return element;
    }
}

export function heroStatsClass(type = "", typeOnly = false, convert = true) {
    let iconType = "";
    switch (type) {
        case "att":
        case "att_rate":
            iconType = "atk";
            break;
        case "max_hp":
        case "max_hp_rate":
            iconType = "hp";
            break;
        case "def":
        case "def_rate":
            iconType = "def";
            break;
        case "res":
            iconType = "res";
            break;
        case "speed":
            iconType = "spd";
            break;
        case "cri":
            iconType = "chc";
            break;
        case "coop":
            iconType = "dac";
            break;
        case "acc":
            iconType = "eff";
            break;

        default:
            return "";
    }

    if (typeOnly) {
        return convert ? iconType : type;
    }

    return convert ? `converted stat-icon-${iconType}` : `stat-icon-${type}`;
}
