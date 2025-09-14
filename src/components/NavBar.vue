<script setup>
import { ref } from 'vue'
import { artist as artistData } from '../data/content'

const props = defineProps({ name: { type: String, default: artistData.name }})
const open = ref(false)
const close = () => { open.value = false }
</script>

<template>
  <nav class="nav">
    <div class="container nav-inner">
      <div class="brand">
        <span style="font-size:18px; background:linear-gradient(135deg, var(--accent), var(--accent2)); -webkit-background-clip:text; background-clip:text; color:transparent;">●</span>
        <RouterLink to="/#home" style="font-weight:800;">{{ name }}</RouterLink>
      </div>

      <div class="nav-links">
        <RouterLink to="/#music">Music</RouterLink>
        <RouterLink to="/#videos">Videos</RouterLink>
        <RouterLink to="/#tour">Tour</RouterLink>
        <RouterLink to="/#gallery">Gallery</RouterLink>
        <RouterLink to="/#contact">Contact</RouterLink>
        <RouterLink to="/press">Press Kit</RouterLink>
      </div>

      <button class="btn btn-outline mobile-toggle" @click="open = !open">Menu</button>
    </div>

    <div v-if="open" class="mobile-menu container">
      <RouterLink to="/#music" @click.native="close">Music</RouterLink>
      <RouterLink to="/#videos" @click.native="close">Videos</RouterLink>
      <RouterLink to="/#tour" @click.native="close">Tour</RouterLink>
      <RouterLink to="/#gallery" @click.native="close">Gallery</RouterLink>
      <RouterLink to="/#contact" @click.native="close">Contact</RouterLink>
      <RouterLink to="/press" @click.native="close">Press Kit</RouterLink>
    </div>
  </nav>
</template>