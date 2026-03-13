<template>
  <footer class="relative mt-24 border-t border-cyber-light-border dark:border-cyber-cyan/30 bg-cyber-light-surface dark:bg-cyber-bg overflow-hidden flex-shrink-0">
    <!-- Top Decorative Line -->
    <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
    <div class="absolute top-0 left-1/4 w-1/2 h-[1px] bg-cyber-pink blur-sm"></div>

    <!-- Scanline Overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30 z-0"></div>

    <div class="relative z-10 pt-16 pb-8 bg-gradient-to-b from-transparent to-cyber-purple/10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <!-- Brand -->
          <div class="space-y-4">
            <a href="#home" class="inline-flex items-center group cursor-pointer" @click.prevent="scrollToSection('home')">
              <span class="text-2xl font-display font-bold text-cyber-light-text dark:text-white uppercase tracking-widest drop-shadow-none dark:drop-shadow-[0_0_5px_rgba(0,243,255,0.8)] group-hover:text-cyber-purple dark:group-hover:text-cyber-cyan transition-colors duration-300">
                RASAS_AUFAR
              </span>
            </a>
            <p class="font-mono text-sm text-gray-500 dark:text-gray-400 leading-relaxed pl-3 border-l-2 border-cyber-light-border dark:border-cyber-purple drop-shadow-none dark:drop-shadow-[0_0_2px_rgba(0,0,0,1)]">
              > IT Implementation Professional passionate about creating impactful digital solutions and sharing knowledge through publications.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-sm font-mono font-bold text-cyber-cyan uppercase tracking-widest mb-4 flex items-center gap-2 drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">
               <span class="text-cyber-pink">#</span> SYSTEM_LINKS
            </h4>
            <ul class="space-y-2">
              <li v-for="item in quickLinks" :key="item.id">
                <a
                  :href="`#${item.id}`"
                  class="font-mono text-sm uppercase tracking-wider text-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
                  @click.prevent="scrollToSection(item.id)"
                >
                  <span class="text-cyber-purple group-hover:text-cyber-cyan group-hover:animate-pulse transition-colors">></span>
                  <span class="group-hover:translate-x-1 transition-transform">{{ item.label }}</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
             <h4 class="text-sm font-mono font-bold text-cyber-cyan uppercase tracking-widest mb-4 flex items-center gap-2 drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">
               <span class="text-cyber-pink">#</span> CONNECT
            </h4>
            <div class="flex gap-4">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 border border-cyber-light-border dark:border-cyber-purple bg-cyber-light-panel dark:bg-cyber-bg/50 hover:bg-cyber-purple dark:hover:bg-cyber-cyan hover:border-cyber-purple dark:hover:border-cyber-cyan hover:text-white dark:hover:text-black text-cyber-purple flex items-center justify-center transition-all duration-300 hover:shadow-[4px_4px_0px_#cbd5e1] dark:hover:shadow-[0_0_15px_rgba(0,243,255,0.8)] relative group overflow-hidden"
                :title="social.name"
              >
                <!-- Decorative dot -->
                <span class="absolute top-0.5 right-0.5 w-1 h-1 bg-cyber-pink opacity-0 group-hover:opacity-100"></span>

                <!-- WhatsApp -->
                <svg v-if="social.name === 'WhatsApp'" class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                <!-- Email -->
                <svg v-else-if="social.name === 'Email'" class="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <!-- LinkedIn -->
                <svg v-else-if="social.name === 'LinkedIn'" class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <!-- Instagram -->
                <svg v-else-if="social.name === 'Instagram'" class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-cyber-purple/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="font-mono text-xs uppercase tracking-widest text-gray-500">
            SYS.DATE: {{ new Date().getFullYear() }} // RASAS_AUFAR // ALL_RIGHTS_RESERVED
          </p>
          <p class="font-mono text-xs uppercase tracking-widest text-gray-500 flex items-center gap-2">
            CONSTRUCTED_WITH 
            <span class="text-cyber-pink animate-pulse">❤</span> 
            USING <span class="text-cyber-light-text dark:text-white">NUXT</span> & <span class="text-cyber-purple dark:text-cyber-cyan">TAILWIND</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'certificate', label: 'Certificate' },
  { id: 'publication', label: 'Publication' },
]

const socials = [
  { name: 'WhatsApp', url: 'https://wa.me/085326775595' },
  { name: 'Email', url: 'mailto:rasasaufar4@gmail.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rasas-aufar/' },
  { name: 'Instagram', url: 'https://instagram.com/rasasaufar' },
]

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
