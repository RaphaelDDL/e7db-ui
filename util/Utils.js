import { basePageHeader } from "~/util/Constants";

// https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
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
        (listItem) => listItem?.name?.toLowerCase()?.includes(search) || listItem?._id?.toLowerCase().includes(search)
    );
}

export function getByRarity(list, rarity) {
    if (!rarity || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem?.rarity === rarity);
}

// artifact-specific
export function getByRole(list, role) {
    if (!role || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem?.role === role);
}

// hero-specifics
export function getByClass(list, heroClass) {
    if (!heroClass || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem?.role === heroClass);
}

export function getByZodiac(list, zodiacSign) {
    if (!zodiacSign || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem?.zodiac === zodiacSign);
}

export function getByElement(list, element) {
    if (!element || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem?.attribute === element);
}

export function getByBuffDebuff(list, BuffsDebuffs) {
    if (!Array.isArray(BuffsDebuffs) || !Array.isArray(list)) {
        return list;
    }
    if (!BuffsDebuffs?.length) {
        return list;
    }
    return list.filter((hero) => {
        return BuffsDebuffs.map((selectedBuffDebuff) => selectedBuffDebuff.id).every((r) =>
            [...hero.buffs, ...hero.debuffs, ...hero.common].includes(r)
        );
    });
}

export function getByImprint(list, imprint) {
    if (!imprint || !Array.isArray(list)) {
        return list;
    }
    return list.filter((listItem) => listItem?.devotion?.type === imprint);
}

export function getByImprintSelf(list, imprint) {
    if (!imprint || !Array.isArray(list)) {
        return list;
    }
    /* eslint-disable camelcase */
    return list.filter((listItem) => listItem?.self_devotion?.type === imprint);
}

export function buffDebuffByType(list, type) {
    if (!Array.isArray(list)) {
        return list;
    }
    if (!type || typeof type !== "string") {
        return [];
    }

    return list.filter((buff) => buff.type === type) || [];
}

