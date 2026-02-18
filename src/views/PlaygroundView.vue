<template>
  <div class="flex flex-col p-3 w-1/2">
    38
    <fwb-select
      v-model="selected.sm"
      :options="countries"
      label="Select a country"
      size="sm"
    />
    42
    <fwb-select
      v-model="selected.md"
      :options="countries"
      label="Select a country"
      size="md"
    />
    50
    <fwb-select
      v-model="selected.lg"
      :options="countries"
      label="Select a country"
      size="lg"
    />
    54
    <fwb-select
      v-model="selected.xl"
      :options="countries"
      label="Select a country"
      size="xl"
    />
  </div>
  <pre>{{ selected }}</pre>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref({
  sm: '',
  md: '',
  lg: '',
  xl: '',
})
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
