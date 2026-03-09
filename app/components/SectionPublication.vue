<template>
  <section id="publication" class="py-24 relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute bottom-0 left-0 w-full h-[500px] bg-[linear-gradient(transparent_0%,rgba(0,243,255,0.05)_100%)] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <span class="badge mb-4"><span class="text-cyber-cyan mr-2">></span>ARCHIVES</span>
        <h2 class="section-title">Research and Publications</h2>
        <p class="section-subtitle">Berikut adalah jurnal ilmiah yang telah saya publikasikan</p>
      </div>

      <!-- Publications List -->
      <div class="space-y-6 max-w-4xl mx-auto relative">
        <!-- Vertical connecting line -->
        <div class="absolute top-0 bottom-0 left-7 w-[1px] bg-cyber-purple/30 hidden sm:block shadow-[0_0_5px_rgba(183,33,255,0.5)]"></div>

        <div
          v-for="(pub, index) in publications"
          :key="pub.title"
          class="bg-cyber-panel border border-cyber-purple/40 p-6 md:p-8 hover:border-cyber-cyan transition-all duration-300 animate-fade-in-up relative group shadow-[0_0_10px_rgba(183,33,255,0.1)] hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Stylized Corner Accent -->
          <div class="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div class="flex gap-6 sm:gap-10 relative relative z-10">
            <!-- Index Number -->
            <div class="hidden sm:flex flex-shrink-0 w-14 h-14 bg-cyber-bg border border-cyber-cyan items-center justify-center relative z-10 shadow-[0_0_15px_rgba(0,243,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] transition-shadow duration-300">
              <span class="absolute -top-1 -right-1 w-2 h-2 bg-cyber-pink animate-pulse"></span>
              <span class="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyber-cyan to-cyber-purple drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
            </div>

            <div class="flex-1 space-y-4">
              <!-- Title -->
              <h3 class="text-lg font-display font-bold text-white group-hover:text-cyber-cyan transition-colors duration-300 leading-snug drop-shadow-[0_0_2px_rgba(0,0,0,1)] uppercase tracking-wide">
                {{ pub.title }}
              </h3>

              <!-- Meta -->
              <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 uppercase tracking-widest">
                <span class="flex items-center gap-2">
                  <span class="text-cyber-purple">></span>
                  {{ pub.journal }}
                </span>
                <span class="text-cyber-purple">|</span>
                <span class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ pub.year }}
                </span>
                <span class="text-cyber-purple">|</span>
                <span
                  class="inline-flex items-center gap-1 px-2 py-0.5 border"
                  :class="pub.status === 'Published'
                    ? 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/50 shadow-[0_0_5px_rgba(0,243,255,0.2)]'
                    : 'bg-yellow-900/20 text-yellow-400 border-yellow-500/50'"
                >
                  <span v-if="pub.status === 'Published'" class="w-1.5 h-1.5 bg-cyber-cyan animate-pulse"></span>
                  {{ pub.status }}
                </span>
              </div>

              <!-- Authors -->
              <p class="text-sm font-mono text-gray-400 bg-cyber-bg/50 border-l border-cyber-purple/50 pl-3 py-1">
                <span class="text-cyber-purple">AUTHORS:</span> {{ pub.authors }}
              </p>

              <!-- Abstract -->
              <p class="text-sm font-mono text-gray-500 leading-relaxed text-justify">> {{ pub.abstract }}</p>

              <!-- Tags & Link -->
              <div class="flex items-center justify-between pt-4 mt-2 border-t border-cyber-purple/20">
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in pub.tags" :key="tag" class="px-1.5 py-0.5 text-[10px] font-mono uppercase border border-cyber-purple/30 text-cyber-purple bg-cyber-purple/5 hover:bg-cyber-purple/20 transition-colors cursor-default">
                    #{{ tag }}
                  </span>
                </div>

                <a
                  v-if="pub.doi"
                  :href="pub.doi"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-xs font-mono font-bold text-cyber-cyan hover:text-white transition-colors group/link drop-shadow-[0_0_5px_rgba(0,243,255,0.5)] border border-cyber-cyan/50 px-3 py-1.5 hover:bg-cyber-cyan/20"
                >
                  <span class="blink">READ_DOCUMENT</span>
                  <svg class="w-4 h-4 group-hover/link:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const publications = [
  {
    title: 'Analisis Pengujian Pengembangan Sistem Informasi Geografis Daerah Rawan Rob Di Kota Pekalongan',
    journal: 'Jurnal Sains Komputer & Informatika (J-SAKTI)',
    year: 'Maret 2023',
    status: 'Published',
    authors: 'Mohammad Rasas Aufar, Pradana Ananda Raharja',
    abstract: 'Penelitian ini menerapkan metode Agile dalam mendesain Sistem Informasi Geografis (SIG) untuk memetakan kawasan rawan bencana banjir rob di pesisir utara Kota Pekalongan. Integrasi teknologi SIG dirancang untuk memberikan kemudahan dalam mengidentifikasi tingkat kerentanan wilayah dan menyajikan data ancaman gelombang pasang kepada masyarakat maupun pihak terkait secara visual dan akurat.',
    tags: ['Sistem Informasi Geografis', 'Agile Method', 'Banjir Rob', 'Pemetaan Wilayah'],
    doi: 'https://garuda.kemdiktisaintek.go.id/documents/detail/3418708',
  },
]
</script>
