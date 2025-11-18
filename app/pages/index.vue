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
// Disable layout for this page since HeroSection has its own header
definePageMeta({
  layout: false
})
</script>