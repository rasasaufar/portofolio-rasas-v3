<template>
  <section id="certificate" class="py-24 relative">
    <!-- Decorative background -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <span class="badge mb-4"><span class="text-cyber-cyan mr-2">></span>CREDENTIALS</span>
        <h2 class="section-title">Achievements and Certifications</h2>
        <p class="section-subtitle">Professional certifications and accomplishments I've earned</p>
      </div>

      <!-- Certificates Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(cert, index) in certificates"
          :key="cert.name"
          class="bg-cyber-panel border border-cyber-purple/40 hover:border-cyber-cyan transition-all duration-500 hover:-translate-y-2 animate-fade-in-up relative overflow-hidden group shadow-[0_0_10px_rgba(183,33,255,0.1)] hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] flex flex-col"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Stylized Corner Accent -->
          <div class="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden z-20">
            <div class="absolute top-0 right-0 w-16 h-[2px] bg-cyber-cyan origin-top-right rotate-45 transform translate-y-3 shadow-[0_0_5px_rgba(0,243,255,0.8)]"></div>
          </div>

          <!-- Certificate Visual -->
          <div class="relative h-44 overflow-hidden bg-cyber-bg border-b border-cyber-purple/30 group-hover:border-cyber-cyan/50 transition-colors duration-300">
            <!-- Decorative Pattern -->
            <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
            </div>
            
            <!-- Scanline Overlay -->
            <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50 z-10 mix-blend-overlay"></div>

            <!-- Soft Glowing Orbs -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyber-purple/20 rounded-full blur-2xl z-0 pointer-events-none group-hover:bg-cyber-cyan/20 transition-colors duration-500"></div>

            <!-- Certificate Icon / Logo -->
            <div class="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <div 
                class="flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative bg-black/50 p-2 rounded-lg border border-cyber-purple/30 shadow-[0_0_15px_rgba(183,33,255,0.2)] backdrop-blur-sm" 
                :class="cert.image ? 'w-24 h-24' : 'w-16 h-16'"
              >
                <img v-if="cert.image" :src="cert.image" :alt="cert.name" class="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 saturate-50 group-hover:saturate-150 transition-all duration-500" />
                <span v-else class="text-3xl drop-shadow-[0_0_5px_rgba(0,243,255,0.8)] group-hover:animate-pulse">{{ cert.emoji }}</span>
              </div>
            </div>

            <!-- Issue Date Badge -->
            <div class="absolute bottom-2 left-2 z-20 flex items-center gap-1.5 px-2 py-1 bg-cyber-bg/80 border border-cyber-purple/50 shadow-[0_0_5px_rgba(183,33,255,0.3)] backdrop-blur-md font-mono">
              <span class="text-[10px] text-cyber-cyan animate-pulse">●</span>
              <span class="text-[10px] font-bold text-gray-300 tracking-widest uppercase">{{ cert.year }}</span>
            </div>
          </div>

          <!-- Certificate Info -->
          <div class="p-6 flex-1 flex flex-col space-y-3">
            <h3 class="font-display font-bold text-white uppercase tracking-wider group-hover:text-cyber-cyan transition-colors duration-300 drop-shadow-[0_0_2px_rgba(0,0,0,1)] text-sm line-clamp-2" :title="cert.name">
              {{ cert.name }}
            </h3>
            
            <p class="text-xs font-mono text-cyber-purple uppercase tracking-widest flex items-center gap-2 border-l border-cyber-purple/50 pl-2">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {{ cert.issuer }}
            </p>
            
            <p class="text-xs font-mono text-gray-400 leading-relaxed flex-1">> {{ cert.description }}</p>

            <!-- Score Highlight -->
            <div v-if="cert.score" class="inline-flex mt-2">
              <div class="px-2 py-1 bg-cyber-pink/10 border border-cyber-pink/50 flex items-center gap-1.5 shadow-[0_0_5px_rgba(255,0,85,0.2)]">
                <span class="text-[10px] font-mono font-bold text-cyber-pink uppercase tracking-widest">SCORE: {{ cert.score }}</span>
              </div>
            </div>

            <!-- Skills Tags -->
            <div v-if="cert.skills && cert.skills.length > 0" class="flex flex-wrap gap-1.5 pt-2">
              <span v-for="skill in cert.skills" :key="skill" class="px-1.5 py-0.5 text-[9px] font-mono uppercase bg-cyber-purple/10 text-cyber-cyan border border-cyber-purple/40 shadow-[0_0_3px_rgba(183,33,255,0.2)] whitespace-nowrap">
                #{{ skill }}
              </span>
            </div>

            <div class="pt-4 mt-auto border-t border-cyber-purple/20 flex items-center justify-between gap-2">
              <div v-if="cert.id" class="flex items-center gap-1.5 min-w-0 font-mono" :title="`Credential ID: ${cert.id}`">
                <span class="text-cyber-purple text-[10px]">></span>
                <span class="text-[10px] text-gray-500 truncate uppercase">{{ cert.id }}</span>
              </div>
              <div v-else></div>
              <span
                class="inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest flex-shrink-0 border"
                :class="cert.verified ? 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/50 shadow-[0_0_5px_rgba(0,243,255,0.2)]' : 'bg-gray-800 text-gray-500 border-gray-700'"
              >
                <span v-if="cert.verified" class="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
                {{ cert.verified ? 'VERIFIED' : 'COMPLETED' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const certificates = [
  {
    name: 'Wawasan Karir dalam Bidang Data Analytics',
    issuer: 'Digital Talent Scholarship',
    year: 'Jul 2025',
    image: '/images/certificates/dts-logo.png',
    emoji: '📊',
    description: 'Pelatihan wawasan karir di bidang Data Analytics melalui program Digital Talent Scholarship.',
    id: '2299746850-4500',
    skills: ['Data Analytics', 'Data Visualization'],
    bgGradient: 'bg-gradient-to-br from-sky-400 to-blue-500',
    verified: true,
  },
  {
    name: 'Pengenalan Data Science dan Pemanfaatannya dalam Berbagai Sektor',
    issuer: 'Digital Talent Scholarship',
    year: 'Jul 2025',
    image: '/images/certificates/dts-logo.png',
    emoji: '🔬',
    description: 'Pelatihan pengenalan Data Science dan penerapannya di berbagai sektor industri melalui Digital Talent Scholarship.',
    id: '2299818850-4751',
    skills: ['Data Science', 'Data Analysis'],
    bgGradient: 'bg-gradient-to-br from-fuchsia-400 to-purple-500',
    verified: true,
  },
  {
    name: 'Keamanan IT: Pertahanan terhadap Kejahatan Digital',
    issuer: 'Coursera',
    year: 'Jul 2024',
    image: '/images/certificates/coursera-logo.png',
    emoji: '🔒',
    description: 'Kursus keamanan IT dari Google IT Support Specialization.',
    id: 'TDN7P3MAAEG7',
    skills: ['Cybersecurity', 'Encryption', 'Network Security'],
    bgGradient: 'bg-gradient-to-br from-red-400 to-rose-500',
    verified: true,
  },
  {
    name: 'Administrasi Sistem dan Layanan Infrastruktur TI',
    issuer: 'Coursera',
    year: 'Jul 2024',
    image: '/images/certificates/coursera-logo.png',
    emoji: '🖥️',
    description: 'Kursus administrasi sistem dari Google IT Support Specialization.',
    id: 'RC8NK9PBR5XG',
    skills: ['Server Management', 'Directory Services', 'IT Infrastructure'],
    bgGradient: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    verified: true,
  },
  {
    name: 'Sistem Operasi dan Anda: Menjadi Pengguna yang Berdaya',
    issuer: 'Coursera',
    year: 'Jul 2024',
    image: '/images/certificates/coursera-logo.png',
    emoji: '💻',
    description: 'Kursus tentang sistem operasi dari Google IT Support Specialization.',
    id: '7KU8JRMPQVHJ',
    skills: ['Windows', 'Linux', 'File Management', 'Command Line'],
    bgGradient: 'bg-gradient-to-br from-violet-400 to-purple-600',
    verified: true,
  },
  {
    name: 'Spesialisasi IT Support Google',
    issuer: 'Google',
    year: 'Jul 2024',
    image: '/images/certificates/google-logo.png',
    emoji: '🔧',
    description: 'Sertifikasi profesional dari Google yang mencakup berbagai keahlian IT.',
    id: 'YL552W7AGU2G',
    skills: ['Cloud Computing', 'Computer Networking', 'IT Security', 'System Administration', 'Troubleshooting', 'Operating Systems'],
    bgGradient: 'bg-gradient-to-br from-blue-400 to-cyan-500',
    verified: true,
  },
  {
    name: 'Seluk Beluk Jaringan Komputer',
    issuer: 'Coursera',
    year: 'Jun 2024',
    image: '/images/certificates/coursera-logo.png',
    emoji: '🌐',
    description: 'Kursus jaringan komputer dari Google IT Support Specialization.',
    id: '2FLPLT9K6MXS',
    skills: ['TCP/IP', 'DNS', 'DHCP', 'Network Troubleshooting'],
    bgGradient: 'bg-gradient-to-br from-teal-400 to-cyan-500',
    verified: true,
  },
  {
    name: 'Dasar-Dasar Dukungan Teknis',
    issuer: 'Coursera',
    year: 'Mei 2024',
    image: '/images/certificates/coursera-logo.png',
    emoji: '🛠️',
    description: 'Kursus dasar dukungan teknis dari Google IT Support Specialization.',
    id: '7C2ZULPDA5P6',
    skills: ['Troubleshooting', 'Customer Service', 'Operating Systems'],
    bgGradient: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    verified: true,
  },
  {
    name: 'TOEFL',
    issuer: 'Englishvit',
    year: 'Okt 2023',
    image: '/images/certificates/englishvit-logo.png',
    emoji: '📝',
    description: 'Sertifikat kemampuan bahasa Inggris melalui tes TOEFL online. Berlaku hingga Oktober 2025.',
    score: '542',
    id: 'EV/TO4/10/2023/0159',
    skills: ['English Proficiency', 'TOEFL'],
    bgGradient: 'bg-gradient-to-br from-emerald-400 to-green-500',
    verified: true,
  },
  {
    name: 'Certificate of Mastery UI-UX Research and Design: Fullstack Intensive Bootcamp',
    issuer: 'MySkill',
    year: 'Sep 2023',
    image: '/images/certificates/myskill-logo.png',
    emoji: '🏅',
    description: 'Sertifikat kelulusan bootcamp intensif UI-UX Research and Design Fullstack.',
    id: 'MS-1/9/2023-5qlzkE6XeBcbQREEVF0I',
    skills: ['User Interface', 'User Experience (UX)', 'Design Research'],
    bgGradient: 'bg-gradient-to-br from-amber-500 to-orange-600',
    verified: true,
  },
  {
    name: 'Certificate of Competencies - Nuri UI/UX Designer Virtual Internship',
    issuer: 'Nuri',
    year: 'Jul 2023',
    image: '/images/certificates/nuri-logo.png',
    emoji: '🦜',
    description: 'Sertifikat kompetensi UI/UX Designer melalui program virtual internship Nuri x Rakamin Academy.',
    id: '212536IAPMGIN2672023',
    skills: ['Sketching', 'Design Thinking', 'User Interface', 'User Experience', 'Prototyping'],
    bgGradient: 'bg-gradient-to-br from-green-400 to-emerald-500',
    verified: true,
  },
  {
    name: 'Figma For UI/UX Design',
    issuer: 'MySkill',
    year: 'Jul 2023',
    image: '/images/certificates/myskill-logo.png',
    emoji: '🖌️',
    description: 'Pelatihan desain UI/UX menggunakan Figma.',
    id: '48508/UIX/LM/07/2023',
    skills: ['Figma', 'User Interface Design'],
    bgGradient: 'bg-gradient-to-br from-purple-400 to-pink-500',
    verified: true,
  },
  {
    name: 'Fundamental UX Design',
    issuer: 'Coding Studio',
    year: 'Jul 2023',
    image: '/images/certificates/coding-studio-logo.png',
    emoji: '🧩',
    description: 'Pelatihan dasar User Experience Design.',
    id: '77DF6D121A-77F17BB889-75BB1E65BD',
    skills: ['User Experience (UX)', 'UX Research', 'UX Writing'],
    bgGradient: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    verified: true,
  },
  {
    name: 'Fundamental UI Design',
    issuer: 'Coding Studio',
    year: 'Jul 2023',
    image: '/images/certificates/coding-studio-logo.png',
    emoji: '🎯',
    description: 'Pelatihan dasar User Interface Design.',
    id: '77DF6D121A-75C17F8C7B-75BB1E65BD',
    skills: ['User Interface Design', 'Visual Design', 'Layout'],
    bgGradient: 'bg-gradient-to-br from-pink-400 to-rose-500',
    verified: true,
  },
  {
    name: 'Certificate of Competencies - Niagahoster UI/UX Designer Virtual Internship',
    issuer: 'Niagahoster - Web Hosting Unlimited Indonesia',
    year: 'Jul 2023',
    image: '/images/certificates/niagahoster-logo.png',
    emoji: '🎨',
    description: 'Sertifikat kompetensi UI/UX Designer melalui program virtual internship Niagahoster x Rakamin Academy.',
    id: '212536IAPMGIN3072023',
    skills: ['User Journeys', 'Process Design', 'UI Design', 'UX Research', 'Wireframing', 'Prototyping'],
    bgGradient: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    verified: true,
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Mei 2023',
    image: '/images/certificates/aws-cloud-practitioner.png',
    emoji: '☁️',
    description: 'Sertifikasi resmi AWS yang memvalidasi pemahaman dasar tentang layanan AWS Cloud, arsitektur, dan best practices. Berlaku hingga Mei 2026.',
    skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Security'],
    bgGradient: 'bg-gradient-to-br from-orange-400 to-yellow-500',
    verified: true,
  },
  {
    name: 'AWS Cloud Foundation',
    issuer: 'Digital Talent Scholarship',
    year: 'Mei 2023',
    image: '/images/certificates/dts-logo.png',
    emoji: '☁️',
    description: 'Sertifikat pelatihan melalui program beasiswa Digital Talent Scholarship oleh Kominfo.',
    id: '1955634840-1099/FGA/BLSDM.Kominfo/2023',
    skills: ['Cloud Computing'],
    bgGradient: 'bg-gradient-to-br from-amber-400 to-orange-500',
    verified: true,
  },
  {
    name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Mar 2023',
    image: '/images/certificates/aws-cloud-security.png',
    emoji: '🎓',
    description: 'Kelulusan program AWS Academy Cloud Foundations yang mencakup konsep dasar cloud, layanan inti AWS, keamanan, dan arsitektur.',
    skills: ['Cloud Foundations', 'AWS Core Services', 'Cloud Security'],
    bgGradient: 'bg-gradient-to-br from-yellow-400 to-amber-500',
    verified: true,
  },
  {
    name: 'Certificate Of Competence Junior Web Developer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: 'Agu 2022',
    image: '/images/certificates/bnsp-logo.png',
    emoji: '🏆',
    description: 'Sertifikasi kompetensi nasional sebagai Junior Web Developer dari BNSP. Berlaku hingga Agustus 2025.',
    id: '62019 2513 18247 2022',
    skills: ['CSS', 'HTML', 'Web Development'],
    bgGradient: 'bg-gradient-to-br from-red-500 to-orange-500',
    verified: true,
  },
]
</script>
