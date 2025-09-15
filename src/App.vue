<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const artist = {
  name: 'Rail Wilbers',
  linktree: 'https://linktr.ee/RailWilbers',
}

const headerVisible = ref(false)
let lastScroll = 0

function onScroll() {
  const y = window.scrollY || window.pageYOffset
  // show header once user scrolls down more than 40px
  headerVisible.value = y > 40
  lastScroll = y
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  // hide at start
  headerVisible.value = false
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <header :class="['site-header', { visible: headerVisible }]" role="banner">
      <div class="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <!-- left brand removed: keep an invisible spacer to preserve layout -->
        <div class="flex-1" aria-hidden="true"></div>

        <nav class="container mx-auto px-6 hidden md:flex items-center gap-8 text-sm text-white/80">
          <RouterLink :to="{ path: '/', hash: '#releases' }" class="hover:text-white">Releases</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#videos' }" class="hover:text-white">Videos</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#listen' }" class="hover:text-white">Listen</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#updates' }" class="hover:text-white">Updates</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

    <footer class="border-t border-white/10 bg-black/80">
      <div class="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-white/60">© {{ new Date().getFullYear() }} {{ artist.name }}. All rights reserved.</p>
        <div class="flex items-center gap-4 text-sm">
          <RouterLink :to="{ path: '/', hash: '#releases' }" class="hover:text-white/90 text-white/70">Releases</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#videos' }" class="hover:text-white/90 text-white/70">Videos</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#listen' }" class="hover:text-white/90 text-white/70">Listen</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#updates' }" class="hover:text-white/90 text-white/70">Updates</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-header{
  position: fixed;
  inset: 0 0 auto 0;
  top: 0;
  transform: translateY(-100%);
  transition: transform .32s cubic-bezier(.2,.9,.2,1), background-color .25s;
  z-index: 60;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: rgba(0,0,0,0.0);
  border-bottom: 1px solid transparent;
}
.site-header.visible{
  transform: translateY(0);
  background: rgba(3,7,10,0.6); /* subtle dark background */
  border-bottom-color: rgba(255,255,255,0.04);
}
.nav-link{
  color: rgba(255,255,255,0.85);
}
.nav-link:hover{ color: #fff; }
</style>
