const heroAndArtifactCommons = {
    image: "插图",
    icon: "图标",
    lore: "劳尔",
    skill: "技能",
    stats: "统计数据",
    grade: "稀有度",
    noDescription: "无可用说明",
    level: "级别",
};

export default {
    gameName: "第七史诗",
    translationWIP: "重要提示：翻译仍在进行中。抱歉给你带来不便 (´・ω・`)",
    links: {
        heroes: "英雄",
        artifacts: "神器",
    },
    classes: {
        thief: "盜賊",
        assassin: "盜賊",
        knight: "騎士",
        mage: "魔導士",
        "soul-weaver": "精靈師",
        manauser: "精靈師",
        material: "材料",
        ranger: "射手",
        warrior: "戰士",
    },
    elements: {
        dark: "黑暗屬性",
        fire: "火焰屬性",
        ice: "寒氣屬性",
        light: "光明屬性",
        earth: "自",
    },
    zodiacSigns: {
        aries: "牡羊座",
        taurus: "金牛座",
        gemini: "雙子座",
        cancer: "巨蟹座",
        leo: "獅子座",
        virgo: "處女座",
        libra: "天秤座",
        scorpio: "天蠍座",
        sagittarius: "射手座",
        capricorn: "魔羯座",
        aquarius: "水瓶座",
        pisces: "雙魚座",
    },
    relationships: {
        // hostile/grudge same
        hostile: "怨恨",
        grudge: "怨恨",
        longing: "憧憬",
        love: "愛意",
        rival: "敵手",
        // trust/friendly same
        trust: "信賴",
        friendly: "友情",
    },
    artifacts: Object.assign({}, heroAndArtifactCommons),
    heroes: Object.assign(
        {
            attributes: {
                cp: "CP",
                atk: "攻擊力",
                def: "防禦力",
                hp: "生命力",
                spd: "速度",
                chc: "暴擊率",
                chd: "暴擊傷害",
                eff: "效果命中",
                efr: "效果抗性",
                dac: "夾攻率",
                pen: "防禦貫穿",
                ddg: "迴避",
                con: "命中",
            },
        },
        heroAndArtifactCommons
    ),
};
