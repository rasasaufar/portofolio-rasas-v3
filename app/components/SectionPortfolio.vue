<template>
  <section id="portfolio" class="py-24 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <span class="badge mb-4"><span class="text-cyber-cyan mr-2">></span>DATABASE</span>
        <h2 class="section-title">Work and Experience</h2>
        <p class="section-subtitle">Professional experiences and projects that showcase my skills</p>
      </div>

      <!-- Tab Switcher -->
      <div class="flex justify-center mb-12 animate-on-scroll">
        <div class="inline-flex p-1 bg-cyber-panel border border-cyber-purple/50 shadow-[0_0_15px_rgba(183,33,255,0.2)]">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="px-6 py-2.5 font-mono uppercase text-sm tracking-widest transition-all duration-300 border border-transparent"
            :class="activeTab === tab.id
              ? 'bg-cyber-purple/20 text-cyber-cyan border-cyber-cyan shadow-[0_0_10px_rgba(0,243,255,0.3)] inset-0'
              : 'text-gray-500 hover:text-cyber-purple hover:bg-cyber-purple/5'"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Work Experience -->
      <!-- Experience Tab -->
      <div v-if="activeTab === 'experience'" class="space-y-8">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.company"
            class="bg-cyber-panel border border-cyber-purple/40 p-6 md:p-8 hover:border-cyber-cyan transition-all duration-300 animate-fade-in-up relative overflow-hidden group/card shadow-[0_0_10px_rgba(183,33,255,0.1)] hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Decorative border accent -->
            <div class="absolute top-0 left-0 w-1 h-full bg-cyber-purple group-hover/card:bg-cyber-cyan transition-colors duration-300 shadow-[0_0_10px_currentColor]"></div>

            <div class="flex flex-col md:flex-row gap-6">
              <!-- Company Info -->
              <div class="md:w-1/3 space-y-3">
                <div v-if="exp.logo" class="w-16 h-16 bg-white border border-cyber-cyan flex items-center justify-center p-2 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                  <img :src="exp.logo" :alt="exp.company" class="w-full h-full object-contain filter grayscale group-hover/card:grayscale-0 transition-all duration-500" />
                </div>
                <div v-else class="w-16 h-16 bg-cyber-purple/10 border border-cyber-purple flex items-center justify-center text-cyber-cyan drop-shadow-[0_0_5px_currentColor]">
                  <span class="text-2xl">{{ exp.emoji }}</span>
                </div>
                <h3 class="text-lg font-display font-bold text-white uppercase tracking-wider drop-shadow-[0_0_2px_rgba(0,0,0,1)] group-hover/card:text-cyber-cyan transition-colors">{{ exp.company }}</h3>
                <p class="text-sm font-mono text-cyber-purple uppercase tracking-widest">> {{ exp.position }}</p>
                <p class="text-xs font-mono text-gray-500 uppercase tracking-widest pl-3 border-l-2 border-cyber-cyan/30">[{{ exp.period }}]</p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span v-for="tech in exp.tech" :key="tech" class="px-2 py-0.5 text-[10px] font-mono uppercase border border-cyber-purple/50 text-cyber-cyan bg-cyber-purple/10 shadow-[0_0_5px_rgba(183,33,255,0.2)]">
                    #{{ tech }}
                  </span>
                </div>
              </div>

              <!-- Description & Gallery -->
              <div class="md:w-2/3 space-y-4">
                <p class="font-mono text-sm text-gray-400 leading-relaxed bg-cyber-bg/50 border border-cyber-surface p-4 border-l-2 border-l-cyber-purple shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">{{ exp.description }}</p>

                <ul class="space-y-2 mt-4 font-mono text-sm">
                  <li v-for="resp in exp.responsibilities" :key="resp" class="flex items-start gap-2 text-gray-500 group-hover/card:text-gray-400 transition-colors">
                    <span class="text-cyber-cyan mt-0.5 flex-shrink-0">></span>
                    {{ resp }}
                  </li>
                </ul>

                <!-- Gallery -->
                <div v-if="exp.gallery && exp.gallery.length > 0" class="pt-4 mt-4 border-t border-cyber-purple/20">
                  <p class="text-[10px] font-mono text-cyber-purple uppercase tracking-widest mb-3 blink">>> ATTACHED_MEDIA</p>
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div
                      v-for="(img, imgIndex) in exp.gallery"
                      :key="imgIndex"
                      class="relative aspect-video overflow-hidden border border-cyber-cyan/30 hover:border-cyber-cyan transition-all duration-300 group cursor-pointer shadow-[0_0_5px_rgba(0,243,255,0.1)] hover:shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                      @click="openGallery(index, imgIndex)"
                    >
                      <img v-if="img.image" :src="img.image" :alt="img.caption" class="w-full h-full object-cover filter brightness-75 group-hover:brightness-110 saturate-50 group-hover:saturate-150 transition-all duration-500" />
                      <div v-else class="w-full h-full bg-cyber-purple/10 flex items-center justify-center text-cyber-cyan group-hover:text-white transition-colors duration-300">
                        <span class="text-3xl drop-shadow-[0_0_5px_currentColor]">{{ img.emoji }}</span>
                      </div>
                      <div class="absolute inset-0 bg-cyber-bg/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                        <svg class="w-6 h-6 text-cyber-cyan mb-1 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        <p class="text-cyber-cyan font-mono text-[10px] uppercase font-bold px-3 text-center drop-shadow-[0_0_5px_currentColor]">{{ img.caption }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects Tab -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="project.name"
            class="bg-cyber-panel border border-cyber-purple/40 hover:border-cyber-cyan transition-all duration-500 hover:-translate-y-2 animate-fade-in-up relative overflow-hidden group shadow-[0_0_10px_rgba(183,33,255,0.1)] hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] flex flex-col"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Project Thumbnail -->
            <div class="aspect-video bg-cyber-bg border-b border-cyber-purple/30 flex items-center justify-center relative overflow-hidden">
              <img v-if="project.image" :src="project.image" :alt="project.name" class="w-full h-full object-cover filter brightness-75 saturate-50 group-hover:brightness-100 group-hover:saturate-150 transition-all duration-500" />
              <span v-else class="text-5xl group-hover:scale-125 transition-transform duration-500 text-transparent drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]">{{ project.emoji }}</span>
              <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
              <div class="absolute inset-0 bg-cyber-purple/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300"></div>
            </div>

            <div class="p-6 space-y-4 flex-1 flex flex-col">
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-display font-bold text-white uppercase tracking-wider group-hover:text-cyber-cyan transition-colors drop-shadow-[0_0_2px_rgba(0,0,0,1)]">{{ project.name }}</h3>
                <span class="px-2 py-0.5 text-[10px] font-mono border border-cyber-pink text-cyber-pink bg-cyber-pink/10 shadow-[0_0_5px_rgba(255,0,85,0.3)] whitespace-nowrap uppercase tracking-widest">{{ project.type }}</span>
              </div>

              <p class="text-sm font-mono text-gray-400 leading-relaxed flex-1 border-l sm border-cyber-surface pl-2">> {{ project.description }}</p>

              <div class="flex flex-wrap gap-2 pt-2">
                <span v-for="tech in project.tech" :key="tech" class="text-[10px] font-mono uppercase text-cyber-purple border border-cyber-purple/30 px-1.5 py-0.5">
                  #{{ tech }}
                </span>
              </div>

              <div class="flex gap-4 pt-4 mt-auto border-t border-cyber-purple/20">
                <a v-if="project.demo" :href="project.demo" target="_blank" class="text-xs font-mono font-bold text-cyber-cyan hover:text-white transition-colors flex items-center gap-2 group/link drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">
                  <svg class="w-4 h-4 group-hover/link:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  EXECUTE
                </a>
                <a v-if="project.github" :href="project.github" target="_blank" class="text-xs font-mono font-bold text-gray-500 hover:text-cyber-purple transition-colors flex items-center gap-2 group/link">
                  <svg class="w-4 h-4 group-hover/link:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  SOURCE
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>

    <!-- Gallery Popup Modal -->
    <Teleport to="body">
      <Transition name="gallery-modal">
        <div
          v-if="galleryOpen"
          class="fixed inset-0 z-[9999] flex items-center justify-center"
          @click.self="closeGallery"
          @keydown.escape="closeGallery"
          @keydown.left="prevImage"
          @keydown.right="nextImage"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-cyber-bg/95 backdrop-blur-md" @click="closeGallery">
            <div class="absolute inset-0 bg-[linear-gradient(rgba(183,33,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(183,33,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>
          </div>

          <!-- Modal Content -->
          <div class="relative z-10 w-full max-w-4xl mx-4 sm:mx-8">
            <!-- Close Button -->
            <button
              class="absolute -top-12 right-0 sm:-right-2 w-10 h-10 border border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,85,0.8)] z-50"
              @click="closeGallery"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Image Container -->
            <div class="relative overflow-hidden bg-cyber-bg border border-cyber-cyan shadow-[0_0_50px_rgba(0,243,255,0.2)]">
              <!-- Grid Overlay -->
              <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-10 mix-blend-overlay"></div>
              
              <!-- Image Display -->
              <div class="aspect-video flex items-center justify-center relative">
                <Transition :name="slideDirection" mode="out-in">
                  <div
                    :key="currentImageIndex"
                    class="w-full h-full flex flex-col items-center justify-center"
                    :class="currentGalleryImage?.image ? '' : 'bg-cyber-purple/10'"
                  >
                    <img v-if="currentGalleryImage?.image" :src="currentGalleryImage.image" :alt="currentGalleryImage.caption" class="w-full h-full object-contain bg-black" />
                    <span v-else class="text-7xl sm:text-8xl mb-4 drop-shadow-[0_0_15px_rgba(0,243,255,0.8)] animate-pulse">{{ currentGalleryImage?.emoji }}</span>
                  </div>
                </Transition>
              </div>

              <!-- Bottom Info Bar -->
              <div class="px-6 py-4 bg-cyber-panel border-t border-cyber-cyan/30 relative z-20">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1 min-w-0">
                    <p class="text-cyber-cyan font-display font-bold uppercase tracking-widest text-lg drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">{{ currentGalleryImage?.caption }}</p>
                    <p class="text-cyber-purple font-mono text-xs uppercase tracking-widest mt-1">> {{ currentExperienceCompany }}</p>
                  </div>
                  <div class="flex items-center gap-2 mt-1">
                    <span
                      v-for="(_, dotIndex) in currentGallery"
                      :key="dotIndex"
                      class="w-2 h-2 transition-all duration-300"
                      :class="dotIndex === currentImageIndex
                        ? 'bg-cyber-cyan scale-125 shadow-[0_0_8px_rgba(0,243,255,1)]'
                        : 'bg-cyber-purple/30 border border-cyber-purple/50'"
                    ></span>
                  </div>
                </div>
                <p v-if="currentGalleryImage?.description" class="text-gray-400 font-mono text-sm mt-3 leading-relaxed border-l-2 border-cyber-purple/50 pl-3">
                  {{ currentGalleryImage.description }}
                </p>
              </div>
            </div>

            <!-- Navigation Arrows -->
            <button
              v-if="currentGallery && currentGallery.length > 1"
              class="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 border border-cyber-cyan text-cyber-cyan bg-cyber-bg hover:bg-cyber-cyan hover:text-black flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] z-20"
              @click="prevImage"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              v-if="currentGallery && currentGallery.length > 1"
              class="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 border border-cyber-cyan text-cyber-cyan bg-cyber-bg hover:bg-cyber-cyan hover:text-black flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] z-20"
              @click="nextImage"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Counter -->
            <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 text-cyber-pink font-mono text-sm font-bold tracking-widest drop-shadow-[0_0_5px_rgba(255,0,85,0.5)]">
              [ {{ currentImageIndex + 1 }} / {{ currentGallery?.length || 0 }} ]
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const activeTab = ref('experience')

// Gallery popup state
const galleryOpen = ref(false)
const currentExperienceIndex = ref(0)
const currentImageIndex = ref(0)
const slideDirection = ref('slide-right')

const currentGallery = computed(() => {
  if (currentExperienceIndex.value >= 0 && currentExperienceIndex.value < experiences.length) {
    return experiences[currentExperienceIndex.value]!.gallery
  }
  return []
})

const currentGalleryImage = computed(() => {
  if (currentGallery.value && currentImageIndex.value >= 0 && currentImageIndex.value < currentGallery.value.length) {
    return currentGallery.value[currentImageIndex.value]
  }
  return null
})

const currentExperienceCompany = computed(() => {
  if (currentExperienceIndex.value >= 0 && currentExperienceIndex.value < experiences.length) {
    return experiences[currentExperienceIndex.value]!.company
  }
  return ''
})

function openGallery(expIndex: number, imgIndex: number) {
  currentExperienceIndex.value = expIndex
  currentImageIndex.value = imgIndex
  galleryOpen.value = true
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    window.addEventListener('keydown', handleKeydown)
  })
}

