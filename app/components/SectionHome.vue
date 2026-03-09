<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden pt-20">
    <!-- Decorative Scanners & Grids -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-50 shadow-[0_0_15px_rgba(0,243,255,1)]"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-purple/5 rounded-full blur-3xl animate-pulse-soft pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text Content -->
        <div class="space-y-6 animate-fade-in-left" style="animation-delay: 0.2s">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-cyber-purple/10 border border-cyber-purple/30 shadow-[0_0_10px_rgba(183,33,255,0.2)]">
            <span class="w-2 h-2 rounded-none bg-cyber-cyan animate-pulse shadow-[0_0_5px_rgba(0,243,255,0.8)]"></span>
            <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">Available for Opportunities</span>
          </div>

          <div class="space-y-3">
            <p class="text-lg font-mono text-cyber-pink uppercase tracking-widest">> INIT_USER:</p>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-wider drop-shadow-[0_0_10px_rgba(183,33,255,0.5)]">
              Rasas Aufar
            </h1>
            <h2 class="text-2xl sm:text-3xl font-mono font-light text-cyber-cyan uppercase tracking-widest border-l-4 border-cyber-purple pl-4">
              IT Implementation Professional
            </h2>
          </div>

          <p class="font-mono text-sm text-gray-400 leading-relaxed max-w-lg border border-cyber-surface bg-cyber-panel p-4 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
            > EXECUTING PROTOCOL: IT Implementation Professional experienced in managing and delivering technology solutions for government projects, ensuring reliable system implementation, process optimization, and alignment with organizational and public sector needs.
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <a href="#portfolio" class="btn-primary" @click.prevent="scrollTo('portfolio')">
              Access Logs
            </a>
            <a href="#about" class="btn-outline" @click.prevent="scrollTo('about')">
              Whois
            </a>
          </div>

          <!-- Tech Stack Pills -->
          <div class="flex flex-wrap gap-2 pt-6">
            <span v-for="tech in techStack" :key="tech" class="px-3 py-1 text-xs font-mono uppercase bg-transparent border border-cyber-purple/40 text-cyber-purple hover:bg-cyber-purple hover:text-white hover:shadow-[0_0_10px_rgba(183,33,255,0.8)] transition-all duration-300 cursor-default">
              [{{ tech }}]
            </span>
          </div>
        </div>

        <!-- Right: Photo -->
        <div class="flex justify-center lg:justify-end animate-fade-in-right" style="animation-delay: 0.4s">
          <div class="relative">
            <!-- Decorative rings -->
            <div class="absolute -inset-4 rounded-full border border-cyber-cyan/30 border-dashed animate-[spin_20s_linear_infinite]"></div>
            <div class="absolute -inset-8 rounded-full border border-cyber-purple/20 animate-[spin_30s_linear_infinite_reverse]"></div>

            <!-- Photo Container -->
            <div class="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-cyber-cyan shadow-[0_0_30px_rgba(0,243,255,0.2)]">
              <img
                src="/images/profile.png"
                alt="Rasas - Profile Photo"
                class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-cyber-purple/40 to-transparent mix-blend-overlay"></div>
              <!-- Scanline effect overlay -->
              <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute bottom-4 -right-4 bg-cyber-panel border border-cyber-purple px-4 py-3 shadow-[0_0_15px_rgba(183,33,255,0.3)] animate-float backdrop-blur-md">
              <div class="flex items-center gap-3">
                <span class="text-cyber-cyan drop-shadow-[0_0_5px_currentColor]">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                <div>
                  <p class="text-xs font-mono text-gray-400 uppercase tracking-widest">Uptime</p>
                  <p class="text-sm font-mono font-bold text-cyber-purple">1+ Years</p>
                </div>
              </div>
            </div>

            <!-- Floating Badge 2 -->
            <div class="absolute top-4 -left-4 bg-cyber-panel border border-cyber-cyan px-4 py-3 shadow-[0_0_15px_rgba(0,243,255,0.3)] animate-float" style="animation-delay: 2s">
              <div class="flex items-center gap-3">
                <span class="text-cyber-purple drop-shadow-[0_0_5px_currentColor]">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </span>
                <div>
                  <p class="text-xs font-mono text-gray-400 uppercase tracking-widest">Tasks</p>
                  <p class="text-sm font-mono font-bold text-cyber-cyan">5+ Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div class="w-6 h-10 border border-cyber-cyan flex justify-center pt-2">
        <div class="w-1 h-3 bg-cyber-cyan shadow-[0_0_8px_rgba(0,243,255,1)] animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const techStack = ['Linux', 'UI / UX Design', 'Technical Documentation', 'Database', 'Prototyping', 'Figma', 'Deployment']

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
