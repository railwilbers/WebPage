<script setup>
const props = defineProps({
  artist: { type: Object, required: true },
  social: { type: Array, default: () => [] }
})
</script>

<template>
  <section id="home" class="hero" :style="{ backgroundImage: `url(${artist.heroImage})` }">
    <div class="container content">
      <span class="badge">Official Site</span>
      <h1>{{ artist.name }}</h1>
      <p class="tagline">{{ artist.tagline }}</p>

      <div class="cta">
        <a class="btn btn-primary" href="#music">Listen now</a>
        <a class="btn btn-outline" href="#tour">Tour dates</a>
      </div>

      <div class="social">
        <span class="chip" v-for="s in social" :key="s.name">
          <a :href="s.url" target="_blank" rel="noopener">{{ s.name }}</a>
        </span>
      </div>
    </div>
  </section>
</template>