<script setup lang="ts">
import { ref, computed } from 'vue'
import { releases as data } from '@/data/releases'
import { embedVideos } from '@/data/media'
import vevoUrl from '@/assets/vevo.svg?url'

const rows = Array.from({ length: 8 })
const selected = ref<'all' | 'albums' | 'singles'>('all')

const releases = computed(() => {
  let list = [...data].sort((a, b) => b.order - a.order)
  if (selected.value === 'albums') list = list.filter((r) => r.type === 'Album')
  if (selected.value === 'singles') list = list.filter((r) => r.type === 'Single')
  return list
})

// -- changed: use SimpleIcons CDN for real brand icons
const si = (slug: string) => `https://cdn.simpleicons.org/${slug}/FFFFFF`
const socials = [
  { href: 'https://open.spotify.com/artist/563lLvURAz5f8tkwcM6lA5', label: 'Spotify', icon: si('spotify') },
  { href: 'https://music.apple.com/us/artist/rail-wilbers/1556726596', label: 'Apple Music', icon: si('apple') },
  { href: 'https://music.youtube.com/channel/UCwxcOsUhdveEC8_EEv229qQ', label: 'YouTube Music', icon: si('youtubemusic') },
  { href: 'https://youtube.com/@railwilbers', label: 'YouTube', icon: si('youtube') },
  { href: 'https://soundcloud.com/railwilbers', label: 'SoundCloud', icon: si('soundcloud') },
  { href: 'https://instagram.com/railwilbers', label: 'Instagram', icon: si('instagram') },
  { href: 'https://facebook.com/railwilbersofficial', label: 'Facebook', icon: si('facebook') },
  { href: 'https://youtube.com/@RailWilbersVEVO', label: 'VEVO', icon: vevoUrl, imgClass: 'h-7 w-7 object-contain' },
  { href: 'https://linktr.ee/RailWilbers', label: 'Linktree', icon: si('linktree') },
]

// --- load local thumbs via Vite glob ---
const thumbModules = import.meta.glob('../assets/video-thumbs/*.{jpg,jpeg,png,webp}', { eager: true })
const thumbsMap: Record<string, string> = Object.fromEntries(
  Object.entries(thumbModules).map(([path, mod]) => {
    const name = path.split('/').pop()!.replace(/\.(jpg|jpeg|png|webp)$/i, '')
    // module default usually contains the URL
    // @ts-ignore
    const url = (mod && mod.default) ? mod.default : mod
    return [name, url]
  })
)

// --- improved videoList: prefer local asset thumb by id/name, fallback to default or YouTube ---
const videoList = computed(() =>
  embedVideos.map((v, idx) => {
    const s = String(v)
    const m = s.match(/(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/)
    const id = m ? m[1] : s
    const embed = `https://www.youtube.com/embed/${id}`
    // candidate keys to try in thumbsMap (id first, then positional name, then release-like name)
    const candidates = [
      id,
      `video${idx + 1}`,
      // optional: if you name thumbs after release slugs, include that here (example: 'horizons')
      // release slug lookup omitted here — add if needed on release pages
      'default'
    ]
    let assetThumb: string | null = null
    for (const c of candidates) {
      if (thumbsMap[c]) {
        assetThumb = thumbsMap[c]
        break
      }
    }
    // final fallback to YouTube thumbnail if no local asset found
    const thumb = assetThumb ?? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    return { id, embed, thumb, assetThumb: assetThumb ?? thumb }
  })
)

const activeVideo = ref(0)
const playing = ref(false)

function showVideo(i: number) {
  activeVideo.value = i
  playing.value = false
}

function playVideo(i: number) {
  activeVideo.value = i
  playing.value = true
}

// Listen / News: subscription state
const email = ref('')
const subscribing = ref(false)
const subscribed = ref(false)
const subscribeError = ref<string | null>(null)

/**
 * Replace '/api/subscribe' with your real subscription endpoint (Mailchimp, Formspree, Netlify Forms, etc.)
 */
async function subscribe() {
  subscribeError.value = null
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    subscribeError.value = 'Enter a valid email address.'
    return
  }
  subscribing.value = true
  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value }),
    })
    if (!res.ok) throw new Error('Subscription failed')
    subscribed.value = true
    email.value = ''
  } catch (err: any) {
    subscribeError.value = err?.message ?? 'Subscription failed. Try again later.'
  } finally {
    subscribing.value = false
  }
}

