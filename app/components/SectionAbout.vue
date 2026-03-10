<template>
  <section id="about" class="py-24 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <span class="badge mb-4"><span class="text-cyber-cyan mr-2">></span>Whois</span>
        <h2 class="section-title">Get To Know Me</h2>
        <p class="section-subtitle">A brief overview of who I am and what I do</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <!-- Profile Summary -->
        <div class="lg:col-span-3 animate-on-scroll">
          <div class="bg-cyber-panel border border-cyber-purple/50 p-8 space-y-6 h-full shadow-[0_0_15px_rgba(183,33,255,0.1)] relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-cyber-purple/10 blur-3xl rounded-full group-hover:bg-cyber-purple/20 transition-colors duration-500"></div>
            
            <h3 class="text-xl font-display font-bold text-white flex items-center gap-3 uppercase tracking-wider relative z-10">
              <span class="w-8 h-8 bg-cyber-purple/20 border border-cyber-purple flex items-center justify-center">
                <svg class="w-4 h-4 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Who I Am
            </h3>

            <div class="space-y-4 font-mono text-sm text-gray-300 leading-relaxed relative z-10">
              <p>
                > A Computer Science graduate currently pursuing a career as an IT Implementor with specialized capabilities in IT Infrastructure and Data Analysis. Possesses a robust technical foundation in integrating technology solutions, ensuring systems align with operational requirements, and leveraging data-driven insights to support strategic decision-making.
              </p>
              <p>
                > Demonstrates a solid track record in managing large-scale projects within the public sector and government institutions. Experience spans across Linux-based server infrastructure management (Ubuntu), complex database operations, and comprehensive application deployment and functional testing. Proven ability to oversee the end-to-end implementation of information systems, including the management of digital attendance systems and institutional learning platforms.
              </p>
              <p>
                > Beyond technical proficiency, exhibits strong managerial skills through the systematic and accurate preparation of monthly technical documentation. Experienced in leading technical guidance sessions and user training programs, ensuring seamless technology transfer and ensuring that applications are utilized optimally by all stakeholders.
              </p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 pt-6 relative z-10">
              <div v-for="stat in stats" :key="stat.label" class="text-center p-3 border border-cyber-cyan/30 bg-cyber-bg/50 hover:border-cyber-cyan hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all duration-300">
                <p class="text-2xl font-display font-bold text-cyber-cyan drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">
                  {{ stat.value }}
                </p>
                <p class="text-xs font-mono text-gray-400 mt-1 uppercase tracking-widest">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Me -->
        <div class="lg:col-span-2 animate-on-scroll" style="animation-delay: 0.2s">
          <div class="bg-cyber-panel border border-cyber-cyan/50 p-8 space-y-6 h-full shadow-[0_0_15px_rgba(0,243,255,0.1)] relative overflow-hidden group">
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-cyber-cyan/10 blur-3xl rounded-full group-hover:bg-cyber-cyan/20 transition-colors duration-500"></div>

            <h3 class="text-xl font-display font-bold text-white flex items-center gap-3 uppercase tracking-wider relative z-10">
              <span class="w-8 h-8 bg-cyber-cyan/20 border border-cyber-cyan flex items-center justify-center">
                <svg class="w-4 h-4 text-cyber-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Contact Me
            </h3>

            <p class="text-gray-400 font-mono text-xs uppercase tracking-widest relative z-10">
              > Open Communications Channel...
            </p>

            <div class="space-y-3 relative z-10">
              <a
                v-for="contact in contacts"
                :key="contact.name"
                :href="contact.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-4 border border-cyber-purple/30 bg-cyber-bg/50 hover:bg-cyber-purple/10 hover:border-cyber-purple hover:-translate-x-1 hover:shadow-[0_0_15px_rgba(183,33,255,0.2)] transition-all duration-300 group/contact"
              >
                <div
                  class="w-10 h-10 flex items-center justify-center border border-transparent group-hover/contact:border-cyber-cyan transition-colors duration-300"
                >
                  <span v-html="contact.icon" class="w-5 h-5 text-cyber-cyan drop-shadow-[0_0_5px_currentColor]"></span>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-display font-bold uppercase tracking-widest text-gray-300 group-hover/contact:text-cyber-cyan transition-colors">{{ contact.name }}</p>
                  <p class="text-xs font-mono text-gray-500">{{ contact.handle }}</p>
                </div>
                <svg class="w-4 h-4 text-gray-600 group-hover/contact:text-cyber-cyan group-hover/contact:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="mt-12 animate-on-scroll" style="animation-delay: 0.3s">
        <div class="bg-cyber-panel border border-cyber-purple/50 p-8 shadow-[0_0_15px_rgba(183,33,255,0.1)] relative overflow-hidden">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(183,33,255,0.02)_10px,rgba(183,33,255,0.02)_20px)] pointer-events-none"></div>
          
          <h3 class="text-xl font-display font-bold text-white flex items-center gap-3 mb-8 uppercase tracking-wider relative z-10">
            <span class="w-8 h-8 bg-cyber-purple/20 border border-cyber-purple flex items-center justify-center">
              <svg class="w-4 h-4 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </span>
            Training & Education
          </h3>

          <div class="relative z-10">
            <div class="space-y-8">
              <div
                v-for="(edu, index) in education"
                :key="edu.institution"
                class="relative pl-[4.5rem] group"
              >
                <!-- Timeline Line (only if not last item) -->
                <div v-if="index !== education.length - 1" class="absolute left-[27px] top-14 -bottom-10 w-px bg-cyber-purple/50 shadow-[0_0_5px_rgba(183,33,255,0.8)]"></div>

                <!-- Timeline Dot -->
                <div class="absolute left-0 top-1 w-14 h-14 bg-cyber-bg border border-cyber-cyan flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] group-hover:scale-105 transition-all duration-300 z-10 overflow-hidden p-1.5">
                  <img :src="edu.logo" :alt="edu.institution" class="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>

                <!-- Education Card -->
                <div class="p-5 bg-cyber-bg/50 border border-cyber-purple/30 hover:bg-cyber-purple/10 hover:border-cyber-purple transition-all duration-300 group flex flex-col relative overflow-hidden">
                  <!-- Decorative corner mark -->
                  <div class="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h4 class="font-display font-bold uppercase tracking-wider text-white group-hover:text-cyber-cyan transition-colors drop-shadow-[0_0_2px_rgba(0,0,0,1)]">{{ edu.degree }}</h4>
                      <p class="text-xs font-mono text-cyber-purple uppercase tracking-widest mt-1">> {{ edu.institution }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-3 flex-shrink-0">
                      <span v-if="edu.gpa" class="px-2 py-1 text-xs font-mono border border-cyber-purple text-cyber-cyan shadow-[0_0_5px_rgba(183,33,255,0.2)]">
                        GPA: {{ edu.gpa }}
                      </span>
                      <span class="text-xs font-mono text-gray-500 uppercase tracking-widest">[{{ edu.period }}]</span>
                    </div>
                  </div>

                  <p v-if="edu.description" class="text-xs font-mono text-gray-400 mt-4 leading-relaxed border-l-2 border-cyber-purple/30 pl-3">
                    {{ edu.description }}
                  </p>

                  <div v-if="edu.highlights && edu.highlights.length > 0" class="flex flex-wrap gap-2 mt-4">
                    <span
                      v-for="highlight in edu.highlights"
                      :key="highlight"
                      class="px-2 py-1 text-[10px] font-mono uppercase bg-transparent border border-cyber-cyan/30 text-cyber-cyan/80"
                    >
                      #{{ highlight }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '2+', label: 'Years Exp.' },
  { value: '5+', label: 'Projects' },
  { value: '1', label: 'Publications' },
]

