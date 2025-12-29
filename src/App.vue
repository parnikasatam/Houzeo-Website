<template>
  <Header />
  <FilterBar />

  <div class="layout">
    <MapSection />
    <PropertyList />
  </div>
</template>

<script setup>
// Use the actual filename (`header.vue`) to avoid case-sensitivity issues on some OSes
import Header from "./components/header.vue";
import FilterBar from "./components/FilterBar.vue";
import MapSection from "./components/MapSection.vue";
import PropertyList from "./components/PropertyList.vue";
</script>

<style>
.layout {
  display: flex;
  height: calc(100vh - 120px);
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }
}
</style>