// (Spotify used as primary player on the left; Apple Music shown on the right)
</script>

<template>
  <main>
    <!-- Hero: big centered title, full-height -->
    <section id="home" class="relative overflow-hidden min-h-screen flex items-center">
      <div class="absolute inset-0 -z-10 bg-black">
        <div class="absolute inset-0 bg-[radial-gradient(80%_60%_at_0%_0%,rgba(20,184,166,0.15),transparent_60%),radial-gradient(80%_60%_at_100%_100%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div class="pattern pointer-events-none" aria-hidden>
          <div v-for="(_, i) in rows" :key="i" class="pattern-row">
            <span v-for="n in 8" :key="n">WILBERS RAIL</span>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-6 text-center">
        <h1 class="font-display text-7xl md:text-[6.5rem] tracking-tight leading-none">Rail Wilbers</h1>
      </div>
    </section>

    <!-- Releases (keep existing spacing so header reveal doesn't overlap) -->
    <section id="releases" class="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div class="flex items-center justify-between gap-4">
        <h2 class="font-display text-3xl md:text-4xl tracking-tight">Releases</h2>
        <div class="flex items-center gap-2 text-sm">
          <button :class="['tab', selected==='all' && 'tab-active']" @click="selected='all'">All</button>
          <button :class="['tab', selected==='albums' && 'tab-active']" @click="selected='albums'">Albums</button>
          <button :class="['tab', selected==='singles' && 'tab-active']" @click="selected='singles'">Singles</button>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          v-for="item in releases"
          :key="item.slug"
          :to="{ name: 'release', params: { slug: item.slug } }"
          class="group block"
        >
          <div class="relative aspect-square overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5">
            <img :src="item.cover" :alt="item.title" class="absolute inset-0 h-full w-full object-cover" />
          </div>
          <h3 class="mt-3 text-lg font-medium">{{ item.title }}</h3>
          <div class="mt-2 flex items-center gap-2 text-xs">
            <span v-if="item.year" class="rounded-full border border-white/15 bg-white/5 px-2 py-1 uppercase tracking-wide">{{ item.year }}</span>
            <span class="rounded-full border border-white/15 bg-white/5 px-2 py-1 uppercase tracking-wide">{{ item.type }}</span>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Videos carousel (replaces previous grid) -->
    <section id="videos" class="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div class="flex items-center gap-4">
        <h2 class="font-display text-3xl md:text-4xl tracking-tight">Music Videos</h2>
        <!-- "Open YouTube" link removed -->
      </div>

      <div class="mt-8">
        <!-- main player area -->
        <div class="relative w-full rounded-xl ring-1 ring-white/10 overflow-hidden bg-black">
          <template v-if="videoList.length">
            <div v-if="!playing" class="relative aspect-video">
              <img :src="videoList[activeVideo].assetThumb" :alt="'Thumbnail ' + activeVideo" class="h-full w-full object-cover" />
              <button
                @click="playVideo(activeVideo)"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-black/60 hover:bg-black/70"
                aria-label="Play video"
              >
                <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
            <div v-else class="aspect-video">
              <iframe
                :src="`${videoList[activeVideo].embed}?autoplay=1&rel=0&modestbranding=1`"
                title="YouTube video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="h-full w-full"
                loading="lazy"
              ></iframe>
            </div>
          </template>
          <div v-else class="p-8 text-center text-white/70">No videos available</div>
        </div>

        <!-- thumbnails / controls -->
        <div class="mt-4 flex items-center gap-3">
          <button
            @click="activeVideo = Math.max(0, activeVideo - 1); playing = false"
            class="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/8"
            aria-label="Previous"
          >
            <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div class="flex gap-3 overflow-x-auto py-1 px-1">
            <button
              v-for="(v, i) in videoList"
              :key="v.id + '-' + i"
              @click="showVideo(i)"
              class="relative flex-shrink-0 h-20 w-36 rounded-md overflow-hidden border border-white/10 bg-black/5 focus:outline-none"
              :class="{'ring-2 ring-white/30': i === activeVideo}"
            >
              <img :src="v.assetThumb" :alt="'Thumb ' + i" class="h-full w-full object-cover" />
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </button>
          </div>

          <button
            @click="activeVideo = Math.min(videoList.length - 1, activeVideo + 1); playing = false"
            class="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/8"
            aria-label="Next"
          >
            <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Listen section: Spotify full-width on left, Apple on the right -->
    <section id="listen" class="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div class="flex items-center justify-between gap-4">
        <h2 class="font-display text-3xl md:text-4xl tracking-tight">Listen</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Spotify primary (left) -->
        <div class="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black">
          <iframe
            title="Spotify — Rail Wilbers"
            src="https://open.spotify.com/embed/artist/563lLvURAz5f8tkwcM6lA5"
            width="100%"
            height="450"
            frameborder="0"
            allow="encrypted-media; clipboard-write; autoplay"
            loading="lazy"
          ></iframe>
        </div>

        <!-- Apple Music (right, artist card / small embed) -->
        <div class="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black flex items-start">
          <iframe
            title="Apple Music — Rail Wilbers"
            src="https://embed.music.apple.com/us/artist/rail-wilbers/1556726596"
            width="80%"
            height="450"
            frameborder="0"
            allow="autoplay; encrypted-media"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Updates / Email sign-up (framed) -->
    <section id="updates" class="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div class="flex items-center justify-between gap-4 mb-6">
        <h2 class="font-display text-3xl md:text-4xl tracking-tight">Updates</h2>
      </div>

      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div class="text-white/70">
          <p class="mb-4">Sign up to receive email updates about new releases, videos and shows. We’ll only use your email for artist updates. You can unsubscribe anytime.</p>
        </div>

        <!-- framed form container with slightly greyer background/border -->
        <div class="rounded-xl bg-white/6 border border-white/8 p-6">
          <form @submit.prevent="subscribe" class="flex flex-col gap-3">
            <label class="sr-only" for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Your email address"
              class="rounded-md px-4 py-3 bg-black/60 border border-white/10 text-white placeholder:text-white/50 focus:outline-none"
              required
            />

            <div class="flex items-center gap-3">
              <button
                type="submit"
                :disabled="subscribing || subscribed"
                class="btn-primary inline-flex items-center justify-center"
              >
                <span v-if="subscribing">Signing up…</span>
                <span v-else-if="subscribed">Subscribed</span>
                <span v-else>Sign up</span>
              </button>

              <p class="text-sm text-white/60">
                <span v-if="subscribeError" class="text-rose-400">{{ subscribeError }}</span>
                <span v-else-if="subscribed" class="text-emerald-300">Thanks — you’re on the list.</span>
              </p>
            </div>

            <p class="text-xs text-white/50 mt-1">We respect your privacy. View our privacy policy for details.</p>
          </form>
        </div>
      </div>
    </section>

    <!-- Socials (icons only) -->
    <section class="mx-auto max-w-7xl px-6 pb-16">
      <h2 class="sr-only">Socials</h2>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <a
          v-for="s in socials"
          :key="s.href"
          :href="s.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10"
          :aria-label="s.label"
          :title="s.label"
        >
          <!-- changed: allow per-social image class, fallback to default -->
          <img :src="s.icon" :alt="s.label + ' icon'" :class="s.imgClass ?? 'h-5 w-5 object-contain'" loading="lazy" />
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ensure hero text sits visually centered when header appears */
#home { padding-top: 8vh; padding-bottom: 6vh; }

/* keep existing pattern styles */
.pattern { position: absolute; inset: 0; opacity: 0.25; }
.pattern-row { display: flex; gap: 2rem; font-weight: 800; font-size: clamp(2.25rem, 6vw, 4rem); letter-spacing: .05em; color: #14b8a6; text-transform: uppercase; white-space: nowrap; line-height: 1.3; opacity: .35; }
.pattern-row:nth-child(odd) { color: #0ea5e9; opacity: .2; }
.tab { padding: 6px 12px; border-radius: 9999px; border: 1px solid rgba(255,255,255,.15); background: rgba(255,255,255,.03); color: rgba(255,255,255,.85); }
.tab-active { background: rgba(20,184,166,.2); border-color: rgba(20,184,166,.5); color: white; }
</style>