const contacts = [
  {
    name: 'GitHub',
    handle: 'rasasaufar',
    url: 'https://github.com/rasasaufar',
    bgClass: 'bg-gradient-to-br from-gray-700 to-gray-900',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>',
  },
  {
    name: 'LinkedIn',
    handle: 'Rasas Aufar',
    url: 'https://www.linkedin.com/in/rasasaufar/',
    bgClass: 'bg-gradient-to-br from-blue-600 to-blue-700',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  },
  {
    name: 'WhatsApp',
    handle: '(+62) 85326775595',
    url: 'https://wa.me/085326775595',
    bgClass: 'bg-gradient-to-br from-green-500 to-green-600',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
  },
  {
    name: 'Email',
    handle: 'rasasaufar4@gmail.com',
    url: 'mailto:rasasaufar4@gmail.com',
    bgClass: 'bg-gradient-to-br from-red-500 to-red-600',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
  },
  {
    name: 'Instagram',
    handle: '@rasasaufar',
    url: 'https://instagram.com/rasasaufar',
    bgClass: 'bg-gradient-to-br from-purple-500 to-pink-500',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  },
]

const education = [
  {
    degree: 'Bachelor of Informatics Engineering',
    institution: 'Telkom University Purwokerto',
    period: '2018 - 2022',
    gpa: '3.23',
    logo: '/images/education/telkom-university-logo.webp',
    description: 'An ordinary college student who was quite active in university sports, particularly Badminton and Futsal, and managed to successfully graduate on time.',
    highlights: ['Graduated on Time'],
  },
  {
    degree: 'Senior High School - Science',
    institution: 'SMAN 4 Kota Pekalongan',
    period: '2015 - 2018',
    gpa: '92.5',
    logo: '/images/education/sman4-pekalongan-logo.jpg',
    description: 'Excelled in mathematics and science subjects. Participated in national olympiads and coding competitions.',
    highlights: ['National Science Olympiad', 'Student Council', 'Top 10 Graduate'],
  },
]
</script>
