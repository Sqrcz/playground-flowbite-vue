<template>
  <nav class="bg-gray-800 dark:bg-gray-900">
    <div class="mx-auto px-5">
      <div class="relative flex justify-between items-center h-16">
        <div class="flex flex-1 justify-start items-stretch">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link
              to="/"
              class="px-3 py-2 rounded-md font-medium text-sm link"
            >
              Dashboard
            </router-link>
            <router-link
              to="/playground"
              class="px-3 py-2 rounded-md font-medium text-sm link"
            >
              Playground
            </router-link>
          </div>
        </div>
        <div class="flex items-center">
          <button
            type="button"
            class="hover:bg-gray-700 p-2 rounded-md text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle dark mode"
            @click="toggleTheme"
          >
            <svg
              v-if="!isDark"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleTheme } = useDarkMode()
</script>

<style scoped>
.link-active {
  @apply bg-gray-900 text-white
}
.link:not(.link-active) {
  @apply text-gray-300 hover:bg-gray-700 hover:text-white
}
</style>
