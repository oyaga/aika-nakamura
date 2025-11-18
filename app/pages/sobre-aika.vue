<template>
  <div>
    <!-- Hero Section -->
    <div class="hidden md:block">
      <SobreAikaHeroAboutSection />
    </div>
    <div class="md:hidden">
      <MobileSobreAikaHeroAboutSection />
    </div>

    <!-- About Aika Section - Componente único responsivo -->
    <SobreAikaAboutAikaSection />

    <!-- Tools Section -->
    <SobreAikaToolsSection />

    <!-- CTA Section -->
    <SobreAikaAboutCTA />
  </div>
</template>

<script setup lang="ts">
// Disable layout for this page since HeroSection has its own header
definePageMeta({
  layout: false
})
</script>

<style scoped>
</style>
