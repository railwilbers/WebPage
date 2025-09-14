<script setup>
import { ref } from 'vue'
const props = defineProps({
  newsletter: {
    type: Object,
    default: () => ({ provider: 'buttondown', username: 'railwilbers', title: 'Get updates', description: '' })
  }
})
const submitted = ref(false)

function openPopup() {
  const u = newsletter.username || 'yourusername'
  window.open(`https://buttondown.email/${u}`, 'popupwindow', 'scrollbars=yes,width=600,height=600')
  submitted.value = true
}
</script>

<template>
  <section class="section container">
    <h2 id="newsletter">{{ newsletter.title || 'Newsletter' }}</h2>
    <p class="lead">{{ newsletter.description || 'Join the list for new music, shows, and drops. No spam.' }}</p>

    <div class="card" style="margin-top:18px; padding:18px;">
      <form
        v-if="newsletter.provider === 'buttondown'"
        :action="`https://buttondown.email/api/emails/embed-subscribe/${newsletter.username}`"
        method="post"
        target="popupwindow"
        @submit="openPopup">
        <input type="hidden" name="embed" value="1" />
        <div class="form">
          <div class="field" style="flex: 1 1 320px;">
            <label for="bd-email" style="display:block; font-size:13px; color:var(--muted); margin-bottom:6px;">Email address</label>
            <input id="bd-email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div class="actions" style="align-items:flex-end;">
            <button class="btn btn-primary" type="submit">Subscribe</button>
          </div>
        </div>
      </form>

      <div v-else style="color:var(--muted);">
        Configure newsletter.provider in content.js (e.g., 'buttondown').
      </div>

      <div v-if="submitted" style="margin-top:10px; color:var(--muted);">
        Thanks! Check your inbox to confirm your subscription.
      </div>
    </div>
  </section>
</template>