<template>
  <button 
    @click="toggleTheme" 
    class="flex items-center gap-2 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 border bg-cyber-light-surface text-cyber-light-text border-cyber-light-border dark:bg-cyber-surface dark:text-cyber-cyan dark:border-cyber-cyan hover:shadow-[0_0_10px_#cbd5e1] dark:hover:shadow-[0_0_10px_#00f3ff66] clip-cyber-sm"
  >
    <span v-if="isDark" class="text-cyber-cyan">> MODE: NULL</span>
    <span v-else class="text-cyber-purple">> MODE: ADMIN</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const colorMode = useColorMode()

// Cek apakah preference saat ini bernilai dark
const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  // Toggle antara 'light' dan 'dark'
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>
