

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import properties from "../data/properties"

let map = null

onMounted(async () => {
  let Llib = null

  try {
    const mod = await import('leaflet')
    Llib = mod?.default || mod
    try { await import('leaflet/dist/leaflet.css') } catch (e) { /* ignore */ }
  } catch (err) {
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link')
      link.id = 'leaflet-css'
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    if (!window.L) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.async = true
        script.onload = () => resolve(null)
        script.onerror = () => reject(new Error('Failed to load Leaflet from CDN'))
        document.head.appendChild(script)
      })
    }

    Llib = window.L
  }

  if (!Llib) return

  map = Llib.map('map', { zoomControl: true }).setView([39.8283, -98.5795], 4)

  Llib.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  properties.forEach(p => {
    const lat = 20 + (p.mapY / 100) * 30 // simple mapping for demo
    const lng = -130 + (p.mapX / 100) * 60

    const marker = Llib.marker([lat, lng]).addTo(map)
    marker.bindPopup(`<strong>${p.title}</strong><br>${p.price}`)
  })
})

onBeforeUnmount(() => {
  if (map) map.remove()
})
</script>

<template>
  <section class="map-section">
    <div id="map" class="map" role="application" aria-label="Properties map"></div>
  </section>
</template>

<style scoped>
.map-section { width:708px; display: flex; align-items: stretch; justify-content: center; 
height: 870;
top: 154px;
angle: 0 deg;
opacity: 1;
 }
.map { width: 100%; height: 720px;  overflow: hidden; height:870px }

@media (max-width: 768px) {
  .map { height: 260px }
}

@media (max-width: 480px) {
  .map { height: 200px }
  .map-section { width: 100%; padding: 0 12px; display: none }
} 
</style>
