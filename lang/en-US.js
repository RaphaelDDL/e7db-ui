const heroAndArtifactCommons = {
    image: "Illustration",
    icon: "Icon",
    lore: "Lore",
    skill: "Skill",
    stats: "Stats",
    grade: "Rarity",
    noDescription: "No description available",
    level: "Level",
};

export default {
    gameName: "Epic Seven",
    translationWIP: "Important: Translations are still a work in progress. Sorry for the inconvenience (´・ω・`)",
    links: {
        home: "Home",
        about: "About",
        heroes: "Heroes",
        artifacts: "Artifacts",
        items: "Items",
        creators: "Content Creators",
        changelog: "Changelog",
        privacyPolicy: "Privacy Policy",
        back: "Back",
        ranking: "Arena Ranking",
    },
    loader: {
        message: "Fetching data, please wait..",
    },
    filters: {
        header: "Filter List By:",
        byName: "Search by Name",
        noResult: "No matches for your current filters :(",
        all: "All",
        allClasses: "All Classes",
        rarity: "Rarity",
        classExclusive: "Class Exclusive",
        heroClass: "Hero Class",
        element: "Element",
        zodiac: "Zodiac Sign",
        buffs: "Buffs",
        debuffs: "Debuffs",
        openFilters: "Click to see available filters",
        closeAndClear: "Close Filters & Clear selection",
        clearAllFilters: "Clear All Filters",
    },
    errors: {
        title: "Uh oh... An error Has occured.",
        description:
            "If this continues, please open an Issue on our Github with below information (if any is presented).",
    },
    home: {
        latest: "Newest Heroes and Artifacts",
        searchQuestion: "What are you looking for?",
        searchPlaceholder: "Search for Heroes and Artifacts...",
        currentEvents: "Current Events",
        appDownloadHeader: "EpicSevenDB is a wiki and database for Epic Seven game. You can download the game on",
        e7Reddit: "Visit the EpicSeven Reddit",
        e7Discord: "Join EpicSeven Reddit's Discord Channel",
        tools: "Tools",
        version: "version",
    },
    artifacts: Object.assign(
        {
            back: "Back to Artifact List",
            classExclusive: "Class Specific",
            baseLevelStats: "Base Level Stats",
            maxLevelStats: "Max Level Stats",
            baseLevelSkill: "Base Skill Level",
            maxLevelSkill: "Max Skill Level",
        },
        heroAndArtifactCommons
    ),
    heroes: Object.assign(
        {
            back: "Back to Heroes List",
            profile: "Profile",
            classType: "Class Type",
            acquire: "Acquire",
            consume: "Consume",
            soul: "Soul",
            passive: "Passive",
            turns: "turns",
            soulBurn: "Soul Burn",
            soulBurnEffect: "Soul Burn Effect",
            awakening: "Awakening",
            statsIncrease: "Stats Increase",
            skillEnhance: "Skill Enhance",
            skillUpgrade: "Skill {0} Upgrade",
            skillUpgradeApplied: "YES",
            resources: "Consumed Resources",
            imprint: "Memory Imprint",
            imprintSelf: "Imprint Concentration",
            imprintPosition: "Formation Positions",
            noImprint: "Imprint formation details not available yet.",
            imprintBonus: "Bonus",
            maxLevelStats: "Max Level Stats",
            lv1BaseStarNoAwaken: "Level 1 at base summoned &#9733;",
            lv50FiveStarNoAwaken: "Level 50 at 5&#9733; (no awakening)",
            lv60SixStarNoAwaken: "Level 60 at 6&#9733; (no awakening)",
            lv60SixStarFullyAwakened: "Level 60 at 6&#9733; (All Awakenings)",
            attributes: {
                cp: "CP",
                atk: "Attack",
                def: "Defense",
                hp: "Health",
                spd: "Speed",
                chc: "Critical Hit Chance",
                chd: "Critical Hit Damage",
                eff: "Effectiveness",
                efr: "Effect Resistance",
                dac: "Dual Attack Chance",
                pen: "Penetration",
                ddg: "Dodge",
                con: "Hit",
            },
            specialty: "Specialty Change",
            specialtyChangeExplain:
                "<strong class='white'>{0}</strong> has a Specialty Change to <strong class='white'>{1}</strong>. You need the unit to be level 50 before you can start the Specialty Change quests.",
            battleArt: "Battle Art",
            relations: "Relations",
            specialtySkill: {
                header: "Specialty Skill",
                command: "Command",
                charm: "Charm",
                politics: "Politics",
            },
            voice: "Sound List",
            multipliers: {
                header: "Multipliers",
                mult: "Multiplier",
                multSimplified: "Simplified", // as in Simplified Multiplier
            },
        },
        heroAndArtifactCommons
    ),
    about: {
        p1:
            "EpicSevenDB.com is a fan made website which aims to provide accurate information on heroes, artifacts, gear, items, quests, and more!",
        p2:
            "For that, it receives help from the community by receiving suggestions, ideas and game data via Github repositories. If you feel like giving us a hand, please see below links. All help is appreciated!",
    },
    classes: {
        knight: "Knight",
        warrior: "Warrior",
        thief: "Thief",
        assassin: "Thief",
        "soul-weaver": "Soul Weaver",
        manauser: "Soul Weaver",
        mage: "Mage",
        ranger: "Ranger",
        material: "Material",
    },
    elements: {
        fire: "Fire",
        earth: "Earth",
        ice: "Ice",
        light: "Light",
        dark: "Dark",
    },
    zodiacSigns: {
        aries: "Aries",
        taurus: "Taurus",
        gemini: "Gemini",
        cancer: "Cancer",
        leo: "Leo",
        virgo: "Virgo",
        libra: "Libra",
        scorpio: "Scorpio",
        sagittarius: "Sagittarius",
        capricorn: "Capricorn",
        aquarius: "Aquarius",
        pisces: "Pisces",
    },
    relationships: {
        // hostile/grudge same
        hostile: "Hostile",
        grudge: "Grudge",
        longing: "Longing",
        love: "Love",
        rival: "Rival",
        // trust/friendly same
        trust: "Friendly",
        friendly: "Friendly",
    },
    item: {
        needed: "Needed",
        stageDrops: "Stage Drops",
        apShops: "AP Shops",
        available: "Available",
    },
    ex_equip: {
        name: "Exclusive Equipment",
    },
};
