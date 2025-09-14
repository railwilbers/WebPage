export const artist = {
  name: 'Rail Wilbers',
  tagline: 'Alt-pop producer & multi‑instrumentalist',
  email: 'rail@example.com',
  heroImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80'
}

export const social = [
  { name: 'Spotify', url: '#' },
  { name: 'Apple Music', url: '#' },
  { name: 'YouTube', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'TikTok', url: '#' },
  { name: 'Bandcamp', url: '#' }
]

export const spotify = {
  // Replace with your artist/album/playlist embed URL:
  // Grab it from the "Copy Embed" option in Spotify.
  // Examples:
  // 'https://open.spotify.com/embed/artist/ARTIST_ID'
  // 'https://open.spotify.com/embed/album/ALBUM_ID'
  // 'https://open.spotify.com/embed/playlist/PLAYLIST_ID'
  embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd'
}

export const newsletter = {
  provider: 'buttondown',
  username: 'railwilbers', // create this at https://buttondown.email/
  title: 'Get updates',
  description: 'Join the list for new music, shows, and drops. No spam.'
}

export const releases = [
  {
    title: 'Neon Lines',
    year: 2025,
    cover: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=800&q=60',
    description: 'A midnight drive through synth landscapes and fractured drums.',
    links: [
      { platform: 'Spotify', url: '#' },
      { platform: 'Apple', url: '#' },
      { platform: 'YouTube', url: '#' },
      { platform: 'Bandcamp', url: '#' }
    ]
  },
  {
    title: 'Glass Rivers EP',
    year: 2024,
    cover: 'https://images.unsplash.com/photo-1529768167801-9173d94c2f5b?auto=format&fit=crop&w=800&q=60',
    description: 'Shimmering textures, gritty bass, and late-night vocals.',
    links: [
      { platform: 'Spotify', url: '#' },
      { platform: 'Apple', url: '#' },
      { platform: 'YouTube', url: '#' }
    ]
  },
  {
    title: 'City Echoes',
    year: 2023,
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=60',
    description: 'Debut mini‑album exploring the pulse of urban isolation.',
    links: [
      { platform: 'Spotify', url: '#' },
      { platform: 'Apple', url: '#' }
    ]
  }
]

export const videos = [
  { title: 'Neon Lines (Official Video)', youtubeId: 'tAGnKpE4NCI' },
  { title: 'Live at Warehouse 17', youtubeId: 'hTWKbfoikeg' }
]

export const tourDates = [
  { date: '2025-10-05', venue: 'Echo Room', city: 'Los Angeles, CA', tickets: '#', status: 'On sale' },
  { date: '2025-11-12', venue: 'Brooklyn Loft', city: 'Brooklyn, NY', tickets: '#', status: 'On sale' },
  { date: '2025-12-01', venue: 'The Vic', city: 'Chicago, IL', tickets: '#', status: 'Sold out' }
]

export const gallery = [
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1506157786151-1a1b1a?auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1509339022327-1e1e25360a43?auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=60'
]

export const press = {
  oneLiner: 'Cinematic alt‑pop with neon‑noir textures and heavy low end.',
  bioShort: 'Rail Wilbers is an alt‑pop producer and multi‑instrumentalist blending widescreen synths, intimate vocals, and club‑leaning drums.',
  bioLong:
`Rail Wilbers crafts songs that live between late‑night drive and 3AM dance‑floor.
Pulling from indie, electronic, and modern pop, Rail’s productions pair warm analog synths with punchy,
experimental percussion and story‑driven toplines. Recent projects include collaborations with vocalists
across LA and Berlin, plus a new EP slated for 2025.`,
  location: 'Los Angeles, CA',
  genre: 'Electronic / Alt‑Pop',
  riyl: ['James Blake', 'Sylvan Esso', 'Fred again..'],
  photos: [
    { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80', caption: 'Live — LA' },
    { url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80', caption: 'Studio' },
    { url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80', caption: 'Press 01' }
  ],
  logos: ['/press/logo.svg'],
  downloads: {
    zip: '/press/rail-wilbers-epk.zip', // add this file later
    pdf: '/press/rail-wilbers-epk.pdf', // optional
    techRider: '/press/tech-rider.pdf', // optional
    stagePlot: '/press/stage-plot.pdf', // optional
    logoPack: '/press/logo-pack.zip' // optional
  },
  contact: {
    management: 'Arcadia Mgmt — Jess Ono',
    pressEmail: 'press@example.com',
    bookingEmail: 'booking@example.com'
  },
  quotes: [
    { quote: 'Brooding and beautiful — late‑night pop for film scenes that don’t exist yet.', source: 'Night Pulse', link: '#' },
    { quote: 'A widescreen electronic palette with unforgettable hooks.', source: 'CityBeat', link: '#' }
  ]
}