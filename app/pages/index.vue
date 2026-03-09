<template>
  <div>
    <SectionHome />
    <SectionAbout />
    <SectionPortfolio />
    <SectionCertificate />
    <SectionPublication />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Rasas - Software Developer Portfolio. Explore my work experience, projects, certifications, and publications.' },
  ],
})

// Scroll animation observer
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  )

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})
</script>