export function headMetaTags(metaTags = {}, instanceThis = {}) {
    const pageTitle = metaTags.title ? `${metaTags.title} | ${basePageHeader}` : basePageHeader;
    const head = {
        title: pageTitle,
        meta: [],
        link: [],
        htmlAttrs: {
            lang: instanceThis.$i18n.locale,
        },
    };
    const ogOnlyTags = ["title", "url", "image"];

    const pageMetaTags = Object.keys(metaTags);

    pageMetaTags.forEach((metaTag) => {
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
    // if (process.client && instanceThis.$nuxtI18nSeo) {
    if (instanceThis.$nuxtI18nSeo) {
        const i18nSeo = instanceThis.$nuxtI18nSeo();
        head.htmlAttrs = { ...i18nSeo.htmlAttrs };
        head.meta = [...head.meta, ...i18nSeo.meta];
        head.link = [...i18nSeo.link];
    }

    return head;
}

export function errorHandler({ dispatch, reject }, error, apiType) {
    reject();
}

function isZero(n) {
    return Number(n) === n && n === 0;
}

function isOne(n) {
    return Number(n) === n && n === 1;
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
        case isOne(value):
            return "100%";
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

// export function heroStatsClass(type = "", typeOnly = false, convert = true) {
//     const iconType = statusKeyToIconKey(type);
//     if (typeOnly) {
//         return convert ? iconType : type;
//     }
//     return convert ? `converted stat-icon-${iconType}` : `stat-icon-${type}`;
// }
export function heroStatsClass(type = "", legacyPath = false) {
    if (legacyPath) {
        return `legacy stat-icon-${statusKeyToIconKey(type)}`;
    }
    return `stat-icon-${type}`.replace("_rate", "");
}

export function heroStatsKey(type = "", convert = false) {
    return convert ? statusKeyToIconKey(type) : type;
}

// convert new type to old for icon/translation keys
function statusKeyToIconKey(type = "") {
    switch (type) {
        case "att":
        case "att_rate":
            return "atk";
        case "max_hp":
        case "max_hp_rate":
            return "hp";
        case "def":
        case "def_rate":
            return "def";
        case "speed":
            return "spd";
        case "cri":
            return "chc";
        case "cri_dmg":
        case "chd":
            return "chd";
        case "coop":
            return "dac";
        case "acc":
            return "eff";
        case "res":
            return "efr";
        default:
            return type;
    }
}
// convert new type to text
function statusKeyToName(type) {
    switch (type) {
        case "att_rate":
            return "Attack %";
        case "att":
            return "Attack";
        case "def_rate":
            return "Defense %";
        case "def":
            return "Defense";
        case "max_hp_rate":
            return "Health %";
        case "max_hp":
            return "Health";
        case "speed":
            return "Speed";
        case "cri":
            return "Critical Hit Chance";
        case "cri_dmg":
            return "Critical Hit Damage";
        case "acc":
            return "Effectiveness";
        case "res":
            return "Effect Resistance";
        case "coop":
            return "Dual Attack Chance";
        default:
            return "";
    }
}

export function arenaBadge(value) {
    if (typeof value !== "string") {
        return value;
    }
    switch (true) {
        case value.includes("bronze"):
            return "icon_pvp_sa_league_bronze";
        case value.includes("challenger"):
            return "icon_pvp_sa_league_challenger";
        case value.includes("champion"):
            return "icon_pvp_sa_league_champion";
        case value.includes("gold"):
            return "icon_pvp_sa_league_gold";
        case value.includes("legend"):
            return "icon_pvp_sa_league_legend";
        case value.includes("master"):
            return "icon_pvp_sa_league_master";
        case value.includes("silver"):
            return "icon_pvp_sa_league_silver";
        default:
            return value;
    }
}

export function avatarBorder(value) {
    if (typeof value !== "string") {
        return value;
    }

    const borderMap = {
        ma_border7: "icon_border_300days",
        ma_border22: "icon_border_abyss100",
        ma_border1: "icon_border_base",
        ma_border2: "icon_border_pvp_season2_rank_1",
        ma_border3: "icon_border_pvp_season2_rank_2",
        ma_border4: "icon_border_pvp_season2_rank_3",
        ma_border5: "icon_border_pvp_rank_none",
        ma_border6: "icon_border_pvp_season2_shop_1",
        ma_border9: "icon_border_pvp_season3_rank_1",
        ma_border10: "icon_border_pvp_season3_rank_2",
        ma_border11: "icon_border_pvp_season3_rank_3",
        ma_border12: "icon_border_pvp_season3_rank_n",
        ma_border13: "icon_border_pvp_season3_shop_1",
        ma_border15: "icon_border_pvp_season4_rank_1",
        ma_border16: "icon_border_pvp_season4_rank_2",
        ma_border17: "icon_border_pvp_season4_rank_3",
        ma_border18: "icon_border_pvp_season4_rank_n",
        ma_border19: "icon_border_pvp_season4_shop_1",
        ma_border23: "icon_border_pvp_season5_rank_1",
        ma_border24: "icon_border_pvp_season5_rank_2",
        ma_border25: "icon_border_pvp_season5_rank_3",
        ma_border26: "icon_border_pvp_season5_rank_n",
        ma_border27: "icon_border_pvp_season5_shop_1",
        ma_border36: "icon_border_pvp_season6_rank_1",
        ma_border37: "icon_border_pvp_season6_rank_2",
        ma_border38: "icon_border_pvp_season6_rank_3",
        ma_border39: "icon_border_pvp_season6_rank_n",
        ma_border40: "icon_border_pvp_season6_shop_1",
        ma_border8: "icon_border_seasonpass_season1",
        ma_border14: "icon_border_seasonpass_season2",
        ma_border20: "icon_border_seasonpass_season3",
        ma_border21: "icon_border_seasonpass_season4",
        ma_border28: "icon_border_seasonpass_season5",
        ma_border33: "icon_border_seasonpass_season6",
        ma_border34: "icon_border_seasonpass_season7",
        ma_border35: "icon_border_seasonpass_season8",
        ma_border29: "icon_border_ss1_rta001",
        ma_border30: "icon_border_ss1_rta002",
        ma_border31: "icon_border_ss1_rta003",
        ma_border32: "icon_border_ss1_rta004",
    };

    return borderMap[value] ?? "icon_border_base";
}

export function calculateHeroUsage(rankings) {
    if (!rankings?.length) {
        return [];
    }
    const heroTable = {};
    rankings.forEach((player) => {
        player?.team?.forEach((hero) => {
            heroTable[hero.name] = +heroTable[hero.name] + 1 || 1;
        });
    });
    return Object.entries(heroTable).sort((a, b) => b[1] - a[1]);
}

export { statusKeyToIconKey, statusKeyToName };
