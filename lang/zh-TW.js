const heroAndArtifactCommons = {
    image: "圖片",
    icon: "圖標",
    lore: "背景故事",
    skill: "技能",
    stats: "屬性",
    grade: "稀有度",
    noDescription: "無可用説明",
    level: "級別",
};

export default {
    gameName: "第七史詩",
    important: "重要提示",
    translationWIP: "重要提示：翻譯仍在進行中。抱歉給你帶來不便 (´・ω・`)",
    links: {
        home: "主頁",
        about: "關於",
        heroes: "英雄",
        artifacts: "神器",
        items: "物品",
        creators: "內容創作者",
        changelog: "更新日誌",
        privacyPolicy: "隱私政策",
        back: "返回",
        ranking: "競技場排名",
    },
    loader: {
        message: "加載數據中，請等待..",
    },
    filters: {
        header: "篩選條件:",
        byName: "根據名字搜尋",
        noResult: "未搜尋到合適的結果 :(",
        all: "全部",
        allClasses: "全部職階",
        rarity: "稀有度",
        classExclusive: "特殊職階",
        heroClass: "英雄職階",
        element: "屬性",
        zodiac: "星座",
        buffs: "Buffs",
        debuffs: "Debuffs",
        openFilters: "點擊查看可用的搜尋條件",
        closeAndClear: "關閉並清空所有的搜尋條件",
        clearAllFilters: "清空所有搜尋條件",
    },
    errors: {
        title: "出錯啦.",
        description: "如果一直出錯, 請前往 Github 提交 issue 并附上以下信息 (如果有錯誤信息的話).",
    },
    home: {
        latest: "最新的英雄＆神器",
        searchQuestion: "您需要找什麽?",
        searchPlaceholder: "搜尋英雄和神器...",
        currentEvents: "目前活動",
        appDownloadHeader: "EpicSevenDB 是第七史詩的數據庫和wiki頁面. 你可以在此下載游戲",
        e7Reddit: "訪問 第七史詩 的 Reddit",
        e7Discord: "加入 第七史詩 Reddit 的 Discord 頻道",
        tools: "工具",
        version: "版本",
    },
    artifacts: Object.assign(
        {
            back: "返回神器列表",
            classExclusive: "職業限定",
            baseLevelStats: "基礎面板",
            maxLevelStats: "最高等級面板",
            baseLevelSkill: "基礎技能等級",
            maxLevelSkill: "最高技能等級",
        },
        heroAndArtifactCommons
    ),
    heroes: Object.assign(
        {
            back: "返回英雄列表",
            profile: "屬性",
            classType: "職階",
            acquire: "獲得",
            consume: "消耗",
            soul: "靈魂",
            passive: "被動",
            turns: "回合",
            soulBurn: "靈魂燃燒",
            soulBurnEffect: "靈魂燃燒效果",
            awakening: "覺醒",
            statsIncrease: "屬性增長",
            skillEnhance: "技能提升",
            skillUpgrade: "技能 {0} 升級",
            skillUpgradeApplied: "確定",
            resources: "消耗資源",
            imprint: "刻印記憶",
            imprintSelf: "自身刻印",
            imprintPosition: "開放型刻印",
            noImprint: "暫無刻印信息.",
            imprintBonus: "刻印加成",
            maxLevelStats: "滿級面板",
            lv1BaseStarNoAwaken: "等級 1 無覺醒 &#9733;",
            lv50FiveStarNoAwaken: "等級 50 5&#9733; (無覺醒)",
            lv60SixStarNoAwaken: "等級 60 6&#9733; (無覺醒)",
            lv60SixStarFullyAwakened: "等級 60 6&#9733; (滿覺醒)",
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
            specialty: "轉職",
            specialtyChangeExplain:
                "<strong class='white'>{0}</strong> 可轉職為 <strong class='white'>{1}</strong>. 轉職任務需要人物等級達成50級才可開啓.",
            battleArt: "戰鬥動畫",
            relations: "人物關係",
            specialtySkill: {
                header: "特殊技能",
                command: "指揮",
                charm: "魅力",
                politics: "政治",
            },
            voice: "語音列表",
            multipliers: {
                header: "技能倍率",
                mult: "技能倍率",
                multSimplified: "簡化倍率", // as in Simplified Multiplier
            },
        },
        heroAndArtifactCommons
    ),
    about: {
        p1: "EpicSevenDB.com 是由玩家維護的網站，致力於提供準確的 英雄, 神器, 裝備, 物品, 任務 等信息!",
        p2: "爲此, 本網站通過 Github 接受玩家社群提供的一切建議，創意及游戲數據. 如果你願意幫助我們，請訪問如下鏈接. 感謝您的支持!",
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
        earth: "自然屬性",
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
    item: {
        needed: "需要此物品的英雄",
        stageDrops: "掉落位置",
        apShops: "AP 商店",
        available: "可用",
    },
    ex_equip: {
        name: "專屬裝備",
    },
    ranking: {
        header: "Top {0} 競技場排名",
        moonlight: "光暗",
        rgb: "三色",
    },
};
