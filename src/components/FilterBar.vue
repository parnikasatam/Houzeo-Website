<script setup>
import { ref } from 'vue'
const q = ref('')
function clearSearch(){ q.value = '' }
function onSearch(){ }
function openFilters(){ }
</script>

<template>
  <div class="filters">
    <div class="search-row">
      <div class="search">
        <input v-model="q" class="search-input" placeholder="Austin, TX" aria-label="Search" />
        <button v-if="q" class="clear-btn" aria-label="Clear search" @click="clearSearch">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M18 6L6 18M6 6l12 12" stroke="#0B5AA5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
        </button>
        <button class="cross-btn" aria-label="Close search" @click="clearSearch">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M18 6L6 18M6 6l12 12" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
        </button>
        <button class="search-btn" aria-label="Search" @click="onSearch">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
        </button>
      </div>

      <button class="filter-btn" aria-label="Filters" @click="openFilters">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M10 18h4v-2h-4v2zm-7-7v2h18v-2H3zm3-7v2h12V4H6z" fill="#0B5AA5"/></svg>
      </button>
    </div>

    <div class="input status custom-select" role="button" tabindex="0" aria-label="Property status">
      <div class="label sale">For Sale</div>
      <div class="icon status-icon" aria-hidden></div>
    </div>

    <div class="input price custom-select" role="button" tabindex="0" aria-label="Price">
      <div class="label">Price</div>
      <div class="icon black-icon" aria-hidden></div>
    </div>

    <div class="input beds custom-select" role="button" tabindex="0" aria-label="Beds & Baths">
      <div class="label">Beds & Baths</div>
      <div class="icon black-icon" aria-hidden></div>
    </div>

    <div class="input ptype custom-select" role="button" tabindex="0" aria-label="Property Type">
      <div class="label">Property Type</div>
      <div class="icon black-icon" aria-hidden></div>
    </div>

    <div class="input filters-select custom-select" role="button" tabindex="0" aria-label="Filters">
      <div class="icon filters-icon" aria-hidden></div>
      <div class="label">Filters</div>
    </div>

    <button class="save" aria-label="Saved">
      <div class="icon saved-icon" aria-hidden></div>
      <div class="label">Saved</div>
    </button>

    <div class="mobile-actions" aria-hidden="true">
      <div class="mobile-left">
        <div class="mobile-item mobile-status">For Sale</div>
        <div class="mobile-item mobile-price">Price</div>
      </div>
      <button class="mobile-item save-search" aria-label="Save Search"><span class="save-text">Save Search</span></button>
    </div>

  </div>
</template>

<style scoped>
.filters {
  background: white;
  padding: 16px 24px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid var(--border-light);
  align-items: center;
  flex-wrap: wrap;
}

.input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: border-color 0.25s, box-shadow 0.2s;
  background: white;
}

.status {
  width: 152px;
  height: 48px;
  padding: 14px 16px 14px 16px;
  gap: 12px;
  border-radius: 8px;
  background: #F3F7FA;
  border: 1px solid #0B5AA5;
  appearance: none;
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  opacity: 1;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%230B5AA5' d='M6 8L0 0h12z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

.status .label.sale {
  font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 14px;
  leading-trim: none;
  line-height: 100%;
  letter-spacing: 0;
  color: #0B5AA5;
}

.price {
  width: 154px;
  height: 48px;
  padding: 14px 16px;
  border-radius: 8px;
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.2);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  font-weight: 400;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%23000000' d='M6 8L0 0h12z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}

.beds {
  width: 184px;
  height: 48px;
  padding: 14px 16px;
  border-radius: 8px;
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.2);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  font-weight: 400;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%23000000' d='M6 8L0 0h12z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}

.ptype {
  width: 156px;
  height: 48px;
  padding: 14px 16px;
  gap: 12px;
  border-radius: 8px;
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.2);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  font-weight: 400;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%23000000' d='M6 8L0 0h12z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}

.filters-select {
  width: 101px;
  height: 48px;
  padding: 14px 16px;
  gap: 12px;
  border-radius: 8px;
  background: #FFFFFF;
  border: 1px solid #00000033;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  color: #000000;
  font-weight: 400;
  appearance: none;
  background-image: none;
}

