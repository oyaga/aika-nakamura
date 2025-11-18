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
useHead({
  title: 'Sobre a Aika | Nossa História e Expertise em Tecnologia e IA',
  meta: [
    { name: 'description', content: 'Conheça a Aika, a agência que une criatividade e tecnologia. Saiba mais sobre nossa história, nossa paixão por inovação e as ferramentas que usamos para criar soluções digitais de impacto.' }
  ]
})

// Disable layout for this page since HeroSection has its own header
definePageMeta({
  layout: false
})
</script>

<style scoped>
</style>
