<script setup>
const props = defineProps({
  videos: { type: Array, default: () => [] }
})
</script>

<template>
  <section class="section container">
    <h2 id="videos">Videos</h2>
    <p class="lead">Watch official videos, sessions, and live performances.</p>

    <div class="grid grid-2" style="margin-top:18px;">
      <div v-for="v in videos" :key="v.youtubeId" class="card" style="padding:12px;">
        <div class="embed">
          <iframe
            :src="`https://www.youtube-nocookie.com/embed/${v.youtubeId}`"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div style="padding:12px 8px 4px; color: var(--muted);">{{ v.title }}</div>
      </div>
    </div>
  </section>
</template>