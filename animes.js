/* =====================================================================
   AniVerse - Banco de dados centralizado de animes
   Temporada atual: Outono 2026
   Usado por: admin.html, agenda.html, meus-animes.html
===================================================================== */

const TEMPORADA_ATUAL = {
    nome: 'Outono 2026',
    emoji: '🍂',
    inicio: '2026-10-01',
    fim: '2026-12-31'
};

const ANIMES_DB = {
    'black-clover-s2': {
        id: 'black-clover-s2',
        titulo: 'Black Clover — Temporada 2',
        temporada: 'Temporada 2',
        estudio: 'Studio Pierrot',
        ano: 2026,
        nota: 8.5,
        genero: 'Ação',
        totalEpisodios: 12,
        plataforma: 'crunchyroll',
        diaSemana: 'sabado',
        horarioLegendado: '12:00',
        horarioDublado: '15:00',
        sinopse: 'Retorno do anime de Asta e os Cavaleiros Mágicos na invasão ao Reino de Spade.',
        img: 'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2025/12/Black-Clover-2_poster.jpeg?resize=696%2C984&ssl=1'
    },
    'apothecary-diaries-s3': {
        id: 'apothecary-diaries-s3',
        titulo: 'Diários de uma Apotecária — Temporada 3',
        temporada: 'Temporada 3',
        estudio: 'OLM',
        ano: 2026,
        nota: 8.8,
        genero: 'Drama',
        totalEpisodios: 12,
        plataforma: 'crunchyroll',
        diaSemana: 'sexta',
        horarioLegendado: '13:00',
        horarioDublado: '16:00',
        sinopse: 'Maomao e Jinshi deixam o palácio em uma nova jornada cheia de mistérios e investigações.',
        img: 'https://a.storyblok.com/f/178900/1064x1505/49bd0445f3/the-apothecary-diaries-season-3-super-teaser-visual.jpg/m/filters:quality(95)format(webp)'
    },
    'cyberpunk-edgerunners-2': {
        id: 'cyberpunk-edgerunners-2',
        titulo: 'Cyberpunk: Edgerunners 2',
        temporada: 'Temporada 2',
        estudio: 'Studio Trigger / CD Projekt Red',
        ano: 2026,
        nota: 9.0,
        genero: 'Sci-Fi',
        totalEpisodios: 10,
        plataforma: 'netflix',
        diaSemana: 'terca',
        horarioLegendado: '04:00',
        horarioDublado: '04:00',
        sinopse: 'Nova história e personagens inéditos ambientados na perigosa Night City.',
        img: 'https://a.storyblok.com/f/178900/1080x1350/16bcbb101f/cyberpunk-edgerunners-2-visual-vertical.jpg/m/filters:quality(95)format(webp)'
    },
    'blue-box-s2': {
        id: 'blue-box-s2',
        titulo: 'Blue Box — Temporada 2',
        temporada: 'Temporada 2',
        estudio: 'Telecom Animation Film',
        ano: 2026,
        nota: 8.3,
        genero: 'Romance',
        totalEpisodios: 12,
        plataforma: 'netflix',
        diaSemana: 'domingo',
        horarioLegendado: '14:00',
        horarioDublado: '17:00',
        sinopse: 'Continuação do drama de esporte e romance escolar.',
        img: 'https://a.storyblok.com/f/178900/1448x2048/ce95af2fc7/blue-box-season-2-premiere-date-visual.jpeg/m/filters:quality(95)format(webp)'
    },
    'detective-dead-s2': {
        id: 'detective-dead-s2',
        titulo: 'The Detective Is Already Dead — Temporada 2',
        temporada: 'Temporada 2',
        estudio: 'ENGI',
        ano: 2026,
        nota: 7.8,
        genero: 'Mistério',
        totalEpisodios: 12,
        plataforma: 'crunchyroll',
        diaSemana: 'quinta',
        horarioLegendado: '11:00',
        horarioDublado: '14:00',
        sinopse: 'Continuação das aventuras do detetive e sua parceira em novos casos misteriosos.',
        img: 'https://a.storyblok.com/f/178900/750x1058/e0d0c702e2/71e3a86182c6ab4ee046127a348dbd171658660846_main.jpg/m/filters:quality(95)format(webp)'
    },
    'reincarnated-sword-s2': {
        id: 'reincarnated-sword-s2',
        titulo: 'Reincarnated as a Sword — Temporada 2',
        temporada: 'Temporada 2',
        estudio: 'C2C',
        ano: 2026,
        nota: 8.0,
        genero: 'Fantasia',
        totalEpisodios: 12,
        plataforma: 'crunchyroll',
        diaSemana: 'quarta',
        horarioLegendado: '10:00',
        horarioDublado: '13:00',
        sinopse: 'A continuação da jornada da espada reencarnada e sua portadora.',
        img: 'https://a.storyblok.com/f/178900/1460x2064/ef9a5657b7/reincarnated-as-a-sword-season-2-key-visual.jpg/m/filters:quality(95)format(webp)'
    },
    'magic-knight-rayearth': {
        id: 'magic-knight-rayearth',
        titulo: 'Magic Knight Rayearth (Remake)',
        temporada: 'Temporada 1',
        estudio: 'E&H Production',
        ano: 2026,
        nota: 0,
        genero: 'Fantasia',
        totalEpisodios: 12,
        plataforma: 'crunchyroll',
        diaSemana: 'segunda',
        horarioLegendado: '12:30',
        horarioDublado: null,
        sinopse: 'Nova versão adaptando o clássico mangá do grupo CLAMP.',
        img: 'https://a.storyblok.com/f/178900/1359x1920/30c4ac5bb3/magic-knight-rayearth.jpg/m/filters:quality(95)format(webp)'
    },
    'overgeared': {
        id: 'overgeared',
        titulo: 'Overgeared',
        temporada: 'Temporada 1',
        estudio: 'J.C.Staff',
        ano: 2026,
        nota: 0,
        genero: 'Ação',
        totalEpisodios: 12,
        plataforma: 'crunchyroll',
        diaSemana: 'segunda',
        horarioLegendado: '15:00',
        horarioDublado: null,
        sinopse: 'Adaptação da popular web novel/manhwa de MMORPG e ação.',
        img: 'https://image.tmdb.org/t/p/original/94GLmulA9qVGsuo9kLpVKi01E2Z.jpg'
    },
    'firefly-wedding': {
        id: 'firefly-wedding',
        titulo: 'Firefly Wedding',
        temporada: 'Temporada 1',
        estudio: 'david production',
        ano: 2026,
        nota: 0,
        genero: 'Romance',
        totalEpisodios: 12,
        plataforma: 'crunchyroll',
        diaSemana: 'terca',
        horarioLegendado: '14:00',
        horarioDublado: null,
        sinopse: 'Adaptação do mangá de romance histórico com toques sombrios e obsessivos.',
        img: 'https://a.storyblok.com/f/178900/2000x3000/1dbea2dbe5/fireflywedding_s1_baseasset_teaservisual2_2x3_2000x3000_copyright_en-us-1.png/m/filters:quality(95)format(webp)'
    },
    'nia-liston': {
        id: 'nia-liston',
        titulo: 'Nia Liston: The Merciless Maiden',
        temporada: 'Temporada 1',
        estudio: 'KONAMI Animation',
        ano: 2026,
        nota: 0,
        genero: 'Ação',
        totalEpisodios: 12,
        plataforma: 'crunchyroll',
        diaSemana: 'quinta',
        horarioLegendado: '16:00',
        horarioDublado: null,
        sinopse: 'A história da implacável donzela Nia Liston em um mundo de batalhas.',
        img: 'https://a.storyblok.com/f/178900/1810x2560/3a907acb02/nia_liston_the_merciless_maiden_key_art.jpg/m/filters:quality(95)format(webp)'
    }
};

const ANIMES_LISTA = Object.values(ANIMES_DB);

function getAnime(id) {
    return ANIMES_DB[id] || ANIMES_LISTA[0];
}