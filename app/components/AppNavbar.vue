<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-cyber-light-border dark:border-cyber-purple/20"
    :class="scrolled ? 'bg-cyber-light-surface/95 dark:bg-cyber-bg/95 backdrop-blur-md shadow-[0_0_20px_#cbd5e1] dark:shadow-[0_0_20px_rgba(183,33,255,0.2)] border-cyber-light-border dark:border-cyber-purple/50' : 'bg-cyber-light-bg/50 dark:bg-cyber-bg/50 backdrop-blur-sm'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-2 group" @click.prevent="scrollToSection('home')">
          <!-- Logo Typography -->
          <span class="text-2xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink shadow-none dark:drop-shadow-[0_0_8px_rgba(183,33,255,0.8)] animate-pulse hover:animate-glitch transition-all duration-300 uppercase">
            rasasaufar
          </span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-2">
          <div class="flex items-center gap-1 font-mono uppercase text-sm tracking-widest">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              class="px-4 py-2 rounded-sm transition-all duration-300 border border-transparent"
              :class="activeSection === item.id
                ? 'bg-cyber-light-panel dark:bg-cyber-purple/20 text-cyber-purple dark:text-cyber-cyan border-cyber-light-border dark:border-cyber-cyan shadow-[0_0_10px_#cbd5e1] dark:shadow-[0_0_10px_rgba(0,243,255,0.3)]'
                : 'text-gray-600 dark:text-gray-400 hover:text-cyber-purple dark:hover:text-cyber-cyan hover:bg-cyber-light-panel dark:hover:bg-cyber-purple/10 hover:border-cyber-light-border dark:hover:border-cyber-purple/50'"
              @click.prevent="scrollToSection(item.id)"
            >
              <span class="text-cyber-purple mr-1 opacity-70">></span>{{ item.label }}
            </a>
          </div>
          <div class="ml-4 border-l border-cyber-light-border dark:border-cyber-purple/30 pl-4">
             <ThemeToggle />
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-2 md:hidden">
          <ThemeToggle class="mr-2" />
          <button
            class="p-2 rounded-sm border border-cyber-light-border dark:border-cyber-purple/30 text-cyber-purple hover:bg-cyber-light-panel dark:hover:bg-cyber-purple/20 hover:text-cyber-purple dark:hover:text-cyber-cyan hover:border-cyber-light-border dark:hover:border-cyber-cyan transition-colors dark:hover:shadow-[0_0_10px_rgba(0,243,255,0.3)]"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-cyber-light-surface/95 dark:bg-cyber-surface/95 backdrop-blur-xl border-b border-cyber-light-border dark:border-cyber-purple/50 shadow-[0_10px_20px_#cbd5e1] dark:shadow-[0_10px_20px_rgba(183,33,255,0.2)]"
      >
        <div class="px-4 py-3 space-y-1 font-mono uppercase text-sm tracking-wider">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="block px-4 py-3 rounded-sm transition-all duration-300 border-l-2"
            :class="activeSection === item.id
              ? 'bg-cyber-light-panel dark:bg-cyber-purple/20 text-cyber-purple dark:text-cyber-cyan border-cyber-light-border dark:border-cyber-cyan'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-cyber-purple dark:hover:text-cyber-cyan hover:bg-cyber-light-panel dark:hover:bg-cyber-purple/10 hover:border-cyber-light-border dark:hover:border-cyber-purple/50'"
            @click.prevent="scrollToSection(item.id); mobileOpen = false"
          >
            <span class="text-cyber-purple mr-2 opacity-70">>></span>{{ item.label }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('home')

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'certificate', label: 'Certificate' },
  { id: 'publication', label: 'Publication' },
]

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50

  // Detect active section
  const sections = navItems.map(item => ({
    id: item.id,
    el: document.getElementById(item.id),
  }))

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section?.el) {
      const rect = section.el.getBoundingClientRect()
      if (rect.top <= 150) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
