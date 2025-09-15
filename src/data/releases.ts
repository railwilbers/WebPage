// ...existing code...
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
    cover:
      'https://cdn.builder.io/api/v1/image/assets%2Fbb028c0698fe4c3286dbf7c9994f9544%2F36bb684cff5e4046bfc685e8414fe80a?format=webp&width=800',
    order: 1,
    description: 'The first single from Rail Wilbers, released in 2021.', 
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
    cover:
      'https://images.genius.com/469b8e2ba89a96e8b381aec8a2c8b296.1000x1000x1.png',
    order: 2,
    description: 'The first single from Rail Wilbers, released in 2021.', 
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
    cover:
      'https://cdn.builder.io/api/v1/image/assets%2Fbb028c0698fe4c3286dbf7c9994f9544%2F07310b1c6d9141c7815083b3e23e979c?format=webp&width=800',
    order: 3,
    description: 'The first single from Rail Wilbers, released in 2021.', 
    year: 2024,
    spotify: 'https://open.spotify.com/album/1ID1N1AeFfNIj9LDMLNTXQ',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=wMtmP9NU6Rk',
    videos: ['wMtmP9NU6Rk']
  },
  {
    slug: 'bye-boy',
    type: 'Single',
    title: 'Bye Boy',
    cover:
      'https://cdn.builder.io/api/v1/image/assets%2Fbb028c0698fe4c3286dbf7c9994f9544%2Fe2e6c87ea3734f11b4a9628ca0bf2d91?format=webp&width=800',
    order: 4,
    description: 'The first single from Rail Wilbers, released in 2021.', 
    year: 2025,
    spotify: 'https://open.spotify.com/album/1ID1N1AeFfNIj9LDMLNTXQ',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=wMtmP9NU6Rk',
    videos: ['wMtmP9NU6Rk']
  },
  {
    slug: 'dawn-is-coming',
    type: 'Single',
    title: 'Dawn Is Coming',
    cover:
      'https://cdn.builder.io/api/v1/image/assets%2Fbb028c0698fe4c3286dbf7c9994f9544%2F3d7d279a6da74f7c8214a21d5e357f79?format=webp&width=800',
    order: 5,
    description: 'The first single from Rail Wilbers, released in 2021.', 
    year: 2025,
    spotify: 'https://open.spotify.com/album/1ID1N1AeFfNIj9LDMLNTXQ',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=wMtmP9NU6Rk',
    videos: ['wMtmP9NU6Rk']
  },
  {
    slug: 'horizons',
    type: 'Album',
    title: 'Horizons',
    cover:
      'https://cdn.builder.io/api/v1/image/assets%2Fbb028c0698fe4c3286dbf7c9994f9544%2Fdbe2b5c5c2854b26a3f06f6fa63ceb6c?format=webp&width=800',
    order: 6,
    description: 'The first single from Rail Wilbers, released in 2021.', 
    year: 2025,
    spotify: 'https://open.spotify.com/album/1ID1N1AeFfNIj9LDMLNTXQ',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=wMtmP9NU6Rk',
    videos: ['wMtmP9NU6Rk']
  },
  {
    slug: 'pourquoi',
    type: 'Single',
    title: 'Pourquoi',
    cover:
      'https://cdn.builder.io/api/v1/image/assets%2Fbb028c0698fe4c3286dbf7c9994f9544%2Ff17514d30f214aec81f7cf501ea78f6f?format=webp&width=800',
    order: 7,
    description: 'The first single from Rail Wilbers, released in 2021.', 
    year: 2025,
    spotify: 'https://open.spotify.com/album/1ID1N1AeFfNIj9LDMLNTXQ',
    apple: 'https://music.apple.com/artist/rail-wilbers/1556726596',
    ytmusic: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ',
    youtube: 'https://www.youtube.com/watch?v=wMtmP9NU6Rk',
    videos: ['wMtmP9NU6Rk']
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