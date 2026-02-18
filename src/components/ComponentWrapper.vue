<template>
  <div class="mb-6 last:mb-0">
    <div class="relative mb-4">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-300" />
      </div>
      <div class="relative flex justify-center">
        <span class="bg-white px-3 text-base font-semibold leading-6 text-gray-900">{{ label }}</span>
      </div>
    </div>
    <div class="flex justify-center">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
})
</script>
