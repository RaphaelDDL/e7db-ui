const heroAndArtifactCommons = {
    image: "Kunstwerk",
    icon: "Symbol",
    lore: "Überlieferung",
    skill: "Geschicklichkeit",
    stats: "Statistik",
    grade: "Rarität",
    noDescription: "Keine Beschreibung verfügba",
    level: "Stufe",
};

export default {
    gameName: "Epische Sieben",
    important: "Wichtig",
    translationWIP: "Wichtig: Übersetzungen sind noch in Arbeit. Entschuldigen Sie die Unannehmlichkeiten (´・ω・`)",
    links: {
        heroes: "Klasse",
        artifacts: "Artefakte",
    },
    classes: {
        thief: "Dieb",
        assassin: "Dieb",
        knight: "Ritter",
        mage: "Magier",
        manauser: "Seelenweber",
        "soul-weaver": "Seelenweber",
        material: "Material",
        ranger: "Waldläufer",
        warrior: "Krieger",
    },
    elements: {
        dark: "Dunkelheit",
        fire: "Feuer",
        ice: "Eis",
        light: "Licht",
        earth: "Erde",
    },
    zodiacSigns: {
        aries: "Widder",
        taurus: "Stier",
        gemini: "Zwillinge",
        cancer: "Krebs",
        leo: "Löwe",
        virgo: "Jungfrau",
        libra: "Waage",
        scorpio: "Skorpion",
        sagittarius: "Schütze",
        capricorn: "Steinbock",
        aquarius: "Wassermann",
        pisces: "Fische",
    },
    relationships: {
        // hostile/grudge same
        hostile: "Groll",
        grudge: "Groll",
        longing: "Sehnsucht",
        love: "Liebe",
        rival: "Rivalität",
        // trust/friendly same
        trust: "Vertrauen",
        friendly: "Freundschaft",
    },
    artifacts: Object.assign({}, heroAndArtifactCommons),
    heroes: Object.assign(
        {
            attributes: {
                cp: "CP",
                atk: "Angriff",
                def: "Verteidigung",
                hp: "Gesundheit",
                spd: "Geschwindigkeit",
                chc: "Krit. Trefferquote",
                chd: "Kritischer Schaden",
                eff: "Effektivität",
                efr: "Effektwiderstand",
                dac: "Doppelangriff-Chance",
                pen: "Durchdringen",
                ddg: "Ausweichen",
                con: "Treffer",
            },
        },
        heroAndArtifactCommons
    ),
};
