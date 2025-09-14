<script setup>
import HeroSection from '../components/HeroSection.vue'
import MusicSection from '../components/MusicSection.vue'
import VideoSection from '../components/VideoSection.vue'
import TourSection from '../components/TourSection.vue'
import GallerySection from '../components/GallerySection.vue'
import NewsletterSection from '../components/NewsletterSection.vue'
import ContactSection from '../components/ContactSection.vue'

import { artist, social, releases, videos, tourDates, gallery, spotify, newsletter } from '../data/content'
</script>

<template>
  <HeroSection :artist="artist" :social="social" />
  <MusicSection id="music" :releases="releases" :spotify-embed="spotify.embedUrl" />
  <VideoSection id="videos" :videos="videos" />
  <TourSection id="tour" :tourDates="tourDates" />
  <GallerySection id="gallery" :images="gallery" />

  <NewsletterSection id="newsletter" :newsletter="newsletter" />

  <ContactSection id="contact" :artist="artist" :social="social" />
</template>