function closeGallery() {
  galleryOpen.value = false
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
}

function prevImage() {
  if (currentGallery.value && currentGallery.value.length > 1) {
    slideDirection.value = 'slide-left'
    currentImageIndex.value = currentImageIndex.value <= 0
      ? currentGallery.value.length - 1
      : currentImageIndex.value - 1
  }
}

function nextImage() {
  if (currentGallery.value && currentGallery.value.length > 1) {
    slideDirection.value = 'slide-right'
    currentImageIndex.value = currentImageIndex.value >= currentGallery.value.length - 1
      ? 0
      : currentImageIndex.value + 1
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeGallery()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

const tabs = [
  { id: 'experience', label: '💼 Work Experience' },
  { id: 'projects', label: '🚀 Projects' },
]

const experiences = [
  {
    company: 'PT. Traspac Makmur Sejahtera',
    position: 'IT Implementation',
    period: 'Aug 2024 - Present',
    emoji: '🏢',
    logo: 'https://karir.traspac.id/assets/img/logotraspac.png',
    description: 'Menjadi IT Implementor, IT Infrastructure dan Data Analis. Menghandle beberapa project di Kementerian dan Militer.',
    responsibilities: [
      'Kemenlu RI — Bekerja onsite bersama Subdit SISTIK Direktorat PWNI, memberikan dukungan teknis pengembangan situs web "Safe Travel" dan manajemen infrastruktur server "Portal Peduli WNI" menggunakan Ubuntu',
      'Kemenlu RI — Menyiapkan dokumentasi teknis bulanan (laporan pemeliharaan, analisis bug, panduan pemecahan masalah, dan manajemen permintaan perubahan)',
      'Mabes TNI — Mengelola operasi basis data penting, termasuk pencadangan dan pemulihan rutin di lingkungan produksi untuk memastikan integritas data',
      'Mabes TNI — Menerapkan penerapan aplikasi Sisfopajak pada infrastruktur server fisik serta melakukan pengujian fungsional dan verifikasi komprehensif pasca-penerapan',
      'Mabes TNI — Menjadi Presenter Pelatihan Aplikasi Sistem Data Alutsista dan Pendukungnya di Mabes TNI, Mabes AL, dan Pusdatin Kementerian Pertahanan',
      'Kementerian Hilirisasi dan Investasi — Mengelola Sistem Presensi di Kepegawaian BKPM',
    ],
    tech: ['Ubuntu', 'Server Infrastructure', 'Database Management', 'Application Deployment'],
    gallery: [
      { image: '/images/gallery/traspac-kemenlu.png', emoji: '', caption: 'Kementerian Luar Negeri RI', description: 'Kegiatan dukungan teknis dan bimbingan teknis bersama Subdit SISTIK Direktorat PWNI di Kementerian Luar Negeri Republik Indonesia.' },
      { image: '/images/gallery/traspac-kemhan.png', emoji: '', caption: 'Pusdatin Kemhan RI', description: 'Menjadi presenter pelatihan aplikasi Sistem Data Alutsista dan Pendukungnya di Pusat Data dan Informasi Kementerian Pertahanan Republik Indonesia.' },
    ],
  },
  {
    company: 'PT. Metro Network Solutions',
    position: 'Operator Scanner',
    period: 'Sep 2023 - Dec 2023',
    emoji: '🖨️',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQHq1FwKfCDJZA/company-logo_200_200/company-logo_200_200/0/1667985560103/pt_metronet_logo?e=2147483647&v=beta&t=gsRuAkezzvj65j2AGShob4KmQDCnAjpuGbO4YH5xGZE',
    description: 'Menjadi bagian dari tim pelaksana proyek Digitalisasi Arsip di Badan Pertanahan Nasional (BPN) Kota Pekalongan untuk mendukung transformasi data fisik ke digital.',
    responsibilities: [
      'Bekerja pada proyek Digitalisasi di Kantor Badan Pertanahan Nasional (BPN) Kota Pekalongan',
      'Menyortir dan merapikan berbagai album dan dokumen fisik dengan teliti sebelum proses digitalisasi',
      'Melakukan pemindaian (scanning) dokumen dalam jumlah besar per harinya untuk persiapan pengarsipan',
      'Mengedit dan mengoptimalkan hasil scan menggunakan perangkat lunak NAPS2 agar tajam, lurus, dan mudah dibaca',
      'Bekerja dengan disiplin tinggi di bawah tekanan untuk selalu mencapai target pemindaian maupun tenggat waktu',
      'Menjaga kelengkapan, kerahasiaan, dan integritas dokumen-dokumen tanah yang bernilai tinggi selama project berlangsung',
    ],
    tech: ['NAPS2', 'Document Editing', 'Data Management', 'Scanner Handling'],
    gallery: [
      { image: '/images/gallery/bpn-closing.jpeg', emoji: '📸', caption: 'Penutupan Project', description: 'Momen kebersamaan foto dengan seluruh tim pelaksana pada penghujung masa proyek Digitalisasi Arsip BPN Kota Pekalongan setelah berhasil menyelesaikan seluruh target pemindaian.' },
    ],
  },
  {
    company: 'Niagahoster - Web Hosting Unlimited Indonesia',
    position: 'Project-Based Virtual Intern : UI / UX Designer',
    period: 'Jul 2023 - Aug 2023',
    emoji: '🌐',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYFavWOvYAbq_z018Y5-cZNuutUC_256vVw&s',
    description: 'Project-Based Virtual Internship bersama Rakamin Academy (Niagahoster x Rakamin Academy).',
    responsibilities: [
      'Menyelesaikan berbagai tugas yang berkaitan dengan aktivitas UI/UX Designer dari Niagahoster',
      'Merancang antarmuka pengguna (User Interface) dan pengalaman pengguna (User Experience)',
      'Membuat wireframe dan prototipe interaktif untuk memvisualisasikan alur penggunaan (seperti Checkout Flow)',
    ],
    tech: ['User Experience (UX)', 'Prototyping', 'User Interface', 'Wireframing'],
    gallery: [
      { image: '/images/gallery/Niagahoster.png', emoji: '🛒', caption: 'Checkout Flow', description: 'Hasil desain alur antarmuka pengguna (Checkout Flow) website Niagahoster yang dirancang ulang untuk memberikan pengalaman berbelanja dan pembayaran yang aman, mudah dicerna, dan efisien bagi pengguna.' },
      { image: '/images/gallery/5.png', emoji: '📜', caption: 'Certificate of Completion', description: 'Sertifikat kelulusan resmi yang memvalidasi pencapaian, keberhasilan, serta pengembangan keterampilan esensial sebagai UI/UX Designer selama program Virtual Internship.' },
    ],
  },
  {
    company: 'Nuri',
    position: 'Project-Based Virtual Intern : UI / UX Designer',
    period: 'Jul 2023 - Aug 2023',
    emoji: '🦜',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW4zjU4gLFxMQ7K2mBzwpxOHJId1nbb28LA&s',
    description: 'Project-Based Virtual Internship bersama Rakamin Academy (Nuri x Rakamin Academy).',
    responsibilities: [
      'Menyelesaikan berbagai tugas proyek yang berkaitan dengan peran UI/UX Designer di Nuri',
      'Mengerjakan solusi desain dari mulai riset hingga pembuatan User Interface dan User Experience',
      'Melakukan perancangan wireframe dasar hingga high-fidelity prototype',
    ],
    tech: ['User Experience (UX)', 'Prototyping', 'User Interface', 'Wireframing'],
    gallery: [
      { image: '/images/gallery/Nuri.png', emoji: '📱', caption: 'Final Task Nuri', description: 'Hasil proyek akhir yang difokuskan pada perancangan antarmuka pengguna untuk fitur COD di platform e-commerce Nuri.' },
      { image: '/images/gallery/6.png', emoji: '📜', caption: 'Certificate of Completion', description: 'Sertifikat kelulusan resmi dari program Virtual Internship Nuri x Rakamin Academy.' },
    ],
  },
  {
    company: 'Dinas Komunikasi dan Informatika Kab. Pekalongan',
    position: 'Student Internship',
    period: 'Sep 2021 - Oct 2021',
    emoji: '🏢',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Lambang_Kabupaten_Pekalongan.JPG',
    description: 'Menjalani masa magang dengan fokus pada desain antarmuka dan pengembangan sistem pendukung untuk wilayah lokal.',
    responsibilities: [
      'Membuat rancangan UI/UX dari aplikasi e-commerce yang ditujukan untuk memajukan UMKM di Kabupaten Pekalongan',
      'Mempelajari berbagai keterampilan (skills) baru dan langsung mengimplementasikannya pada tugas sehari-hari untuk meningkatkan efisiensi dan produktivitas',
      'Berpartisipasi aktif dalam lingkungan kerja instansi, membantu rekan tim, serta melakukan kolaborasi yang relevan dengan kebutuhan pengguna',
    ],
    tech: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
    gallery: [
      { image: '/images/gallery/dinkominfo.jpg', emoji: '🏢', caption: 'Gedung Dinkominfo', description: 'Gedung Dinas Komunikasi dan Informatika Kabupaten Pekalongan tempat saya melaksanakan program magang.' },
      { image: '/images/gallery/Magang.png', emoji: '🎨', caption: 'E-Commerce UMKM', description: 'Desain UI/UX (user interface & user experience) untuk platform e-commerce yang dirancang agar terjangkau dan mudah digunakan oleh pelaku UMKM.' },
    ],
  },
]

const projects = [
  {
    name: 'Fake Project',
    type: 'Landing Page',
    emoji: '🍱',
    description: 'Membuat Landing Page Website Restaurant',
    tech: ['UI/UX Design', 'Figma'],
    demo: 'https://drive.google.com/file/d/1hqhdVyanQeePJewHR8PJ9kK07BdrkfOJ/view?usp=sharing',
    github: '',
    image: '/images/portfolio/Aarss.png',
  },
  {
    name: 'Final Project Redesign Maxim',
    type: 'Redesign App',
    emoji: '🚕',
    description: 'Redesign Aplikasi Maxim dan menambahkan fitur Top Up dan Pembayaran',
    tech: ['UI/UX Design', 'Figma', 'Prototyping'],
    demo: 'https://drive.google.com/file/d/14rentR_FyblFyTi5F63m0UeVRDSomjyJ/view?usp=sharing',
    github: '',
    image: '/images/portfolio/Maxim.png',
  },
  {
    name: 'Final Task Nuri x Rakamin Academy',
    type: 'Feature Design',
    emoji: '🛍️',
    description: 'Menambahkan fitur Cash On Delivery (COD) pada aplikasi e-commerce',
    tech: ['UI/UX Design', 'Figma'],
    demo: 'https://drive.google.com/file/d/1GoF12FssWWEjVzu2kExP58ZMcDjMV4zG/view?usp=sharing',
    github: '',
    image: '/images/portfolio/Nuri.png',
  },
  {
    name: 'Final Task Niagahoster x Rakamin Academy',
    type: 'Web Design',
    emoji: '🌐',
    description: 'Membuat Checkout Flow pada website Niagahoster',
    tech: ['UI/UX Design', 'Figma'],
    demo: 'https://drive.google.com/file/d/1GdUdGYV2Tg1zPnZXwADqJSzOUguJFTPj/view?usp=sharing',
    github: '',
    image: '/images/portfolio/Niagahoster.png',
  },
  {
    name: 'Aplikasi Belanja UMKM Di Kajen',
    type: 'App Design',
    emoji: '🏪',
    description: 'Membuat UI Design Aplikasi Belanja untuk UMKM di Kajen, Kabupaten Pekalongan',
    tech: ['UI/UX Design', 'Figma'],
    demo: 'https://bit.ly/ProtoypeMagang',
    github: '',
    image: '/images/portfolio/Magang.png',
  },
  {
    name: 'Mini Task di Short Class @myskill.id',
    type: 'Mini Task',
    emoji: '📝',
    description: 'Mengerjakan Task yang diberikan pada saat mini task',
    tech: ['UI/UX Design', 'Figma'],
    demo: 'https://www.figma.com/proto/LsBpusfnm1lkL8gUjjGSLR/MiniTask---MySkill?page-id=0%3A1&type=design&node-id=2-541&viewport=609%2C593%2C0.36&t=Fq9mTWEDSw0SxcEg-1&scaling=scale-down&starting-point-node-id=2%3A541&mode=design',
    github: '',
    image: '/images/portfolio/Minitask.png',
  },
]
</script>

<style scoped>
/* Gallery Modal Transitions */
.gallery-modal-enter-active,
.gallery-modal-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-modal-enter-from,
.gallery-modal-leave-to {
  opacity: 0;
}

.gallery-modal-enter-from .relative.z-10,
.gallery-modal-leave-to .relative.z-10 {
  transform: scale(0.9) translateY(20px);
}

.gallery-modal-enter-active .relative.z-10,
.gallery-modal-leave-active .relative.z-10 {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Slide Transitions */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(60px) scale(0.95);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-60px) scale(0.95);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-60px) scale(0.95);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(60px) scale(0.95);
}

/* Slow bounce animation for emoji */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>
