<template>
  <header>
    <HeaderBar />
  </header>
  <main>
    <RouterView class="mb-[120px] px-5 tablet:px-20" />
  </main>
  <footer>
    <FooterBar class="px-5 tablet:px-20" />
  </footer>
</template>

<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>
