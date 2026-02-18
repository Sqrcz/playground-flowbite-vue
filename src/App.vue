<template>
  <nav-bar />
  <main class="bg-white dark:bg-gray-800 shadow m-5 sm:p-6 px-4 py-5 rounded-lg overflow-hidden">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>