.custom-select { display: inline-flex; align-items: center; justify-content: space-between; cursor: pointer }
.custom-select .label { color: #000000; font-weight: 400; font-size: 14px; line-height: 1; font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif }
.custom-select .icon { width: 16px; height: 16px; background-repeat: no-repeat; background-position: center; margin-left: 0 }

.filters-select.custom-select .icon { display: inline-block; margin-right: 12px }

.save {
  width: 124px;
  height: 48px;
  padding: 14px 16px;
  gap: 16px;
  border-radius: 500px;
  border: 1px solid #00000033;
  background: #FFFFFF;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.save .icon { width: 16px; height: 16px; margin-right: 8px }
.save .label { font-weight: 500 }

.price.custom-select .icon, .beds.custom-select .icon, .ptype.custom-select .icon { background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%23000000' d='M6 8L0 0h12z'/></svg>") }

.filters-icon, .saved-icon { background-repeat: no-repeat; background-position: center; background-size: 16px 16px; display: inline-block }
.filters-icon { background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%23000000' d='M10 18h4v-2h-4v2zm-7-7v2h18v-2H3zm3-7v2h12V4H6z'/></svg>"); }
.saved-icon { background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%23000000' d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/></svg>"); }

.price, .beds, .ptype { background-image: none; padding-right: 16px }

select.input {
  color: #000000;
  font-weight: 400;
}
select.input option {
  color: #000000;
  font-weight: 400;
  background: #ffffff;
}

.save {
  width: 124px;
  height: 48px;
  padding: 14px 16px;
  border-radius: 500px;
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.2);
  color: var(--text-dark);
  cursor: pointer;
  font-weight: 500;
}

.search {
  width: 398px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 8px 16px;
  border-radius: 500px;
  border: 2px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(90deg, #2876C1 0%, #0E5293 100%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  transition: box-shadow 0.2s, border-color 0.25s;
  gap: 8px;
}

.search-input {
  border: none;
  outline: none;
  background: transparent;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 0;
  min-width: 0;
}

.search-row { display: contents }

.clear-btn, .cross-btn, .search-btn, .filter-btn {
  border: none;
  background:#0B5AA5;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
  padding: 0;
}


.cross-btn {
  width: 32px;
  height: 32px;
  background: transparent;
  border-radius: 50px;
  box-shadow: 0px 4px 4px 0px #FFFFFF1A;
  opacity: 1;
  transform: rotate(0deg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.cross-btn svg path { stroke: #6B7280; }

.mobile-left{
  display:none;
} 
.filter-btn, .mobile-actions .save-search { display: none }

.clear-btn svg, .cross-btn svg, .search-btn svg, .filter-btn svg { width: 18px; height: 18px; }

.clear-btn:hover, .search-btn:hover, .filter-btn:hover { background: rgba(0,0,0,0.04); }
.cross-btn:hover { background: transparent; }

.input:hover, .search:hover, .input:focus, .search:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 6px 18px rgba(0,106,255,0.08);
}

.search { min-width: 260px; }
.sort { min-width: 180px }

@media (max-width: 480px) {
  .filters { gap: 8px; padding: 12px; align-items: flex-start }
  .search { width: 100%; min-width: unset; height: 44px; padding-left: 14px; padding-right: 8px; }
  .search-input { font-size: 14px; }
  .clear-btn { display: inline-flex; color: #0B5AA5; }
  .search-btn { display: inline-flex; background: var(--primary-blue); color: #fff; border-radius: 50px; }
  .filter-btn { display: inline-flex; border: 1px solid rgba(0,0,0,0.08); width: 44px; height: 44px; border-radius: 8px; margin-left: 8px; background: #fff; align-items:center; justify-content:center; }
  .save { width: 96px; height: 40px; padding: 8px 12px }
  .status, .price, .beds, .ptype, .filters-select { width: auto; min-width: 100px }
}

.save:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.06) }

@media (max-width: 768px) {
  .filters { gap: 8px; padding: 12px }
  .search { min-width: 140px }
}

@media (max-width: 480px) {
  .filters { gap: 12px; padding: 12px; align-items: flex-start; flex-direction: column }
  .search-row { display: flex; gap: 16px; width: 100%; align-items: center }
  .search { width: 100%; min-width: unset; height: 44px; padding-left: 14px; padding-right: 8px; flex: 1 1 auto }
  .filter-btn { display: inline-flex; border: 1px solid rgba(0,0,0,0.08); width: 44px; height: 44px; border-radius: 8px; margin-left: 0; background: #fff; align-items: center; justify-content: center }
  .clear-btn { display: inline-flex; color: #0B5AA5 }
  .search-btn { display: inline-flex; background: var(--primary-blue); color: #fff; border-radius: 50px }

  .input { min-width: 120px; flex: 0 0 auto }
  .save { width: 96px; height: 40px; padding: 8px 12px }

  .beds, .ptype, .filters-select, .save { display: none }

  .status, .price { display: none }

  .mobile-actions { display: flex; justify-content: space-between; gap: 16px; width: 100%; align-items: center }
  .mobile-actions .mobile-left { display: flex; gap: 16px; align-items: center }
  .mobile-actions .mobile-item { height: 44px; padding: 10px 14px; border-radius: 8px; border: 1px solid #d1d5db; background: #fff; display: flex; align-items: center; justify-content: center; font-weight: 500; min-width: 100px; text-align: center; position: relative }
  .mobile-actions .mobile-status { background: #F3F7FA; border: 1px solid #0B5AA5; color: #0B5AA5; font-weight: 600; padding-right: 40px; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%230B5AA5' d='M6 8L0 0h12z'/></svg>"); background-repeat: no-repeat; background-position: right 12px center; background-size: 12px 8px;  height:36px }
  .mobile-actions .mobile-price { background: #FFFFFF; border: 1px solid rgba(0,0,0,0.2); color: #000000; padding-right: 40px; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%23000000' d='M6 8L0 0h12z'/></svg>"); background-repeat: no-repeat; background-position: right 12px center; background-size: 12px 8px ; height:36px}
  .mobile-actions .save-search { width: 104px; height: 36px; gap: 16px; opacity: 1; border-radius: 500px; border-width: 1px; padding: 14px; background: #0B5AA5; border: 1px solid #FFFFFF; color: #FFFFFF; display: flex; align-items: center; justify-content: center }
  .mobile-actions .save-search .save-text { display: inline-block; width: 76px; height: 18px; font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-weight: 500; font-size: 12px; line-height: 18px; letter-spacing: 0; opacity: 1; text-align: center }

  .status, .price { width: auto; min-width: 100px }
}
</style>
