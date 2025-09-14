<script setup>
const props = defineProps({
  tourDates: { type: Array, default: () => [] }
})

const formatDate = (iso) => {
  const d = new Date(iso)
  return d.toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })
}
</script>

<template>
  <section class="section container">
    <h2 id="tour">Tour</h2>
    <p class="lead">See Rail Wilbers live. More dates announced soon.</p>

    <div class="card" style="margin-top:18px;">
      <div v-if="!tourDates || tourDates.length === 0" style="padding:18px; color:var(--muted);">
        No upcoming shows yet. Check back soon.
      </div>

      <div v-for="show in tourDates" :key="show.date + show.venue"
           style="display:flex; flex-wrap:wrap; gap:14px; align-items:center; justify-content:space-between; padding:16px 18px; border-bottom:1px solid var(--border);">
        <div style="display:flex; align-items:center; gap:16px;">
          <div class="chip">{{ formatDate(show.date) }}</div>
          <div>
            <div style="font-weight:600;">{{ show.venue }}</div>
            <div style="color:var(--muted); font-size:14px;">{{ show.city }}</div>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <span class="badge">{{ show.status }}</span>
          <a :href="show.tickets" target="_blank" rel="noopener" class="btn btn-primary">Tickets</a>
        </div>
      </div>
    </div>
  </section>
</template>