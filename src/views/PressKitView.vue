<script setup>
import { artist, social, press, spotify } from '../data/content'
</script>

<template>
  <section class="section container">
    <div class="card" style="padding:28px; overflow:hidden;">
      <div style="display:flex; flex-wrap:wrap; gap:18px; align-items:flex-end; justify-content:space-between;">
        <div>
          <div class="badge">Electronic / Alt‑Pop</div>
          <h1 style="font-size:42px; margin-top:8px;">{{ artist.name }} — Press Kit</h1>
          <p class="lead" style="margin-top:8px;">{{ press.oneLiner }}</p>
        </div>
        <div>
          <a class="btn btn-primary" :href="press.downloads.zip" target="_blank" rel="noopener">⬇ Download EPK (.zip)</a>
        </div>
      </div>

      <div class="grid grid-2" style="margin-top:24px;">
        <div>
          <h3 style="font-size:20px; margin-bottom:10px;">Short Bio</h3>
          <p style="color:var(--muted);">{{ press.bioShort }}</p>

          <h3 style="font-size:20px; margin:18px 0 10px;">Long Bio</h3>
          <p style="color:var(--muted); white-space:pre-line;">{{ press.bioLong }}</p>

          <h3 style="font-size:20px; margin:18px 0 10px;">Stats</h3>
          <div style="display:grid; grid-template-columns: 120px 1fr; gap:8px; color:var(--muted);">
            <div>Location</div><div>{{ press.location }}</div>
            <div>Genre</div><div>{{ press.genre }}</div>
            <div>RIYL</div><div>{{ press.riyl.join(', ') }}</div>
          </div>

          <h3 style="font-size:20px; margin:18px 0 10px;">Contact</h3>
          <div style="color:var(--muted);">
            <div><strong>Management:</strong> {{ press.contact.management }}</div>
            <div><strong>Press:</strong> <a :href="`mailto:${press.contact.pressEmail}`" style="color:var(--accent2);">{{ press.contact.pressEmail }}</a></div>
            <div><strong>Bookings:</strong> <a :href="`mailto:${press.contact.bookingEmail}`" style="color:var(--accent2);">{{ press.contact.bookingEmail }}</a></div>
          </div>

          <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
            <a v-for="s in social" :key="s.name" :href="s.url" target="_blank" class="chip">{{ s.name }}</a>
          </div>
        </div>

        <div>
          <h3 style="font-size:20px; margin-bottom:10px;">Featured Tracks</h3>
          <div class="card" style="overflow:hidden; margin-bottom:12px;">
            <iframe
              :src="spotify.embedUrl"
              width="100%" height="352" frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"></iframe>
          </div>

          <h3 style="font-size:20px; margin:18px 0 10px;">Press Quotes</h3>
          <div v-if="press.quotes.length === 0" style="color:var(--muted);">No quotes yet — check back soon.</div>
          <blockquote v-for="q in press.quotes" :key="q.quote" class="card" style="padding:14px; margin-bottom:10px;">
            <div style="font-style:italic;">“{{ q.quote }}”</div>
            <div style="color:var(--muted); margin-top:6px;">— <a :href="q.link" target="_blank" rel="noopener">{{ q.source }}</a></div>
          </blockquote>

          <div style="margin-top:18px; display:flex; gap:10px; flex-wrap:wrap;">
            <a class="btn btn-outline" :href="press.downloads.pdf" target="_blank" rel="noopener">EPK (PDF)</a>
            <a class="btn btn-outline" :href="press.downloads.techRider" target="_blank" rel="noopener">Tech Rider</a>
            <a class="btn btn-outline" :href="press.downloads.stagePlot" target="_blank" rel="noopener">Stage Plot</a>
            <a class="btn btn-outline" :href="press.downloads.logoPack" target="_blank" rel="noopener">Logo Pack</a>
          </div>
        </div>
      </div>

      <h3 style="font-size:20px; margin:26px 0 12px;">Approved Photos</h3>
      <div class="grid grid-3">
        <a v-for="img in press.photos" :key="img.url" :href="img.url" target="_blank" rel="noopener" class="card" style="overflow:hidden;">
          <img :src="img.url" :alt="img.caption || 'Press photo'" style="aspect-ratio: 4/3; object-fit:cover;">
        </a>
      </div>

      <h3 style="font-size:20px; margin:26px 0 12px;">Logos</h3>
      <div class="grid grid-3">
        <a v-for="logo in press.logos" :key="logo" :href="logo" target="_blank" rel="noopener" class="card" style="padding:18px; display:flex; align-items:center; justify-content:center; background:#0c1118;">
          <img :src="logo" alt="Logo" style="max-height:120px;">
        </a>
      </div>
    </div>
  </section>
</template>