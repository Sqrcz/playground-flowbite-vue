import { onMounted, ref, watch } from 'vue'

export function useDarkMode () {
  const isDark = ref(false)

  const updateTheme = (dark: boolean) => {
    isDark.value = dark
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  }

  const toggleTheme = () => {
    updateTheme(!isDark.value)
  }

  const initTheme = () => {
    const storedTheme = localStorage.getItem('color-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      updateTheme(true)
    } else {
      updateTheme(false)
    }
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme,
    initTheme,
  }
}
