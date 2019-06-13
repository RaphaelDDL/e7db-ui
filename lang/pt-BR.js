// {{ $t("home.aaaaa") }}

const heroAndArtifactCommons = {
    image: "Ilustração",
    icon: "Ícone",
    lore: "História",
    skill: "Habilidade",
    stats: "Atributos",
    grade: "Raridade",
};

export default {
    languages: {
        en: "Inglês",
        pt: "Português",
        es: "Espanhol",
        kr: "Coreano",
    },
    links: {
        home: "Início",
        about: "Sobre + Contribuindo",
        heroes: "Heróis",
        artifacts: "Artefatos",
        changelog: "Atualizações",
        privacyPolicy: "Política de Privacidade",
        back: "Voltar",
    },
    loader: {
        message: "Contactando o servidor, aguarde..",
    },
    filters: {
        header: "Filtra a Lista por:",
        byName: "Procure pelo nome",
        noResult: "Nenhum resultado para seus filtros atuais :(",
        all: "Todos",
        allClasses: "Todas as Classes",
        rarity: "Raridade",
        classExclusive: "Classe Exclusiva",
        heroClass: "Classe do Herói",
        element: "Elemento",
        zodiac: "Signo do Zodíaco",
        buffs: "Buffs",
        debuffs: "Debuffs",
        openFilters: "Veja os filtros disponíveis",
        closeAndClear: "Limpar seleção e fechar Filtros",
        clearAllFilters: "Limpar todos os Filtros",
    },
    errors: {
        title: "Vish... Ocorreu um erro.",
        description:
            "Se o erro continuar, por favor, crie uma Issue em nosso Githubcom as informações abaixo (se alguma for-lhe apresentada).",
    },
    home: {
        latest: "Últimos Heróis e Artefatos",
        searchQuestion: "Pelo quê está procurando?",
        searchPlaceholder: "Search for Heroes and Artifacts...",
        currentEvents: "Eventos Atuais",
        appDownloadHeader:
            "EpicSevenDB é uma wiki e banco de dados para o jogo Epic Seven. Você pode baixar o jogo para ",
        e7Reddit: "Visite o Reddit do EpicSeven",
        e7Discord: "Entre no Canal de Discord do Reddit do EpicSeven",
        tools: "Ferramentas",
        version: "versão",
    },
    artifacts: Object.assign(
        {
            back: "Voltar à Lista de Artefatos",
            classExclusive: "Class Exclusiva",
            baseLevelStats: "Attributos do Nível Inicial",
            maxLevelStats: "Attributos do Nível Máximo",
            baseLevelSkill: "Attributos do Nível Inicial",
            maxLevelSkill: "Habilidade do Nível Máximo",
        },
        heroAndArtifactCommons
    ),
    heroes: Object.assign(
        {
            back: "Voltar à Lista de Heróis",
            profile: "Perfil",
            classType: "Tipo de Classe",
            acquire: "Adquire",
            consume: "Consome",
            soul: "Alma",
            passive: "Passiva",
            turns: "turnos",
            soulBurnEffect: "Efeito de Queima de Alma",
            awakening: "Despertar",
            statsIncrease: "Aumento de Atributos",
            skillUpgrade: "Melhora de Habilidade",
            skillUpgradeApplied: "SIM",
            resources: "Recursos Consumidos",
            imprint: "Impressão de Memória",
            imprintPosition: "Posicões de Formação",
            noImprint: "Dados das Posições de Formação não disponíveis ainda.",
            imprintBonus: "Bônus",
            maxLevelStats: "Atributos de Nível Máximo",
            lv1BaseStarNoAwaken: "Nível 1 na Raridade de Convocação Base &#9733;",
            lv50FiveStarNoAwaken: "Nível 50 na Raridade 5&#9733; (Sem Despertar)",
            lv60SixStarNoAwaken: "Nível 60 na Raridade 6&#9733; (Sem Despertar)",
            lv60SixStarFullyAwakened: "Nível 60 na Raridade 6&#9733; (Todos os Despertares)",
            attributes: {
                cp: "CP",
                atk: "Ataque",
                def: "Defesa",
                hp: "Saúde",
                spd: "Velocidade",
                chc: "Chance de Acerto Crítico",
                chd: "Dano de Acerto Crítico",
                eff: "Efetividade",
                efr: "Resistência à Efeitos",
                dac: "Chance de Ataque Combinado",
            },
            specialty: "Troca de Especialidade",
            // {normalName} {specialtyTransition} {specialtyName}
            specialtyTransition: "tem Troca de Especialidade para",
            specialtyExplain:
                "Você precisa que o herói esteja no nível 50 antes que possa comecar a missão de Troca de Especialidade",
            battleArt: "Ilustração de Batalha",
            relations: "Relações",
        },
        heroAndArtifactCommons
    ),
    about: {
        p1:
            "EpicSevenDB.com é um site feito por fãs que tem o objetivo de prover informações precisas sobre heróis, artefatos, equipamentos, itens, missões e muito mais!",
        p2:
            "Para tal, ele recebe ajuda da comunidade recebendo sugestões, idías e dados do jogo via repositórios do Github. Se você se sente na vontade de nos ajudar, veja os links abaixo. Toda e qualquer ajuda é bem-vinda!",
    },
};

// {{ $t("heroes.aaaaa") }}
