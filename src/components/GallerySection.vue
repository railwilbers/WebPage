<script setup>
import { ref } from 'vue'
const props = defineProps({
  images: { type: Array, default: () => [] }
})
const open = ref(false)
const current = ref(null)
const openModal = (src) => { current.value = src; open.value = true }
const close = () => { open.value = false; current.value = null }
</script>

<template>
  <section class="section container">
    <h2 id="gallery">Gallery</h2>
    <p class="lead">Moments on and off stage.</p>

    <div class="grid grid-3" style="margin-top:18px;">
      <div v-for="img in images" :key="img" class="card" style="cursor: zoom-in; overflow:hidden;">
        <img :src="img" alt="Gallery" style="aspect-ratio: 4/3; object-fit: cover;" @click="openModal(img)">
      </div>
    </div>

    <!-- Simple lightbox -->
    <div v-if="open" @click="close"
         style="position:fixed; inset:0; background:rgba(0,0,0,.75); display:flex; align-items:center; justify-content:center; z-index:100;">
      <img :src="current" alt="Full" style="max-width:92vw; max-height:88vh; border-radius:12px; border:1px solid var(--border); box-shadow: var(--shadow);">
    </div>
  </section>
</template>