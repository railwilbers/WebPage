<script setup>
const props = defineProps({
  artist: { type: Object, required: true },
  social: { type: Array, default: () => [] }
})
</script>

<template>
  <section class="section container">
    <h2 id="contact">Contact</h2>
    <p class="lead">
      For bookings, press, or collabs, reach out at
      <a :href="`mailto:${artist.email}`" style="color:var(--accent2); font-weight:600;">
        {{ artist.email }}
      </a>.
    </p>

    <div class="card" style="margin-top:18px; padding:18px;">
      <div style="display:flex; flex-wrap:wrap; gap:10px;">
        <a v-for="s in social" :key="s.name" :href="s.url" target="_blank" rel="noopener" class="btn btn-outline">
          {{ s.name }}
        </a>
      </div>
    </div>
  </section>
</template>