<script setup>
const props = defineProps({
  releases: { type: Array, default: () => [] },
  spotifyEmbed: { type: String, default: '' }
})
</script>

<template>
  <section class="section container">
    <h2 id="music">Latest Music</h2>
    <p class="lead">New releases and projects by Rail Wilbers. Stream on your favorite platform.</p>

    <!-- Spotify embed -->
    <div v-if="spotifyEmbed" class="card" style="margin-top:18px; overflow:hidden;">
      <iframe
        :src="spotifyEmbed"
        width="100%" height="352" frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    </div>

    <div class="grid grid-3" style="margin-top: 18px;">
      <article v-for="rel in releases" :key="rel.title" class="card">
        <img :src="rel.cover" :alt="rel.title" style="aspect-ratio: 1/1; object-fit: cover;">
        <div style="padding:16px 16px 18px;">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
            <h3 style="font-size:18px;">{{ rel.title }}</h3>
            <span class="chip">{{ rel.year }}</span>
          </div>
          <p style="color:var(--muted); margin-top:6px;">{{ rel.description }}</p>

          <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:12px;">
            <a v-for="l in rel.links" :key="l.platform" :href="l.url" target="_blank" rel="noopener" class="chip">
              ▶ {{ l.platform }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>