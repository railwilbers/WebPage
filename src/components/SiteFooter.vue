<script setup>
const props = defineProps({ name: { type: String, default: 'Artist' }})
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
      <div>© {{ year }} {{ name }}. All rights reserved.</div>
      <div style="color:#6f7c91;">Built with Vue • Hosted on Render</div>
    </div>
  </footer>
</template>