<template>
  <div class="list">
    <div class="toolbar">
      <div class="left-meta">
        <div class="title">Austin, TX real estate & homes for sale</div>
        <div class="sub-row">
          <div class="homes-count">2,010 Homes</div>
          <div class="sort-inline">
            <div class="sort-label">Sort by:</div>
            <div class="sort-value">New Listing <span class="chev" aria-hidden></span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="cards-grid">
      <PropertyCard
        v-for="p in properties"
        :key="p.id"
        :property="p"
      />
    </div>
  </div>
</template>

<script setup>
import PropertyCard from "./PropertyCard.vue";
import properties from "../data/properties";
</script>

<style scoped>

.list {
  width:732px;
  padding: 18px 20px;
  display: block;
  overflow-y: auto;
  height: 742px;
}

.toolbar { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px }
.left-meta { display: flex; flex-direction: column; gap: 6px ; width: 684px;}
.left-meta .title {
  width: 350px;
  height: 27px;
  text-align: left;
  align-self: flex-start;
  font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  leading-trim: none;
  line-height: 100%;
  letter-spacing: 0;
  color: #000000;
}
.left-meta .sub-row { display: flex; align-items: center; justify-content: space-between; height: 21px }
.homes-count { width: 88px; height: 21px; font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-weight: 500; font-style: normal; font-size: 14px; leading-trim: none; line-height: 100%; letter-spacing: 0; color: rgba(0,0,0,0.4) }
.sort-inline { display: flex; align-items: center; gap: 9px }
.sort-label { color: rgba(0,0,0,0.6); font-size: 14px }
.sort-value { width: 102px; height: 21px; display: inline-flex; align-items: center; gap: 9px; cursor: pointer; font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-weight: 500; font-style: normal; font-size: 14px; leading-trim: none; line-height: 100%; letter-spacing: 0; color: #0B5AA5 }
.sort-value .chev { width: 18px; height: 18px; display: inline-block; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 12 8'><path fill='%230B5AA5' d='M6 8L0 0h12z'/></svg>"); background-repeat: no-repeat; background-position: center; background-size: 18px 18px }


.cards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px }

@media (max-width: 768px) {
  .list { width: 100%; padding: 12px }
  .cards-grid { grid-template-columns: 1fr }
  .left-meta { width: auto }
}
</style>
