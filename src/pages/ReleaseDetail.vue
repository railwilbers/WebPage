// ...existing code...
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getReleaseBySlug, artistProfiles } from '@/data/releases'
import { embedVideos } from '@/data/media'
import deezerUrl from '@/assets/deezer.svg?url'
import amazonUrl from '@/assets/amazon.svg?url'

// basic route + release lookup
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const release = computed(() => getReleaseBySlug(slug.value))

// artist name for search fallbacks
const artistName = 'Rail Wilbers'
const artistQuery = computed(() => encodeURIComponent(artistName))

// friendly search q used only as fallback when per-release links are missing
const q = computed(() => encodeURIComponent(`${release.value?.title ?? ''} ${artistName}`))

const iconFor = (slug: string, local?: string) => {
  // prefer local if explicitly provided
  if (local) return local
  // known mapping / simpleicons differences
  if (slug === 'amazon') return amazonUrl
  if (slug === 'deezer') return deezerUrl
  return `https://cdn.simpleicons.org/${slug}/FFFFFF`
}

// Build platform links: prefer per-release -> artist profile -> platform search
const links = computed(() => ({
  spotify: release.value?.spotify ?? artistProfiles.spotify ?? `https://open.spotify.com/search/${artistQuery.value}`,
  apple: release.value?.apple ?? artistProfiles.apple ?? `https://music.apple.com/us/search?term=${artistQuery.value}`,
  ytmusic: release.value?.ytmusic ?? artistProfiles.ytmusic ?? `https://music.youtube.com/search?q=${artistQuery.value}`,
  youtube: release.value?.youtube ?? artistProfiles.youtube ?? `https://www.youtube.com/results?search_query=${artistQuery.value}`,
  soundcloud: release.value?.soundcloud ?? artistProfiles.soundcloud ?? `https://soundcloud.com/search?q=${artistQuery.value}`,
  facebook: release.value?.facebook ?? artistProfiles.facebook ?? `https://www.facebook.com/search/top?q=${artistQuery.value}`,
  instagram: release.value?.instagram ?? artistProfiles.instagram ?? `https://www.instagram.com/${artistQuery.value}`,
  vevo: release.value?.vevo ?? artistProfiles.vevo ?? `https://www.youtube.com/results?search_query=${artistQuery.value}+vevo`,
  linktree: release.value?.linktree ?? artistProfiles.linktree ?? `https://linktr.ee/${artistQuery.value}`,
  deezer: release.value?.deezer ?? artistProfiles.deezer ?? `https://www.deezer.com/search/${artistQuery.value}`,
  tidal: release.value?.tidal ?? artistProfiles.tidal ?? `https://tidal.com/search?q=${artistQuery.value}`,
  amazon: release.value?.amazon ?? artistProfiles.amazon ?? `https://music.amazon.com/search/${artistQuery.value}`,
  pandora: release.value?.pandora ?? artistProfiles.pandora ?? `https://www.pandora.com/search/${artistName}`,
}))

// Build the list of embed URLs for this release; fall back to global embedVideos
const releaseVideos = computed(() => {
  const list = release.value?.videos ?? []
  if (!list || list.length === 0) return embedVideos
  return list.map((v: string) => {
    if (v.startsWith('http')) return v
    return `https://www.youtube.com/embed/${v}`
  })
})

// helper to get white brand svgs from SimpleIcons CDN
const si = (slug: string) => `https://cdn.simpleicons.org/${slug}/FFFFFF`

// platforms computed so template can iterate icons + labels (use local vevo svg)
const platforms = computed(() => ([
  { key: 'spotify', href: links.value.spotify, label: 'Spotify', icon: iconFor('spotify') },
  { key: 'apple', href: links.value.apple, label: 'Apple Music', icon: iconFor('apple') },
  { key: 'soundcloud', href: links.value.soundcloud, label: 'SoundCloud', icon: iconFor('soundcloud') },
  { key: 'deezer', href: links.value.deezer, label: 'Deezer', icon: iconFor('deezer', deezerUrl) },
  { key: 'tidal', href: links.value.tidal, label: 'Tidal', icon: iconFor('tidal') },
  { key: 'amazon', href: links.value.amazon, label: 'Amazon Music', icon: iconFor('amazon', amazonUrl) },
  { key: 'pandora', href: links.value.pandora, label: 'Pandora', icon: iconFor('pandora') },
  { key: 'ytmusic', href: links.value.ytmusic, label: 'YouTube Music', icon: iconFor('youtubemusic') },
  { key: 'youtube', href: links.value.youtube, label: 'YouTube', icon: iconFor('youtube') },
]))
</script>

<template>
  <main v-if="release" class="mx-auto max-w-6xl px-6 py-12 md:py-16">
    <nav class="text-sm text-white/70">
      <RouterLink :to="{ path: '/', hash: '#releases' }" class="hover:text-white">← Back to Releases</RouterLink>
    </nav>

    <!-- Release Header: Cover + Title + Year/Type + Description -->
    <div class="mt-6 grid gap-12 md:grid-cols-2">
      <!-- Cover on the left -->
      <div class="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10">
        <img :src="release.cover" :alt="release.title" class="absolute inset-0 h-full w-full object-cover" />
      </div>

      <!-- Text on the right, vertically centered -->
      <div class="flex flex-col justify-center h-full">
        <h1 class="font-display text-3xl md:text-5xl tracking-tight text-white leading-tight">
          {{ release.title }}
        </h1>

        <!-- year + type -->
        <div class="mt-3 flex items-center gap-3">
          <span
            v-if="release.year"
            class="rounded-full border border-white/15 bg-white/5 px-2 py-1 uppercase tracking-wide text-xs"
          >
            {{ release.year }}
          </span>

          <span class="rounded-full border border-white/15 bg-white/5 px-2 py-1 uppercase tracking-wide text-xs">
            {{ release.type }}
          </span>
        </div>

        <p class="mt-6 text-white/80 leading-relaxed text-base md:text-lg">
          {{ release.description || 'Add a short release description here. Keep it to a couple of lines for clarity.' }}
        </p>
      </div>
    </div>


    <!-- Streams / Platforms -->
    <section class="mt-8">
      <h2 class="font-display text-sm text-white/70 mb-4">STREAMS</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <a
          v-for="p in platforms"
          :key="p.key"
          :href="p.href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 rounded-lg border border-white/10 bg-white/2 p-4 hover:bg-white/3"
          :title="p.label"
          :aria-label="`Open ${p.label}`"
        >
          <img :src="p.icon" :alt="p.label + ' icon'" class="h-6 w-6 object-contain" loading="lazy" />
          <span class="text-sm">{{ p.label }}</span>
        </a>
      </div>
    </section>

    <!-- Videos specific to release -->
    <section class="mt-12" v-if="releaseVideos && releaseVideos.length">
      <h2 class="font-display text-2xl md:text-3xl tracking-tight">Videos</h2>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="url in releaseVideos" :key="url" class="aspect-video overflow-hidden rounded-xl ring-1 ring-white/10">
          <iframe :src="url" title="YouTube video" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen class="h-full w-full" loading="lazy" />
        </div>
      </div>
    </section>
  </main>

  <main v-else class="mx-auto max-w-6xl px-6 py-16">
    <p>Release not found.</p>
    <RouterLink :to="{ path: '/', hash: '#releases' }" class="underline">Go back</RouterLink>
  </main>
</template>

<style scoped>
.pill { display:inline-flex; align-items:center; gap:.5rem; height:36px; padding:0 14px; border-radius:9999px; border:1px solid rgba(255,255,255,.15); background:rgba(255,255,255,.03); }
</style>