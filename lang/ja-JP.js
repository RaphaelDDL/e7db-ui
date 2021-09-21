const heroAndArtifactCommons = {
    image: "イラスト",
    icon: "アイコン",
    lore: "ロア",
    skill: "スキル",
    stats: "統計",
    grade: "珍しい",
    noDescription: "説明なし",
    level: "レベル",
};

export default {
    gameName: "エピックセブン",
    important: "重要",
    translationWIP: "重要：翻訳はまだ進行中の作業です。ご不便おかけしてすみません (´・ω・`)",
    links: {
        heroes: "英雄",
        artifacts: "古代遺物",
    },
    classes: {
        thief: "アサシン",
        assassin: "アサシン",
        knight: "ナイト",
        mage: "メイジ",
        "soul-weaver": "プリースト",
        manauser: "プリースト",
        material: "素材",
        ranger: "アーチャー",
        warrior: "ウォリアー",
    },
    elements: {
        dark: "闇属性",
        fire: "火属性",
        ice: "氷属性",
        light: "光属性",
        earth: "木属性",
    },
    zodiacSigns: {
        aries: "白羊宮",
        taurus: "金牛宮",
        gemini: "双児宮",
        cancer: "巨蟹宮",
        leo: "獅子宮",
        virgo: "処女宮",
        libra: "天秤宮",
        scorpio: "天蝎宮",
        sagittarius: "人馬宮",
        capricorn: "磨羯宮",
        aquarius: "宝瓶宮",
        pisces: "双魚宮",
    },
    relationships: {
        // hostile/grudge same
        hostile: "恨み",
        grudge: "恨み",
        longing: "憧れ",
        love: "愛情",
        rival: "ライバル",
        // trust/friendly same
        trust: "信頼",
        friendly: "友情",
    },
    artifacts: Object.assign({}, heroAndArtifactCommons),
    heroes: Object.assign(
        {
            attributes: {
                cp: "CP",
                atk: "攻撃力",
                def: "防御力",
                hp: "生命力",
                spd: "スピード",
                chc: "クリティカル発生率",
                chd: "クリティカルダメージ",
                eff: "効果命中率",
                efr: "効果抵抗率",
                dac: "連携攻撃発生率",
                pen: "防御貫通",
                ddg: "回避率",
                con: "命中率",
            },
        },
        heroAndArtifactCommons
    ),
};
