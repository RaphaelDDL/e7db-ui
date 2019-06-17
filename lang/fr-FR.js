const heroAndArtifactCommons = {
    image: "Illustration",
    icon: "icône",
    lore: "Histoire",
    skill: "Compétence",
    stats: "Statistiques",
    grade: "Rang (nombre d'étoiles)",
};

export default {
    languages: {
        en: "Anglais",
        pt: "Portugais",
        es: "Espagnol",
        ko: "Coréen",
        fr: "Français",
    },
    links: {
        home: "Accueil",
        about: "À propos + Contribution",
        heroes: "Héros",
        artifacts: "Artefacts",
        changelog: "Changelog",
        privacyPolicy: "politique de confidentialité",
        back: "Retour",
    },
    loader: {
        message: "Récupération des données, veuillez patienter..",
    },
    filters: {
        header: "Trier par:",
        byName: "Chercher par nom",
        noResult: "Aucune correspondance pour vos filtres :(",
        all: "Tous",
        allClasses: "Toutes les classes",
        rarity: "Rareté",
        classExclusive: "Réservé à",
        heroClass: "Classe",
        element: "Element",
        zodiac: "Signe du zodiaque",
        buffs: "Bonus (buffs)",
        debuffs: "Malus (débuffs)",
        openFilters: "Cliquez pour voir les filtres disponibles",
        closeAndClear: "Fermer et réinitialiser les filtres",
        clearAllFilters: "Réinitialiser les filtres",
    },
    errors: {
        title: "Oups... Une erreur est survenue.",
        description:
            "Si cela continue, veuillez signaler le problème sur notre Github avec les informations ci-dessous (si il y en a).",
    },
    home: {
        latest: "Nouveaux héros et artefacts",
        searchQuestion: "Que cherchez-vous?",
        searchPlaceholder: "Recherchez des héros et des artefacts ...",
        currentEvents: "Événements actuels",
        appDownloadHeader:
            "EpicSevenDB est un wiki et une base de données pour le jeu Epic Seven. Vous pouvez télécharger le jeu sur",
        e7Reddit: "Visitez le Reddit EpicSeven",
        e7Discord: "Rejoigniez le discord du Reddit d'EpicSeven",
        tools: "Outils",
        version: "version",
    },
    artifacts: Object.assign(
        {
            back: "Retour à la liste des artefacts",
            classExclusive: "Exclusif à la classe",
            baseLevelStats: "Statistiques de base",
            maxLevelStats: "Statistiques au niveau maximum",
            baseLevelSkill: "Compétence au niveau de base",
            maxLevelSkill: "Compétence au niveau maximum",
        },
        heroAndArtifactCommons
    ),
    heroes: Object.assign(
        {
            back: "Retour à la liste des héros",
            profile: "Profil",
            classType: "Classe",
            acquire: "Donne",
            consume: "Consume",
            soul: "Âmes",
            passive: "Passif",
            turns: "tours",
            soulBurnEffect: "Effet braise d'âme",
            awakening: "Éveil",
            statsIncrease: "Augmentation des statistiques",
            skillUpgrade: "Amélioration des compétences",
            skillUpgradeApplied: "OUI",
            resources: "Resources nécessaires",
            imprint: "Empreinte mémorielle",
            imprintPosition: "Positions d'effet",
            noImprint: "Détails des positions d'effet pas encore disponibles.",
            imprintBonus: "Bonus",
            maxLevelStats: "Statistiques au niveau maximum",
            lv1BaseStarNoAwaken: "Niveau 1 et &#9733; de base",
            lv50FiveStarNoAwaken: "Niveau 50 et 5&#9733; (sans éveil)",
            lv60SixStarNoAwaken: "Niveau 60 et 6&#9733; (sans éveil)",
            lv60SixStarFullyAwakened: "Niveau 60 et 6&#9733; (complètement éveillé)",
            attributes: {
                cp: "PC",
                atk: "Attaque",
                def: "Défense",
                hp: "Vie",
                spd: "Vitesse",
                chc: "Chances de coup critique",
                chd: "Dégâts des coups critiques",
                eff: "Efficacité",
                efr: "Résistance d'effet",
                dac: "Chance de double attaque",
            },
            specialty: "Changement de spécialité (Évolution)",
            // {normalName} {specialtyTransition} {specialtyName}
            specialtyTransition: "has a Specialty Change to",
            specialtyExplain:
                "Cette unité à besoin d'être niveau 50 pour commencer les quêtes de changement de spécialité (Évolution)",
            battleArt: "Image en combat",
            relations: "Relations",
            specialtySkill: {
                header: "Specialty Skill",
                command: "Command",
                charm: "Charm",
                politics: "Politics",
            },
        },
        heroAndArtifactCommons
    ),
    about: {
        p1:
            "EpicSevenDB.com est un site Web créé par des fans qui a pour objectif de fournir des informations précises sur les héros, les artefacts, les équipements, les objets, les quêtes et plus encore!",
        p2:
            "Pour cela, il reçoit l'aide de la communauté sous forme de suggestions, d'idées et de données de jeu via Github. Si vous souhaitez nous donner un coup de main, veuillez consulter les liens ci-dessous. Toute aide est appréciée!",
    },
};