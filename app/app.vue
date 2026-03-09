<template>
  <div class="min-h-screen transition-colors duration-500 bg-gradient-mesh">
    <CustomCursor />
    <AppNavbar />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: 'Rasas Portfolio',
})
</script>
