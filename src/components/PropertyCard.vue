<script setup>
import { ref, computed } from 'vue'
const props = defineProps({ property: Object })

const viewText = computed(() => props.property.views ?? '2.3k')

const active = ref(0)
const total = computed(() => props.property.images?.length || 0)
const next = () => { active.value = (active.value + 1) % total.value }
const prev = () => { active.value = (active.value - 1 + total.value) % total.value }
const toggleFav = ref(false)
</script>

<template>
  <article class="property-card">
    <div class="gallery" @mouseenter.stop>
      <div class="image-overlay">
        <div class="days-badge">{{ property.daysOnMarket }} days on Houzeo</div>
        <div class="right-overlay">
          <div class="meta-top-right">{{ property.daysOnMarket }} days on Houzeo</div>
          <button class="fav-image" :class="{ saved: toggleFav }" @click.stop="toggleFav = !toggleFav" aria-label="save property">❤</button>
        </div>
      </div>
      <div class="images">
        <img
          v-for="(img, i) in property.images"
          :key="i"
          :src="img"
          :alt="property.title + ' image ' + (i+1)"
          :loading="i === 0 ? 'eager' : 'lazy'"
          :class="{ active: active === i }"
        />
      </div>

      <button class="nav prev" v-if="total > 1" @click.stop="prev">‹</button>
      <button class="nav next" v-if="total > 1" @click.stop="next">›</button>

      <div class="bullets" v-if="total > 1">
        <button v-for="(n, idx) in total" :key="idx" :class="{ dot: true, active: active === idx }" @click.stop="active = idx" aria-label="go to image" />
      </div>
     
     <div class="heart-btn" aria-label="Save property" @click.stop>
      ❤
    </div>

      <div class="bottom-badge">{{ property.daysOnMarket }} days on Houzeo</div>
      
    </div>

    <div class="content">
      <div class="meta-row">
        <div class="type"><span class="green-dot" aria-hidden></span>{{ property.type }}</div>
        <div class="views">
          <span class="eye-icon" aria-hidden></span>
          <span class="views-count">{{ viewText }}</span>
        </div>
      </div>

      <div class="title-row">
        <div class="title-text">{{ property.title }}</div>
      </div>
        <div class="price-row">
          <div class="price">{{ property.price }}</div>
            <div class="details"><span class="num">{{ property.beds }}</span> Beds <span class="num">{{ property.baths }}</span> Baths <span class="num">{{ property.sqft }}</span> sqft.</div>
        </div>
        <div class="address" :title="property.address">{{ property.address }}</div>
        <div class="address-meta">{{ property.mlsText || 'Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID' }}</div>
    </div>
  </article>
</template>

<style scoped>
.property-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  width:330px;
}
.property-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-hover); }

.gallery { position: relative; height: 180px; background: #f3f4f6 }
.image-overlay { position: absolute; left: 12px; right: 12px; top: 12px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px; pointer-events: none }
.days-badge { pointer-events: auto; background: white; color: #111827; padding: 6px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; box-shadow: 0 6px 18px rgba(9,30,66,0.08) }
.fav-image { pointer-events: auto; background: rgba(255,255,255,0.95); border: none; width: 36px; height: 36px; border-radius: 50%; display:flex; align-items:center; justify-content:center; cursor: pointer; box-shadow: 0 6px 18px rgba(9,30,66,0.08) }
.fav-image.saved { color: #ff4d6d }
.images { width: 100%; height: 100%; position: relative }
.images img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.35s ease; }
.images img.active { opacity: 1 }

.nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.45); color: white; border: none; width: 36px; height: 36px; border-radius: 50%; display: none; align-items: center; justify-content: center; cursor: pointer }
.nav.prev { left: 12px }
.nav.next { right: 12px }
.gallery:hover .nav { display: flex }

.bullets { position: absolute; left: 50%; transform: translateX(-50%); bottom: 8px; display: flex; gap: 8px }
.bullets .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.6); border: none }
.bullets .dot.active { background: var(--primary-blue) }
.gallery:hover .bullets { opacity: 1 }

.content { padding: 12px }
.meta-row { display: flex; justify-content: space-between; align-items: center }
.type { font-size: 0.85rem; color: var(--text-muted); display:flex; align-items:center; gap:8px ; border: 1px solid #0000001A; border-radius:24px; width:122px}

.fav { background: transparent; border: none; font-size: 1.1rem; cursor: pointer; transition: transform 0.12s ease }
.fav:hover { transform: scale(1.12) }
.fav.saved { color: #ff4d6d }

.fav:hover { animation: pulse 0.8s }
@keyframes pulse { 0% { transform: scale(1) } 40% { transform: scale(1.15) } 100% { transform: scale(1) } }

.title-row { display:block; margin: 8px 0 4px }
.title-text { font-size: 1rem; font-weight: 600 }
.green-dot { width:8px; height:8px; background:#10B981; border-radius:50%; display:inline-block }
.views { display:flex; align-items:center; gap:6px }

.price-row { display: flex; align-items: center; gap: 63px;  width:306px; }
.price-row .price { font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 18px; line-height: 100%; color: var(--primary-blue) }
.price-row .details { margin-top: 0; color: var(--text-muted); font-size: 0.9rem; font-weight: 400; }
.price-row .details .num { color: #0B5AA5; font-weight: 600; font-size:14px }

@media (max-width: 768px) {
  .price-row { flex-direction: column; align-items: flex-start; gap: 6px }
}
.address { font-size: 12px; color: var(--text-dark); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 8px }
.address-meta { color: var(--text-muted); margin-top: 4px }
.right-overlay { display:flex; align-items:flex-start; gap:8px }
.meta-top-right { pointer-events: auto; background: white; color: #111827; padding: 6px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; box-shadow: 0 6px 18px rgba(9,30,66,0.08) }
.bottom-badge { position: absolute;  right: 197px; bottom: 136px; pointer-events: auto; background: white; color: #111827; padding: 6px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; box-shadow: 0 6px 18px rgba(9,30,66,0.08) }
.eye-icon { width:18px; height:18px; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%236B7280' d='M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/></svg>"); background-repeat:no-repeat; background-position:center; background-size:18px 18px }
.views-count { font-size: 0.9rem; color: rgba(0,0,0,0.6) }
.price { color: #0B5AA5; font-weight: 700; font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 18px; line-height: 100% }
.details, .address, .meta-bottom { color: var(--text-muted); font-size: 0.9rem; margin-top: 6px }

@media (max-width: 768px) {
  .gallery { height: 200px }
  .property-card { width: 100% }
  .price-row { width: auto; gap: 12px }
  .bottom-badge, .meta-top-right { display: none }
  .heart-btn { top: 8px; right: 8px }
  .title-text { font-size: 0.98rem }
  .content { padding: 10px }
  .type { width: auto }
}

.heart-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  height: 34px;
  border: none;
  display: grid;
  place-items: center;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.4s ease;
  background: black;
  border-radius: 6px;
  width: 28px;
  height: 24px;
}

.heart-btn:hover {
  animation: pulse 0.8s ease-in-out;
}

.heart-btn:active {
  transform: scale(0.9);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

</style>