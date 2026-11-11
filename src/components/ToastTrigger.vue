<template>
  <fwb-button @click="add({ type: 'success', text: 'Saved! (slide-left transition from index.css)', time: 3000 })">
    Show toast
  </fwb-button>
</template>

<script setup lang="ts">
import { useToast } from 'flowbite-vue'

// Must render inside <fwb-toast-provider>, which useToast injects from.
const { add } = useToast()
</script>
