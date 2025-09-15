// Import all cover images from assets
const coverModules = import.meta.glob('../assets/covers/*.{jpg,jpeg,png,webp}', { eager: true })
const coversMap: Record<string, string> = Object.fromEntries(
  Object.entries(coverModules).map(([path, mod]) => {
    const name = path.split('/').pop()!.replace(/\.(jpg|jpeg|png|webp)$/i, '')
    // @ts-ignore
    const url = (mod && mod.default) ? mod.default : mod
    return [name, url]
  })
)

export type ReleaseType = 'Single' | 'Album'

export interface ReleaseItem {
  slug: string
  type: ReleaseType
  title: string
  cover: string
  order: number // 1 = earliest; higher = latest
  description?: string
  year?: number
  spotify?: string
  apple?: string
  ytmusic?: string
  youtube?: string
  soundcloud?: string
  facebook?: string
  instagram?: string
  vevo?: string
  linktree?: string
  deezer?: string
  tidal?: string
  amazon?: string
  pandora?: string
  videos?: string[]
}

export const releases: ReleaseItem[] = [
  {
    slug: 'beach',
    type: 'Single',
    title: 'Beach',
    cover: coversMap['beach'],
    order: 1,
    description: 'Dreamy and minimalist, “Beach” marked Rail Wilbers’ debut into the electronic/dance scene. With pulsing techno energy and a short runtime, it sets a nostalgic, freedom-chasing tone for his journey.',
    year: 2021,
    spotify: 'https://open.spotify.com/album/0nAsMImykwJO3CPz6YYBLc',
    apple: 'https://music.apple.com/us/album/beach-single/1771659761',
    ytmusic: 'https://music.youtube.com/watch?v=8k3y9kBu12Y',
    youtube: 'https://www.youtube.com/watch?v=8k3y9kBu12Y',
    videos: ['8k3y9kBu12Y']
  },
  {
    slug: 'run-away',
    type: 'Single',
    title: 'Run Away',
    cover: coversMap['run-away'],
    order: 2,
    description: 'A vibrant pop single built around urgency and emotional escape, “Run Away” blends heartfelt lyrics with dynamic synth production. It’s both soaring and vulnerable, a step into Wilbers’ evolving pop sensibilities.',
    year: 2024,
    spotify: 'https://open.spotify.com/album/1ID1N1AeFfNIj9LDMLNTXQ',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=wMtmP9NU6Rk',
    videos: ['wMtmP9NU6Rk']
  },
  {
    slug: 'kingdom-of-my-heart',
    type: 'Album',
    title: 'Kingdom Of My Heart',
    cover: coversMap['kingdom-of-my-heart'],
    order: 3,
    description: 'Rail Wilbers’ debut album, *Kingdom of My Heart*, plays like a cinematic soundtrack — a mix of orchestral textures and narrative-driven instrumentals. From the prologue’s gentle introduction to the climactic “Final Battle” and hopeful “Celebration,” the record paints a journey through conflict, resilience, and redemption. With elements of classical and film-score storytelling, it established his ability to build not just songs but true worlds in sound.',
    year: 2024,
    spotify: 'https://open.spotify.com/album/1xEXjY4R9MsvnTHoMxaznE',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=FiuT9Tm4pX4',
    videos: ['FiuT9Tm4pX4']
  },
  {
    slug: 'bye-boy',
    type: 'Single',
    title: 'Bye Boy',
    cover: coversMap['bye-boy'],
    order: 4,
    description: 'A bold and playful single that fuses rock edge with pop hooks. “Bye Boy” radiates confidence, pairing sharp energy with the exhilaration of moving on.',
    year: 2025,
    spotify: 'https://open.spotify.com/album/1vV4UyYnEbXnhd5QjYyEt4',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=Q7MgrARiT1c',
    videos: ['Q7MgrARiT1c']
  },
  {
    slug: 'dawn-is-coming',
    type: 'Single',
    title: 'Dawn Is Coming',
    cover: coversMap['dawn-is-coming'],
    order: 5,
    description: 'An uplifting electronic/dance track full of light and anticipation. With cinematic intensity, “Dawn Is Coming” captures the moment of transformation when night turns to day.',
    year: 2025,
    spotify: 'https://open.spotify.com/album/0f94Q9ND44VhZYe8rb9PN3',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=_-KKHlvnFeE',
    videos: ['_-KKHlvnFeE']
  },
  {
    slug: 'horizons',
    type: 'Album',
    title: 'Horizons',
    cover: coversMap['horizons'],
    order: 6,
    description: 'With *Horizons*, Rail Wilbers steps fully into a pop/electronic identity, channeling energy into polished anthems and intimate reflections. The album is expansive, with tracks like “Nine Lives” and “Unbreakable” delivering resilience, while “Gone” and “Sands of Time” lean into introspection. Balancing festival-ready hooks with layered emotion, it’s both a bold continuation and a new chapter — pushing his sound toward the future while staying rooted in heartfelt songwriting.',
    year: 2025,
    spotify: 'https://open.spotify.com/album/79ZlBuJoQ7ItyN8Jv4Qtwb',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=c7YAeKY5d10',
    videos: ['_-KKHlvnFeE', 'Q7MgrARiT1c', 'c7YAeKY5d10', 'E1PicCUTMTc', '3wXmbVINZLc', 'vIbtX70ZO_4', 'EftEi2vRl_M', 'Ze4Mn_S8Ubk', 'H-xq7wyTcQA', '_GkvZ5TeJjc', 'if1XFABL0-Q', 'pLMt9Z2HxDY']
  },
  {
    slug: 'pourquoi',
    type: 'Single',
    title: 'Pourquoi',
    cover: coversMap['pourquoi'],
    order: 7,
    description: 'A stylish pop track with French flavor, “Pourquoi” pairs melodic warmth with an air of questioning introspection. Both catchy and thoughtful, it adds an international dimension to Wilbers’ catalog.',
    year: 2025,
    spotify: 'https://open.spotify.com/album/36TRbARVcm0SnrxQ7vDQgS',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=KLd_5y_DcQU',
    videos: ['KLd_5y_DcQU']
  },
]

export const artistProfiles = {
  spotify: 'https://open.spotify.com/artist/563lLvURAz5f8tkwcM6lA5',
  apple: 'https://music.apple.com/us/artist/rail-wilbers/1556726596',
  ytmusic: 'https://music.youtube.com/@railwilbers',
  youtube: 'https://www.youtube.com/@railwilbers',
  soundcloud: 'https://soundcloud.com/railwilbers',
  facebook: 'https://www.facebook.com/railwilbersofficial',
  instagram: 'https://www.instagram.com/railwilbers',
  vevo: 'https://www.youtube.com/@RailWilbersVEVO',
  linktree: 'https://linktr.ee/RailWilbers',
  deezer: 'https://www.deezer.com/us/artist/125521362',
  tidal: 'https://tidal.com/browse/artist/23809941',
  amazon: 'https://music.amazon.com/artists/B08Y17B4DR',
  pandora: 'https://www.pandora.com/artist/rail-wilbers/ARcK349lVlJ5wvV'
}
export function getReleaseBySlug(slug: string): ReleaseItem | undefined {
  return releases.find((r) => r.slug === slug)
}