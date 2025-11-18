<template>
  <div>
    <div class="hidden md:block">
      <HeroSection />
    </div>
    <div class="md:hidden">
      <MobileIndexHeroSection />
    </div>
    <ServicesSection />
    <div class="hidden md:block">
      <AboutSection />
    </div>
    <div class="md:hidden">
      <MobileIndexAboutSection />
    </div>
    <IndexctaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Aika - Agência de Criação de Sites, Aplicativos e Sistemas com IA',
  meta: [
    { name: 'description', content: 'Potencialize seu negócio com a Aika. Somos especialistas na criação de sites, aplicativos e sistemas personalizados, integrando inteligência artificial para resultados incríveis.' }
  ]
})

// Disable layout for this page since HeroSection has its own header
definePageMeta({
  layout: false
})
</script>